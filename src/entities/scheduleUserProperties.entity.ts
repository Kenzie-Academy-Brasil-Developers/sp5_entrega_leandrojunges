import { Entity, PrimaryGeneratedColumn,Column, CreateDateColumn,ManyToOne } from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity('shedules_user_properties')
class Schedules{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    date: Date

    @Column({type:'time'})
    hour: string

    @ManyToOne(()=>Properties)
    property: Properties

    @ManyToOne(()=> User, {eager: true})
    user: User
    
}
export {Schedules}