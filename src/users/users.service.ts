import { Injectable } from '@nestjs/common';
import { user } from './interfaces/user.interface';



@Injectable()
export class UsersService {
    users = [
        {
            id:1,
            nom:'BOGRA',
            prenon:'fernande',
            age:20
        },
        {
            id:2,
            nom:'AGNAVE',
            prenom:'sarah',
            age:21
        },
    ];
    // users: any[];
    findAll(): user[] {
        return this.users;
    }
    create(user: User) {
        this.users = [...this.users, user];
    }
}

