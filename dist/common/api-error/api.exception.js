"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiException = void 0;
const common_1 = require("@nestjs/common");
const ErrorCodeMap_1 = require("./ErrorCodeMap");
class ApiException extends common_1.HttpException {
    constructor(errorCode, message, data) {
        super(ErrorCodeMap_1.ErrorCodeMap[errorCode], 200);
        this.errorCode = errorCode;
        this.message = message;
        this.data = data;
    }
    getErrorCode() {
        return {
            statusCode: this.errorCode,
            message: this.message,
            data: this.data,
        };
    }
}
exports.ApiException = ApiException;
//# sourceMappingURL=api.exception.js.map