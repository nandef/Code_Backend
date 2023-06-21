import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './interfaces/user.interfaces';


@Injectable()
export class UsersService {
   users: User[] = [
    {
      id: 1,
      nom: 'BOGRA',
      prenom: 'fernande',
      age: 20
    },
    {
      id: 2,
      nom: 'AGNAVE',
      prenom: 'sarah',
      age: 21
    },
    {
    id: 3,
      nom: 'ZOGBE',
      prenom: 'deborah',
      age: 19
    }
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find((user) => user.id === Number(id));
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  create(user: CreateUserDto): void {
    this.users = [...this.users, user as unknown as User];
  }
  
  update(id:string ,user:User){
    //recuperer l'utlisateur a mettre a jour
       const userToUpdate=this.users.find((user) => user.id === Number(id));
       if(userToUpdate){
        return new NotFoundException('utilisateur introuvable');
       }

    //application des modifications
    if(user.nom){
      userToUpdate.nom= user.nom;
     
    }
    const updatedUsers = this.users.map(u => u.id !== +id ? u : userToUpdate);
    this.users = [...updatedUsers];
    return { updatedUser: 1, userToUpdate };
  }
    
  delete(id:string ,user:User){
    const nbOfUsersBeforeDelete = this.users.length;
    this.users=[...this.users.filter((user) => user.id === Number(id))];
    if(this.users.length < nbOfUsersBeforeDelete){
       return{deletedUser:1, nbOfUsers:this.users.length};
    } else{
        return{deletedUsers:0,nbUsers:this.users.length}
    }

  }
 
}
 