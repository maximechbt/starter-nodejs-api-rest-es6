import CrudController from "../../utils/CrudController";
import ProductModel from "./products.model";

export default class ProductController extends CrudController(ProductModel) {
 constructor(router, middleware) {
     super(router, middleware);
 }
}
