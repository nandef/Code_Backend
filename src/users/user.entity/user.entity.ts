import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nom: string;
  
    @Column()
    prenom: string;
  
    @Column()
    age:number;
}
