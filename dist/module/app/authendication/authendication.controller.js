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
exports.AuthendicationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authendication_service_1 = require("./authendication.service");
const authendication_dto_1 = require("../dto/authendication.dto");
let AuthendicationController = class AuthendicationController {
    constructor(new_userService) {
        this.new_userService = new_userService;
    }
    async adminLogin(authendicationDto) {
        return await this.new_userService.adminLogin(authendicationDto);
    }
};
__decorate([
    (0, common_1.Post)('/userauthendication'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authendication_dto_1.AuthendicationDto]),
    __metadata("design:returntype", Promise)
], AuthendicationController.prototype, "adminLogin", null);
AuthendicationController = __decorate([
    (0, swagger_1.ApiTags)('Authendication Controller'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Controller)('authendication'),
    __metadata("design:paramtypes", [authendication_service_1.AuthendicationService])
], AuthendicationController);
exports.AuthendicationController = AuthendicationController;
//# sourceMappingURL=authendication.controller.js.map