import ResponseInterface from 'src/common/interface/response.interface';
import { PriceDto } from '../dto/price.dto';
import { FareService } from './fare.service';
export declare class FareController {
    private readonly fareService;
    constructor(fareService: FareService);
    getFare(): Promise<ResponseInterface>;
    addFare(priceDto: PriceDto): Promise<ResponseInterface>;
    updateFare(priceDto: PriceDto): Promise<ResponseInterface>;
}
