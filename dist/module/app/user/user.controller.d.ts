import { UserService } from './user.service';
import { UserDto } from '../dto/user.dto';
import ResponseInterface from 'src/common/interface/response.interface';
export declare class UserController {
    private readonly new_userService;
    constructor(new_userService: UserService);
    adminLogin(userDto: UserDto): Promise<ResponseInterface>;
}
