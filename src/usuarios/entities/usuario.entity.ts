import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn('identity')
    id : number;
    
    @Column('varchar', { length: 50 })
    usuario : string;
    
    @Column('varchar', { length: 50 })
    clave : number;
    
    @Column('varchar', { length: 50 })
    email : string;
    
    @Column('varchar', { length: 50 })
    rol : string;
    
    @Column('varchar', { length: 50 })
    premium : string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
    fechaEliminacion: Date
}
