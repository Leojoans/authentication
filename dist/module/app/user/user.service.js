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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor() { }
    async adminLogin(userDto) {
        try {
            let result;
            console.log(userDto.name);
            let name = userDto.name;
            let age = userDto.age;
            let year = userDto.dob;
            const validUser = {
                userName: "Leo joans",
                minimumAge: 18,
                maximumBirthYear: 2006
            };
            if (name != validUser.userName) {
                result = {
                    status: false,
                    message: 'The provided username is incorrect. Please enter the correct username.',
                    data: null,
                };
            }
            else if (age < validUser.minimumAge) {
                result = {
                    status: false,
                    message: "The given age is below 18. The minimum required age is 18.",
                    data: null,
                };
            }
            else if (year > validUser.maximumBirthYear) {
                result = {
                    status: false,
                    message: 'The given year is after 2006. Please provide a year before 2006.',
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
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map