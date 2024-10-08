import { useState } from "react";
import { Product } from "../../../../../store/ProductStore";
import { TableCell, TextField } from "@mui/material";
import { styled } from "@mui/system";

type EditableTableCellProps = {
  product: Product;
  field: keyof Product; // Поле, которое редактируется
  onSave: (updatedProduct: Product) => void;
  isNumeric?: boolean; // Флаг, указывающий, что поле числовое
};

function EditableTableCell({
  product,
  field,
  onSave,
  isNumeric,
}: EditableTableCellProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string | number>(product[field]);
  const [error, setError] = useState<boolean>(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Валидация на число
    if (isNumeric && isNaN(Number(value))) {
      setError(true);
      return;
    }

    setError(false);
    setIsEditing(false);
    onSave({ ...product, [field]: isNumeric ? Number(value) : value });
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    border: `2px solid ${theme.palette.common.white}`, // Добавление границ для ячеек
  }));

  return (
    <StyledTableCell>
      {isEditing ? (
        <>
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleSaveClick}
            size="small"
            error={error}
            helperText={error ? "Введите корректное число" : ""}
            type={isNumeric ? "number" : "text"}
            autoFocus
          />
        </>
      ) : (
        <span onDoubleClick={handleEditClick}>{product[field]}</span>
      )}
    </StyledTableCell>
  );
}

export default EditableTableCell;
