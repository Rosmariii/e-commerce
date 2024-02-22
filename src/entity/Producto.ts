import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("producto")
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 255,
    nullable: false,
  })
  nombre: string;

  @Column({
    type: "varchar",
    length: 255,
    nullable: true,
  })
  descripcion: string;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
    nullable: false,
  })
  precio: number;

  @Column({
    type: "int",
    nullable: false,
  })
  cantidad: number;
}
