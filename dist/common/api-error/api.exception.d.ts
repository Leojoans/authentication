import { HttpException } from '@nestjs/common';
import ResponseInterface from '../interface/response.interface';
export declare class ApiException extends HttpException {
    errorCode: number;
    message: string;
    data?: any;
    constructor(errorCode: number, message: string, data: any);
    getErrorCode(): ResponseInterface;
}
