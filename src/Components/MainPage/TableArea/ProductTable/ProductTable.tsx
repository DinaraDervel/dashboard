import { Product } from "../../../../store/ProductStore";
import { observer } from "mobx-react";
import { useStores } from "../../../../use-store";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function ProductRow({ product }: { product: Product }) {
  const { barcode, item, companyArticle, size, available, onTheWay, total } =
    product;
  return (
    <TableRow>
      <TableCell>{barcode}</TableCell>
      <TableCell>{item}</TableCell>
      <TableCell>{companyArticle}</TableCell>
      <TableCell>{size}</TableCell>
      <TableCell>{available}</TableCell>
      <TableCell>{onTheWay}</TableCell>
      <TableCell>{total}</TableCell>
    </TableRow>
  );
}

const ProductTable = observer(() => {
  const { productStore } = useStores();

  const rowsOfProductsRendered = productStore.rowsOfProducts.map((el) => (
    <ProductRow product={el} key={el.barcode} />
  ));

  // Функция сортировки по столбцу
  function sort(field: keyof Product) {
    productStore.rowsOfProducts.sort((a, b) => {
      if (a[field] < b[field]) return -1;
      else if (a[field] > b[field]) return 1;
      return 0;
    });
  }

  // Функция для вычисления Итого по столбцу field
  function total(field: keyof Product) {
    return productStore.rowsOfProducts
      .map((el) => el[field])
      .reduce((sum, i) => sum + i, 0);
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", borderRadius: 5, mt: 3 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                Баркод
                <ArrowDropDownIcon
                  color="primary"
                  onClick={() => sort("barcode")}
                />
              </TableCell>
              <TableCell>
                Предмет
                <ArrowDropDownIcon onClick={() => sort("item")} />
              </TableCell>
              <TableCell>
                Артикул поставщика
                <ArrowDropDownIcon onClick={() => sort("companyArticle")} />
              </TableCell>
              <TableCell>
                Размер
                <ArrowDropDownIcon onClick={() => sort("size")} />
              </TableCell>
              <TableCell>
                Доступно к заказу
                <ArrowDropDownIcon onClick={() => sort("available")} />
              </TableCell>
              <TableCell>
                Товары в пути
                <ArrowDropDownIcon onClick={() => sort("onTheWay")} />
              </TableCell>
              <TableCell>
                Итого кол-во товаров
                <ArrowDropDownIcon onClick={() => sort("total")} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{rowsOfProductsRendered}</TableBody>
          <TableRow>
            <TableCell colSpan={4}>Итого:</TableCell>
            <TableCell>{total("available")}</TableCell>
            <TableCell>{total("onTheWay")}</TableCell>
            <TableCell>{total("total")}</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </Paper>
  );
});

export default ProductTable;
