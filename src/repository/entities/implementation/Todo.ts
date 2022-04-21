import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity({ schema: "public" })
export default class Todo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;

  @Column({ default: true })
  active: boolean

  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}