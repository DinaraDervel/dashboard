import { Product } from "../../../../store/ProductStore";
import { observer } from "mobx-react";
import { useStores } from "../../../../use-store";
import { styled } from "@mui/system";
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

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover, // Стилизация нечетных строк
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    border: `2px solid ${theme.palette.common.white}`, // Добавление границ для ячеек
  }));

  const StyledHeaderTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: `${theme.palette.common.white}`,
  }));

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: 440,
        width: "80%",
        overflowX: "auto",
        overflowY: "auto",
        borderRadius: 5,
        mt: 3,
        whiteSpace: "nowrap",
        transform: "rotateX(180deg)",
      }}
    >
      <Table sx={{ transform: "rotateX(180deg)" }}>
        <TableHead>
          <TableRow>
            <StyledHeaderTableCell>
              Баркод
              <ArrowDropDownIcon
                color="primary"
                onClick={() => sort("barcode")}
              />
            </StyledHeaderTableCell>
            <StyledHeaderTableCell>
              Предмет
              <ArrowDropDownIcon onClick={() => sort("item")} />
            </StyledHeaderTableCell>
            <StyledHeaderTableCell>
              Артикул поставщика
              <ArrowDropDownIcon onClick={() => sort("companyArticle")} />
            </StyledHeaderTableCell>
            <StyledHeaderTableCell>
              Размер
              <ArrowDropDownIcon onClick={() => sort("size")} />
            </StyledHeaderTableCell>
            <StyledHeaderTableCell>
              Доступно к заказу
              <ArrowDropDownIcon onClick={() => sort("available")} />
            </StyledHeaderTableCell>
            <StyledHeaderTableCell>
              Товары в пути
              <ArrowDropDownIcon onClick={() => sort("onTheWay")} />
            </StyledHeaderTableCell>
            <StyledHeaderTableCell>
              Итого кол-во товаров
              <ArrowDropDownIcon onClick={() => sort("total")} />
            </StyledHeaderTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productStore.products.map((product: Product) => (
            <StyledTableRow key={product.barcode}>
              <StyledTableCell>{product.barcode}</StyledTableCell>
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
            </StyledTableRow>
          ))}
        </TableBody>
        <TableRow>
          <StyledTableCell colSpan={4}>Итого:</StyledTableCell>
          <StyledTableCell>{total("available")}</StyledTableCell>
          <StyledTableCell>{total("onTheWay")}</StyledTableCell>
          <StyledTableCell>{total("total")}</StyledTableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
});

export default ProductTable;
