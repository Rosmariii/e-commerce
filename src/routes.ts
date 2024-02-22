import { ProductoController } from "./controller/ProductoController";
import { DireccionesController } from "./controller/DireccionesController";

export const Routes = [
  {
    method: "get",
    route: "/productos",
    controller: ProductoController,
    action: "all",
  },
  {
    method: "get",
    route: "/producto/:id",
    controller: ProductoController,
    action: "one",
  },
  {
    method: "post",
    route: "/productos",
    controller: ProductoController,
    action: "save",
  },
  {
    method: "delete",
    route: "/productos/:id",
    controller: ProductoController,
    action: "remove",
  },
  {
    method: "get",
    route: "/direcciones",
    controller: DireccionesController,
    action: "addres",
  },
];
