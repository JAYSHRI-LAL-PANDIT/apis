import { Roles } from "src/utility/common/user.roles.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id:Number;
    @Column()
    name:String;
    @Column()
    email:String;
    @Column()
    password:String;
    @Column({type:'enum', enum:Roles,array:true,default:[Roles.USER]})
    roles:Roles[]
}
