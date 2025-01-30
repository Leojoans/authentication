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
exports.AuthendicationService = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
let AuthendicationService = class AuthendicationService {
    constructor() { }
    async adminLogin(authendicationDto) {
        try {
            const email = authendicationDto.email;
            const password = authendicationDto.password;
            const mobileNo = authendicationDto.mobileNo;
            if (email !== "leo@email.com") {
                return {
                    status: false,
                    message: 'Given email is wrong.',
                    data: null,
                };
            }
            if (password !== "leo88169916") {
                return {
                    status: false,
                    message: 'Given password is wrong.',
                    data: null,
                };
            }
            if (mobileNo.toString().length !== 10) {
                return {
                    status: false,
                    message: 'Given mobile number is not equal to 10 digits.',
                    data: null,
                };
            }
            const payload = { mobileNo: mobileNo };
            const jwtToken = jwt.sign(payload, '1234567890', {
                expiresIn: '1h',
            });
            return {
                status: true,
                message: 'Login successful',
                data: null,
                jwt: { token: jwtToken },
            };
        }
        catch (err) {
            throw new Error(`Error in adminLogin: ${err.message}`);
        }
    }
};
AuthendicationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AuthendicationService);
exports.AuthendicationService = AuthendicationService;
//# sourceMappingURL=authendication.service.js.map