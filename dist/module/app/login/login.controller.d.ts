import { LoginService } from './login.service';
import { LoginDto } from '../dto/login.dto';
import ResponseInterface from 'src/common/interface/response.interface';
export declare class LoginController {
    private readonly new_userService;
    constructor(new_userService: LoginService);
    adminLogin(loginDto: LoginDto): Promise<ResponseInterface>;
}
