import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { user } from './interfaces/user.interface';


//localhost:3000/users
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService ){}
    @Get()
    findAll():user[]{
        return this.usersService.findAll();      
    }
    @Post()
    createUser(@Body() newUser){
        this.usersService.create(newUser);
    }
}

