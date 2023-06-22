import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './interfaces/user.interfaces';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
 constructor(
  @InjectRepository(UserEntity)
  private userRepository:Repository<UserEntity>
 ){}

  findAll():Promise<User[]> {
    return this.userRepository.find();
  }
  findOne(id: number):Promise<User>{
    return this.userRepository.findOneBy({id});
  }
   create (User:CreateUserDto):Promise<User> {
     return this.userRepository.save(User);
   }

  // findOne(id: string): User {
  //   const user = this.users.find((user) => user.id === Number(id));
  //   if (!user) {
  //     throw new NotFoundException(`User with ID ${id} not found`);
  //   }
  //   return user;
  // }

  // create(user: CreateUserDto): void {
  //   this.users = [...this.users, user as unknown as User];
  // }

  // update(id: string, updatedUser: User): User {
  //   const userIndex = this.users.findIndex((user) => user.id === Number(id));
  //   if (userIndex === -1) {
  //     throw new NotFoundException(`User with ID ${id} not found`);
  //   }

  //   const userToUpdate = { ...this.users[userIndex], ...updatedUser };
  //   this.users[userIndex] = userToUpdate;
  //   return userToUpdate;
  // }

  // delete(id: string): boolean {
  //   const userIndex = this.users.findIndex((user) => user.id === Number(id));
  //   if (userIndex === -1) {
  //     throw new NotFoundException(`User with ID ${id} not found`);
  //   }

  //   this.users.splice(userIndex, 1);
  //   return true;
  // }
}
