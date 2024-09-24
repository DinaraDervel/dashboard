import { useState } from "react";
import { Product } from "../../../../../store/ProductStore";
import { Button, TableCell, TextField } from "@mui/material";

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

  return (
    <TableCell>
      {isEditing ? (
        <>
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            size="small"
            error={error}
            helperText={error ? "Введите корректное число" : ""}
            type={isNumeric ? "number" : "text"}
          />
          <Button onClick={handleSaveClick}>Сохранить</Button>
        </>
      ) : (
        <span onDoubleClick={handleEditClick}>{product[field]}</span>
      )}
    </TableCell>
  );
}

export default EditableTableCell;
