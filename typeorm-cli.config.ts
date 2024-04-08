import { DataSource } from 'typeorm';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { Event } from './src/events/entities/event.entity';
import { SchemaSync1712436002306 } from './src/migrations/1712436002306-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'mysecretpassword',
  database: 'postgres',
  entities: [Coffee, Flavor, Event],
  migrations: [SchemaSync1712436002306],
});
