import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from 'src/events/entities/event.entity';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';

class MockCoffeeService {}

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
  providers: [{ provide: CoffeesService, useValue: new MockCoffeeService() }],
  exports: [CoffeesService],
})
export class CoffeesModule {}
