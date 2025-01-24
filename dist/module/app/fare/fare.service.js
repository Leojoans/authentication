"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FareService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const data1 = fs.readFileSync('./data/fare.json', 'utf8');
let FareService = class FareService {
    constructor() { }
    async readFare() {
        return fs.readFileSync('./data/fare.json', 'utf8');
    }
    async addFare(priceDto) {
        let dd = fs.readFileSync('./data/fare.json', 'utf8');
        let jsonData = JSON.parse(dd);
        jsonData.push(priceDto);
        fs.writeFileSync('./data/fare.json', JSON.stringify(jsonData, null, 2));
        console.log('Data added successfully to the JSON file.');
        return fs.readFileSync('./data/fare.json', 'utf8');
    }
    async updateFare(priceDto) {
        let dd = fs.readFileSync('./data/fare.json', 'utf8');
        let jsonData = JSON.parse(dd);
        const updatedData = { from: priceDto.from, to: priceDto.to, arrival_time: priceDto.arrival_time, depart_time: priceDto.depart_time, fare: priceDto.fare };
        jsonData = jsonData.map(data => {
            if (data.from === priceDto.from) {
                console.log('Fare exists.');
                return Object.assign(Object.assign({}, data), updatedData);
            }
            return data;
        });
        fs.writeFileSync('./data/fare.json', JSON.stringify(jsonData, null, 2));
        console.log('Fare data updated successfully.');
        return fs.readFileSync('./data/fare.json', 'utf8');
    }
};
FareService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FareService);
exports.FareService = FareService;
//# sourceMappingURL=fare.service.js.map