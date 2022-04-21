import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";
import Todo from "./Todo";
import IUser from "../interface/IUser";

@Entity({ schema: 'public' })
export default class User implements IUser {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({default: true})
  status: boolean;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}