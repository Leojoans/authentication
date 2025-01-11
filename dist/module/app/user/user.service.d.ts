import { UserDto } from '../dto/user.dto';
export declare class UserService {
    constructor();
    adminLogin(userDto: UserDto): Promise<any>;
}
