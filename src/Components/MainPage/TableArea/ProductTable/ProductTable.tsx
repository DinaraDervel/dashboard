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
import EditableTableCell from "./EditableTableCell/EditableTableCell";

const ProductTable = observer(() => {
  const { productStore } = useStores();

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
    <Paper sx={{ width: "100%", overflow: "auto", borderRadius: 5, mt: 3 }}>
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
          <TableBody>
            {productStore.products.map((product: Product) => (
              <TableRow key={product.barcode}>
                <TableCell>{product.barcode}</TableCell>
                <EditableTableCell
                  product={product}
                  field="item"
                  onSave={productStore.update}
                />
                <EditableTableCell
                  product={product}
                  field="companyArticle"
                  onSave={productStore.update}
                />
                <EditableTableCell
                  product={product}
                  field="size"
                  onSave={productStore.update}
                  isNumeric
                />
                <EditableTableCell
                  product={product}
                  field="available"
                  onSave={productStore.update}
                  isNumeric
                />
                <EditableTableCell
                  product={product}
                  field="onTheWay"
                  onSave={productStore.update}
                  isNumeric
                />
                <EditableTableCell
                  product={product}
                  field="total"
                  onSave={productStore.update}
                  isNumeric
                />
              </TableRow>
            ))}
          </TableBody>
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
