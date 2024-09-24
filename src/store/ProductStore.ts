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
  rowsOfProducts: Array<Product> = [];
  //categories: Set<string> = new Set([]);
  // selectedBrand: string | undefined = undefined;
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
        this.rowsOfProducts =
          //this.selectedBrand
          //   ? this.products.filter(
          //       (product) => product.brand === this.selectedBrand
          //     )
          //   :
          this.products;
        console.log(this.products);
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

  // getBrands() {
  //   this.brands = new Set(this.products.map((product) => product.brand));
  // }

  // selectBrand(brand: string | undefined) {
  //   this.selectedBrand = brand;
  //   this.rowsOfProducts = this.selectedBrand
  //     ? this.products.filter((product) => product.brand === this.selectedBrand)
  //     : this.products;
  // }
}
