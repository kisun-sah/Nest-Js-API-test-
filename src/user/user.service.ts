import { Injectable , Post} from '@nestjs/common';
import { AddUserDto } from './dto/user.dto'
@Injectable()
export class UserService {

   
     private users = [
           {
        id : 1,
        name : "Jhone Doe",
        email : "example123@gmail.com",
        type : "normal"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "examlpe2@gmail.com",
            type:"admin"
           
    }
     ];
      getAllUsers(){

        return this.users;
        }

        getUser(id: number){
            
            
        const user =     this.users.find((user)=> user.id === id);

        if(!user ){
            throw new Error( " user not found 001");
        }

            return user;


        }

        addUser(user: AddUserDto ){
            //id
            const id = this.users.length + 1;
            this.users.push({
                id,
                ...user
            })
            return this.getUser(id);
        }




}
