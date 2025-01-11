import { RemoveService } from './remove.service';
import { RemoveDto } from '../dto/remove.dto';
import ResponseInterface from 'src/common/interface/response.interface';
export declare class RemoveController {
    private readonly new_userService;
    constructor(new_userService: RemoveService);
    adminLogin(removeDto: RemoveDto): Promise<ResponseInterface>;
}
