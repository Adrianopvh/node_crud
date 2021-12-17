import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"

@Entity("categories")
export class Category {
    
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    descripiton: string;

    @CreateDateColumn()
    created_at: Date;

}