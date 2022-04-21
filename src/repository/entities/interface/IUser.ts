import Todo from "../implementation/Todo";

export default interface IUser {

  id: string;

  name: string;

  email: string;

  password: string;

  status: boolean;

  todos: Todo[];
}