import { PriceDto } from '../dto/price.dto';
export declare class FareService {
    constructor();
    readFare(): Promise<any>;
    addFare(priceDto: PriceDto): Promise<any>;
    updateFare(priceDto: PriceDto): Promise<any>;
}
