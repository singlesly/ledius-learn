import { DataSource } from 'typeorm';
import { Bank, Card } from './banking';
import { CreateBanksTable1701184285213 } from './migrations/1701184285213-create-banks-table';

export default new DataSource({
  type: 'postgres',
  host: '31.129.105.143',
  port: 5432,
  username: 'postgres',
  password: '*k34kKdm',
  database: 'banking',
  entities: [Card, Bank],
  migrations: [CreateBanksTable1701184285213],
});
