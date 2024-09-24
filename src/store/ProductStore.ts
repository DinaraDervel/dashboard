import { makeAutoObservable } from "mobx";
import { getAllProducts } from "../api/request";

export type Product = {
  barcode: number;
  item: string;
  companyArticle: string;
  size: number;
  available: number;
  onTheWay: number;
  total: number;
};

export class ProductStore {
  products: Array<Product> = [];
  isLoading: boolean = false;
  error: Error | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  load() {
    this.isLoading = true;
    this.error = null;
    getAllProducts()
      .then((data) => {
        this.products = data;
      })
      .catch((err) => {
        this.error = err;
      })
      .finally(() => (this.isLoading = false));
  }

  update = (updatedProduct: Product) => {
    this.products = this.products.map((product) =>
      product.barcode === updatedProduct.barcode ? updatedProduct : product
    );
  };
}
