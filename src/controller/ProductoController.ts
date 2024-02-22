import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Producto } from "../entity/Producto";

export class ProductoController {
  private productoRepository = AppDataSource.getRepository(Producto);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.productoRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id);

    const producto = await this.productoRepository.findOne({
      where: { id },
    });

    if (!producto) {
      return "No se encontro el producto";
    }
    return producto;
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const { nombre, descripcion, precio, cantidad } = request.body;

    const producto = Object.assign(new Producto(), {
      nombre,
      descripcion,
      precio,
      cantidad,
    });

    return this.productoRepository.save(producto);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id);

    let productoARemover = await this.productoRepository.findOneBy({ id });

    if (!productoARemover) {
      return "Este producto no existe";
    }

    await this.productoRepository.remove(productoARemover);

    return "Se a eliminado correctamente el producto";
  }
}
