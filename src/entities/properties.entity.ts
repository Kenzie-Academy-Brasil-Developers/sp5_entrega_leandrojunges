import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Addresses } from "./addresses.entity";
import { Categories } from "./category.entity";
import { Schedules } from "./scheduleUserProperties.entity";


@Entity('properties')
class Properties{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({default: false})
    sold: boolean

    @Column({type: "decimal", precision: 12, scale:2})
    value: number

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(()=> Addresses)@JoinColumn()
    address: Addresses

    @ManyToOne(()=>Categories)
    category: Categories

    @OneToMany(()=>Schedules, (schedule)=> schedule.property)
    schedules: Schedules[]
}

export{Properties}
