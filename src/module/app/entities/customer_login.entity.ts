import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { environment } from '../../../environments/environment';

@Entity({ database: environment.db_schema, name: 'customer_login' })
export class CustomerLogin {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 10, unique: true })
  mobileNo: string;

  @Column({ type: 'varchar', length: 50, default: 'Customer' })
  login_type: string; 
}
