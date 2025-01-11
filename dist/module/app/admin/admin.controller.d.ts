import { AdminService } from './admin.service';
import { AdminDto } from '../dto/admin.dto';
import ResponseInterface from 'src/common/interface/response.interface';
export declare class AdminController {
    private readonly new_userService;
    constructor(new_userService: AdminService);
    adminLogin(adminDto: AdminDto): Promise<ResponseInterface>;
}
