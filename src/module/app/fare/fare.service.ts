/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { PriceDto } from '../dto/price.dto';

const fs = require("fs");
const data1 = fs.readFileSync('./data/fare.json', 'utf8');

@Injectable()
export class FareService {

    constructor(

    ) { }





    async readFare(): Promise<any> {
        return fs.readFileSync('./data/fare.json', 'utf8');

    }

    async addFare(priceDto: PriceDto): Promise<any> {
        let dd = fs.readFileSync('./data/fare.json', 'utf8')
        let jsonData = JSON.parse(dd);
        jsonData.push(priceDto);

        fs.writeFileSync('./data/fare.json', JSON.stringify(jsonData, null, 2));
        console.log('Data added successfully to the JSON file.');
        return fs.readFileSync('./data/fare.json', 'utf8');


    }

    async updateFare(priceDto: PriceDto): Promise<any> {
        let dd = fs.readFileSync('./data/fare.json', 'utf8')
        let jsonData = JSON.parse(dd);

        const updatedData = { from: priceDto.from, to: priceDto.to, arrival_time: priceDto.arrival_time, depart_time: priceDto.depart_time, fare: priceDto.fare };

        jsonData = jsonData.map(data => {
            if (data.from === priceDto.from) {
                console.log('Fare exists.');
                return { ...data, ...updatedData }; // Update the Fare
            }
            return data;

        });
        fs.writeFileSync('./data/fare.json', JSON.stringify(jsonData, null, 2)); // Pretty print with 2 spaces
        console.log('Fare data updated successfully.');

        return fs.readFileSync('./data/fare.json', 'utf8');


    }


}
