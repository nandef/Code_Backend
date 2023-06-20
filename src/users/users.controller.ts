import { Controller, Get, Body, Param, Post, Patch,Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

//import { User } from './interfaces/user.interface';


//localhost:3000/users
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: string): User {
    return this.usersService.findOne(id);
  }

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Post()
  createUser(@Body() newUser: CreateUserDto){
    this.usersService.create(newUser);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: CreateUserDto) {
    return this.usersService.update(id, user);
  }
  


     @Delete(':id')
     remove(@Param('id') id: string) {
     
     }
 
}

