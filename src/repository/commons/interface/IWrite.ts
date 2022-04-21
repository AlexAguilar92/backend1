export default interface IWrite<T> {
  create(t: Partial<T>): Promise<T>;

  update(t: Partial<T>): Promise<T>;

  delete(id: string): Promise<void>;
}