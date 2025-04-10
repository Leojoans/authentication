import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { LocalTrainsDto } from '../dto/localTrains.dto';

@Injectable()
export class LocalTrainService {
  async localTrainDetails(localTrainsDto: LocalTrainsDto): Promise<any> {
    try {
      const { from, to } = localTrainsDto;

      const filePath = path.join(process.cwd(), 'src', 'assets', 'localTrain.json');

      console.log('Reading train schedule from:', filePath);


      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const scheduleData = JSON.parse(fileContents);


      const route = scheduleData.routes.find(
        r =>
          r.from.toLowerCase() === from.toLowerCase() &&
          r.to.toLowerCase() === to.toLowerCase(),
      );

      if (!route) {
        return {
          success: false,
          message: `No trains found from ${from} to ${to}`,
          data: [],
        };
      }

      return {
        success: true,
        message: `Trains from ${from} to ${to}`,
        data: route.trains,
      };
    } catch (err) {
      console.error('Error reading train schedule:', err.message);
      throw new Error('Error reading train schedule: ' + err.message);
    }
  }

  async getFare(from: string, to: string): Promise<any> {
    try {
      if (!from || !to) {
        return {
          success: false,
          message: `Missing 'from' or 'to' parameter`,
          data: [],
        };
      }
  
      const filePath = path.join(process.cwd(), 'src', 'assets', 'localTrainFare.json');
      console.log('Reading fare data from:', filePath);
  
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const fareData = JSON.parse(fileContents);
  
      const route = fareData.routes.find(
        r => r.from?.toLowerCase() === from.toLowerCase(),
      );
  
      if (!route) {
        return {
          success: false,
          message: `No fare data found from ${from}`,
          data: [],
        };
      }
  
      const fareInfo = route.Destinations.find(
        dest => dest.stationName?.toLowerCase() === to.toLowerCase(),
      );
  
      if (!fareInfo) {
        return {
          success: false,
          message: `No fare data found from ${from} to ${to}`,
          data: [],
        };
      }
  
      return {
        success: true,
        message: `Fare from ${from} to ${to}`,
        data: fareInfo,
      };
    } catch (err) {
      console.error('Error reading fare data:', err.message);
      throw new Error('Error reading fare data: ' + err.message);
    }
  }
}



