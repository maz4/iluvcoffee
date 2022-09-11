import { DynamicModule, Module } from '@nestjs/common';
import mongoose, { ConnectOptions } from 'mongoose';
import { CONNECTION } from 'src/coffees/coffees.constants';

@Module({
  // providers: [
  //   {
  //     provide: CONNECTION,
  //     useFactory: (): Promise<typeof mongoose> =>
  //       mongoose.connect('mongodb://localhost:27017/nest-course'),
  //   },
  // ],
})
export class DatabaseModule {
  static register(uri: string, options: ConnectOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: CONNECTION,
          // useFactory: (): Promise<typeof mongoose> => mongoose.connect(options),
          // useFactory: (): Promise<typeof mongoose> =>
          //   mongoose.createConnection(uri, options),
          useValue: mongoose.createConnection(uri, options),
        },
      ],
    };
  }
}
