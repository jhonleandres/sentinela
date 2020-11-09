import { Column, Entity, PrimaryColumn, Unique } from "typeorm";

@Entity()
@Unique(['id','name'])
export class Tenant {

  @PrimaryColumn('int')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  host: string;

  @Column()
  port: string;

  @Column()
  username: string;
  
  @Column()
  password: string;

  @Column()
  database: string;

  @Column()
  status: string;
  
  
}
