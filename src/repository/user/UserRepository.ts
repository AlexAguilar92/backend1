export default class User {
  findById(id:string) {
    return {
      id:"wtorres",
      name:"William Jesus Torres Flota",
      email:"wtorres@palaceresorts.com",
      password:"P4ssw0rd",
      status:true
    }
  }
  create(user:{
  name:string,
  email:string,
  password:string,
  status:boolean}){
    try {
      return {...user, id:"wtorres"}
    } catch (error) {
      throw error;
    } finally {
      // tslint:disable-next-line:no-console
      console.log("disconnected");
    }
  }
}