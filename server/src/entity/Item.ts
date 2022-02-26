import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  level: number;

  @Column()
  status: number;

  @Column()
  imagePath: string;

  @ManyToOne(() => User, (user) => user.items)
  user: User;
}
