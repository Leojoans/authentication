import { LoginDto } from '../dto/login.dto';
export declare class LoginService {
    constructor();
    adminLogin(loginDto: LoginDto): Promise<any>;
}
