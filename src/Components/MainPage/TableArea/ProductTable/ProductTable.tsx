import { Product } from "../../../../store/ProductStore";
import { observer } from "mobx-react";
import { useStores } from "../../../../use-store";
import { useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function ProductRow({ product }: { product: Product }) {
  const { barcode, item, companyArticle, size, available, onTheWay, total } =
    product;
  return (
    <tr>
      <td>{barcode}</td>
      <td>{item}</td>
      <td>{companyArticle}</td>
      <td>{size}</td>
      <td>{available}</td>
      <td>{onTheWay}</td>
      <td>{total}</td>
    </tr>
  );
}

const ProductTable = observer(() => {
  const { productStore } = useStores();

  useEffect(() => {
    if (!productStore.isLoading) productStore.load();
    // eslint-disable-next-line
  }, []);

  const rowsOfProductsRendered = productStore.rowsOfProducts.map((el) => (
    <ProductRow product={el} key={el.barcode} />
  ));

  function sort(field: keyof Product) {
    productStore.rowsOfProducts.sort((a, b) => {
      if (a[field] < b[field]) return -1;
      else if (a[field] > b[field]) return 1;
      return 0;
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            Баркод
            <ArrowDropDownIcon
              color="primary"
              onClick={() => sort("barcode")}
            />
          </th>
          <th>
            Предмет
            <ArrowDropDownIcon onClick={() => sort("item")} />
          </th>
          <th>
            Артикул поставщика
            <ArrowDropDownIcon onClick={() => sort("companyArticle")} />
          </th>
          <th>
            Размер
            <ArrowDropDownIcon onClick={() => sort("size")} />
          </th>
          <th>
            Доступно к заказу
            <ArrowDropDownIcon onClick={() => sort("available")} />
          </th>
          <th>
            Товары в пути
            <ArrowDropDownIcon onClick={() => sort("onTheWay")} />
          </th>
          <th>
            Итого кол-во товаров
            <ArrowDropDownIcon onClick={() => sort("total")} />
          </th>
        </tr>
      </thead>
      <tbody>{rowsOfProductsRendered}</tbody>
    </table>
  );
});

export default ProductTable;
