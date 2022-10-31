import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('address')
class Addresses{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 60})
    district: string

    @Column({length:8})
    zipCode: string

    @Column({length: 60})
    number: string

    @Column({length: 20})
    city: string

    @Column({length: 20})
    state: string
}

export {Addresses}