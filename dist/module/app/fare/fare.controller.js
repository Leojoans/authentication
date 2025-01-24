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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FareController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const price_dto_1 = require("../dto/price.dto");
const fare_service_1 = require("./fare.service");
let FareController = class FareController {
    constructor(fareService) {
        this.fareService = fareService;
    }
    async getFare() {
        let result = await this.fareService.readFare();
        if (result) {
            return result;
        }
        console.log('result:' + result);
        return result;
    }
    async addFare(priceDto) {
        let result = await this.fareService.addFare(priceDto);
        if (result) {
            return result;
        }
        console.log('result:' + result);
        return result;
    }
    async updateFare(priceDto) {
        let result = await this.fareService.updateFare(priceDto);
        if (result) {
            return result;
        }
        console.log('result:' + result);
        return result;
    }
};
__decorate([
    (0, common_1.Get)('/getFare'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FareController.prototype, "getFare", null);
__decorate([
    (0, common_1.Post)('/addFare'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [price_dto_1.PriceDto]),
    __metadata("design:returntype", Promise)
], FareController.prototype, "addFare", null);
__decorate([
    (0, common_1.Post)('/updateFare'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [price_dto_1.PriceDto]),
    __metadata("design:returntype", Promise)
], FareController.prototype, "updateFare", null);
FareController = __decorate([
    (0, swagger_1.ApiTags)('Fare Controller'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Controller)('fare'),
    __metadata("design:paramtypes", [fare_service_1.FareService])
], FareController);
exports.FareController = FareController;
//# sourceMappingURL=fare.controller.js.map