import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";
import Message from './Message';


@Entity() 
class Channel extends BaseEntity{
    @PrimaryGeneratedColumn() //db create auto increse 데이터 고유 식별
    id:number;

    @Column({type:"text", nullable:false})
    chnnelNickName:string;

    @OneToMany(type => Message,
                message => message.innerChannel)
    messages:Message[]

    @CreateDateColumn()
    createdAt:string;

    @UpdateDateColumn()
    updatedAt:string;

}

export default Channel;