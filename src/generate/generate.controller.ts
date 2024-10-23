import {Controller, Get} from '@nestjs/common';
import {GenerateService} from "./generate.service";
import {IGenerateProduct} from "./generate.model";

@Controller('generate')
export class GenerateController {
    constructor(private readonly generateService: GenerateService) {}

    @Get('product')
    product(): Promise<IGenerateProduct> {
        return this.generateService.generateProduct()
    }
}
