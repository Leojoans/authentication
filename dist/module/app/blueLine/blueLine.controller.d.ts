import { BlueLineService } from './blueLine.service';
export declare class BlueLineController {
    private readonly blueLineService;
    constructor(blueLineService: BlueLineService);
    getRoute(startStation: string, endStation: string): Promise<any>;
}
