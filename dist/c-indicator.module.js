"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIndicator = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const login_controller_1 = require("./module/app/login/login.controller");
const login_service_1 = require("./module/app/login/login.service");
const register_controller_1 = require("./module/app/register/register.controller");
const register_service_1 = require("./module/app/register/register.service");
let CIndicator = class CIndicator {
};
CIndicator = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([]),
        ],
        controllers: [
            login_controller_1.LoginController,
            register_controller_1.RegisterController
        ],
        providers: [
            login_service_1.LoginService,
            register_service_1.RegisterService
        ],
    })
], CIndicator);
exports.CIndicator = CIndicator;
//# sourceMappingURL=c-indicator.module.js.map