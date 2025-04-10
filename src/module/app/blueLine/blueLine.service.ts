/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlueLineDto } from '../dto/blueLine.dto';

@Injectable()
export class BlueLineService {
  constructor(
   
  ) {}


  async adminLogin(startStation: string, endStation: string): Promise<any> {
    try {
        const stationData = {
            stations: [
                {
                    station_name: "Wimco Nagar Depot",
                    ETA: "10:00am",
                    ETD: "10:15am"
                },
                {
                    station_name: "Wimco Nagar",
                    ETA: "10:30am",
                    ETD: "10:45am"
                },
                {
                    station_name: "Thiruvottriyur",
                    ETA: "11:00am",
                    ETD: "11:15am"
                },
                {
                    station_name: "Thiruvottriyur Theradi",
                    ETA: "11:30am",
                    ETD: "11:45am"
                },
                {
                    station_name: "Kaladipet",
                    ETA: "12:00pm",
                    ETD: "12:15pm"
                },
                {
                    station_name: "Tollgate",
                    ETA: "12:30pm",
                    ETD: "12:45pm"
                },
                {
                    station_name: "New Washermanpet",
                    ETA: "01:00pm",
                    ETD: "01:15pm"
                },
                {
                    station_name: "Tondiarpet",
                    ETA: "01:30pm",
                    ETD: "01:45pm"
                },
                {
                    station_name: "Sri Theagaraya College",
                    ETA: "02:00pm",
                    ETD: "02:15pm"
                },
                {
                    station_name: "Washermanpet",
                    ETA: "02:30pm",
                    ETD: "02:45pm"
                },
                {
                    station_name: "Mannadi",
                    ETA: "03:00",
                    ETD: "03:15"
                },
                {
                    station_name: "High Court",
                    ETA: "03:30pm",
                    ETD: "03:45pm"
                },
                {
                    station_name: "Puratchi Thalaivar Dr. M.G. Ramachandran Central",
                    ETA: "04:00pm",
                    ETD: "04:15pm"
                },
                {
                    station_name: "Government Estate",
                    ETA: "04:30pm",
                    ETD: "04:45pm"
                },
                {
                    station_name: "LIC",
                    ETA: "05:00pm",
                    ETD: "05:15pm"
                },
                {
                    station_name: "Thousand Lights",
                    ETA: "05:30pm",
                    ETD: "05:45pm"
                },
                {
                    station_name: "AG-DMS",
                    ETA: "06:00pm",
                    ETD: "06:15pm"
                },
                {
                    station_name: "Teynampet",
                    ETA: "06:30pm",
                    ETD: "06:45pm"
                },
                {
                    station_name: "Nandanam",
                    ETA: "07:00pm",
                    ETD: "07:15pm"
                },
                {
                    station_name: "Saidapet",
                    ETA: "07:30pm",
                    ETD: "07:45pm"
                },
                {
                    station_name: "Little Mount",
                    ETA: "08:00pm",
                    ETD: "08:15pm"
                },
                {
                    station_name: "Guindy",
                    ETA: "08:30pm",
                    ETD: "08:45pm"
                },
                {
                    station_name: "Arignar Anna Alandur",
                    ETA: "09:00pm",
                    ETD: "09:15pm"
                },
                {
                    station_name: "OTA-Nanganallur Road",
                    ETA: "09:30pm",
                    ETD: "09:45pm"
                },
                {
                    station_name: "Meenambakkam",
                    ETA: "10:00pm",
                    ETD: "10:15pm"
                },
                {
                    station_name: "Chennai Airport",
                    ETA: "10:30pm",
                    ETD: "10:45pm"
                },
            ]
        };

        //Find start and end station indices
        const startIndex = stationData.stations.findIndex(
            (station) => station.station_name.toLowerCase() === startStation.toLowerCase()
        );

        const endIndex = stationData.stations.findIndex(
            (station) => station.station_name.toLowerCase() === endStation.toLowerCase()
        );

        //Validation: If either station is not found
        if (startIndex === -1 || endIndex === -1) {
            return { message: "Start or End station not found" };
        }

        //Ensure startIndex comes before endIndex
        if (startIndex > endIndex) {
            return { message: "Start station must be before end station" };
        }

        //Extract and return all stops between start and end stations
        const stopsBetween = stationData.stations.slice(startIndex, endIndex + 1);

        return { stops: stopsBetween };

    } catch (err) {
        throw err;
    }
}
  }