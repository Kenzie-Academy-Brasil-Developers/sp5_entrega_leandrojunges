import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import { Schedules} from "./scheduleUserProperties.entity";

@Entity('users')
class User{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 60})
    name:string

    @Column({length:60, unique:true})
    email: string

    @Column({length:120})
    @Exclude()
    password:string

    @Column()
    isAdm: boolean

    @Column({default:true})
    isActive : boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(()=>Schedules, (schedule)=> schedule.user)
    schedules: Schedules
}

export {User}