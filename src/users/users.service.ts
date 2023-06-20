import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
//import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [
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
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find(user => user.id === Number(id));
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
       const userToUpdate=this.users.find(u=>u.id === +id);
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
    this.users=[...];
    return 
  }
 
}
 