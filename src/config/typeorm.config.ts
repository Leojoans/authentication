import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { environment } from '../environments/environment';

export const typeormMysqlOptions = (
  database: string,
  overrides?: Partial<TypeOrmModuleOptions>,
): TypeOrmModuleOptions =>
  ({
    type: 'mysql',
    port: environment.db_port,
    host: environment.db_host,
    username: environment.db_username,
    password: environment.db_password,
    database,
    autoLoadEntities: true,
    synchronize: true,
    migrationsRun: false,
    ...overrides,
  } as TypeOrmModuleOptions);


export const typeormOrmConfig = (
  database: string,
  overrides?: Partial<TypeOrmModuleOptions>,
  entities: any[] = [],
): TypeOrmModuleOptions => {
  return {
    ...typeormMysqlOptions(database, overrides),
    entities,  
  };
}; 



