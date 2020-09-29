import { Entity, Column, PrimaryGeneratedColumn } from 'https://deno.land/x/typeorm@v0.2.23-rc9/mod.ts';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 200 })
  name: string;

  @Column("timestamp")
  created_at: Date;

}