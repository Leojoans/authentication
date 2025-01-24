import { AuthendicationService } from './authendication.service';
import { AuthendicationDto } from '../dto/authendication.dto';
import ResponseInterface from 'src/common/interface/response.interface';
export declare class AuthendicationController {
    private readonly new_userService;
    constructor(new_userService: AuthendicationService);
    adminLogin(authendicationDto: AuthendicationDto): Promise<ResponseInterface>;
}
