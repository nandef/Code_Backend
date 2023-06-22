import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './interfaces/user.interfaces';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  notificationService: any;
  constructor(
    private readonly usersService: UsersService,
     ) {}

  @Get()
  findAll():Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(id):Promise<User>{
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body()user:CreateUserDto):Promise<User>{
    return this.usersService.create(user);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): User {
  //   return this.usersService.findOne(id);
  // }

  // @Post()
  // create(@Body() user: CreateUserDto): void {
  //   this.usersService.create(user);

  //   // Envoyer une notification après la création de l'utilisateur
  //   const notificationMessage = `Nouvel utilisateur créé : ${user.nom} ${user.prenom}`;
  //   this.notificationService.sendNotification(notificationMessage);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() user: User) {
  //   const updatedUser = this.usersService.update(id, user);

  //   // Envoyer une notification après la mise à jour de l'utilisateur
  //   const notificationMessage = `Utilisateur mis à jour : ${user.nom} ${user.prenom}`;
  //   this.notificationService.sendNotification(notificationMessage);

  //   return updatedUser;
  // }

  // @Delete(':id')
  // delete(@Param('id') id: string): any {
  //   const user = this.usersService.findOne(id);
  //   const deletedUser = this.usersService.delete(id);

  //   // Envoyer une notification après la suppression de l'utilisateur
  //   if (deletedUser) {
  //     const notificationMessage = `Utilisateur supprimé : ${user.nom} ${user.prenom}`;
  //     this.notificationService.sendNotification(notificationMessage);
  //   }

  //   return deletedUser;
  // }
}
