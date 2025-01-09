/*
https://docs.nestjs.com/exception-filters#custom-exceptions
*/

import { HttpException, HttpStatus } from '@nestjs/common';
import ResponseInterface from '../interface/response.interface';
import { ErrorCodeMap } from './ErrorCodeMap';

export class ApiException extends HttpException {
  errorCode: number;
  message: string;
  data?: any;

  constructor(errorCode: number, message: string, data) {
    super(ErrorCodeMap[errorCode], 200);
    this.errorCode = errorCode;
    this.message = message;
    this.data = data;
  }

  getErrorCode(): ResponseInterface {
    return {
      statusCode: this.errorCode,
      message: this.message,
      data: this.data,
    };
  }
}
