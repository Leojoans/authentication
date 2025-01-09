import { RegisterService } from './register.service';
import { RegisterDto } from '../dto/register.dto';
import ResponseInterface from 'src/common/interface/response.interface';
export declare class RegisterController {
    private readonly new_userService;
    constructor(new_userService: RegisterService);
    adminLogin(registerDto: RegisterDto): Promise<ResponseInterface>;
}
