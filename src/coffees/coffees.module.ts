import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.contants';
import { ConfigModule } from '@nestjs/config';
import CoffeesConfig from './config/coffees.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(CoffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    { provide: COFFEE_BRANDS, useFactory: () => ['Lavaza', 'Nescafe'] },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
