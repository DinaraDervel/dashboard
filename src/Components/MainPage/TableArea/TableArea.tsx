import { Button, Divider, Stack } from "@mui/material";
import ProductTable from "./ProductTable/ProductTable";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CloseIcon from "@mui/icons-material/Close";
import { observer } from "mobx-react";
import { useStores } from "../../../use-store";

const TableArea = observer(() => {
  const { productStore } = useStores();

  const loadTable = () => {
    if (!productStore.isLoading) productStore.load();
  };

  return (
    <div>
      <Divider sx={{ width: "80%" }}></Divider>
      <Stack
        direction="row"
        sx={{
          width: "80%",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" gap={2}>
          <Button
            startIcon={<DriveFolderUploadIcon />}
            onClick={() => {
              loadTable();
            }}
          >
            Загрузить данные из cvs
          </Button>
          <Button startIcon={<CreateNewFolderIcon />}>Изменить данные</Button>
        </Stack>
        <Stack direction="row" gap={2}>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button endIcon={<CloseIcon />}>Очистить</Button>
        </Stack>
      </Stack>
      <Divider sx={{ width: "80%" }}></Divider>
      <ProductTable />
    </div>
  );
});

export default TableArea;
