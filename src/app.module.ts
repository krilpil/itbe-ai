import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {SequelizeConfigService} from "./config/sequelize.config";
import {databaseConfig} from "./config/configuration";
import { GenerateModule } from './generate/generate.module';

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            useClass: SequelizeConfigService,
        }),
        ConfigModule.forRoot({
            load: [databaseConfig]
        }),
        GenerateModule
    ],
})
export class AppModule {
}
