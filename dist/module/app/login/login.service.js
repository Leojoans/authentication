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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
let LoginService = class LoginService {
    constructor() { }
    async adminLogin(loginDto) {
        try {
            let result;
            console.log(loginDto.email);
            let email = loginDto.email;
            let password = loginDto.password;
            let mobileNo = loginDto.mobileNo;
            if ("leo@email.com" != email) {
                result = {
                    status: false,
                    message: 'Given email is wrong.',
                    data: null,
                };
            }
            else if ("leo88169916" != password) {
                result = {
                    status: false,
                    message: "given password is wrong",
                    data: null,
                };
            }
            else if (mobileNo.toString().length != 10) {
                result = {
                    status: false,
                    message: 'given mobile number is not equeal to 10',
                    data: null,
                };
            }
            else {
                result = {
                    status: true,
                    message: 'Login success',
                    data: null,
                };
            }
            return result;
        }
        catch (err) {
            throw err;
        }
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map