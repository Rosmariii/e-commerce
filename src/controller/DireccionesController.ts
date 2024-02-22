import { NextFunction, Request, Response } from "express";
import axios from "axios";
export class DireccionesController {
  async addres(request: Request, response: Response, next: NextFunction) {
    const { direccion } = request.query;

    const objetoDireccion = await axios.get(
      `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${direccion}`
    );

    const nombres = objetoDireccion.data.direccionesNormalizadas.map(
      (titulos) => {
        return {
          direccion: titulos.direccion,
          calle: titulos.nombre_calle,
        };
      }
    );
    return nombres;
  }
}
