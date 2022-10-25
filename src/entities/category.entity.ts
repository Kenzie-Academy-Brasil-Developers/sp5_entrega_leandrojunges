import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Properties } from "./properties.entity";

@Entity('Categories')

class Categories{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 40, unique:true})
    name: string

    @OneToMany(()=> Properties, (properties)=> properties.category)
    properties: Properties[]
}

export{Categories}