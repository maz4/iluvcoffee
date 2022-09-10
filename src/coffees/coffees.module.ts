import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from 'src/events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';

class MockCoffeeService {}
class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Coffee.name,
        schema: CoffeeSchema,
      },
      {
        name: Event.name,
        schema: EventSchema,
      },
    ]),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevelopmentConfigService
          : ProductionConfigService,
    },
    { provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe'] },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
