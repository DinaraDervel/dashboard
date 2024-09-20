import { Button, Divider, Stack } from "@mui/material";
import ProductTable from "./ProductTable/ProductTable";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CloseIcon from "@mui/icons-material/Close";

const TableArea = () => {
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
          <Button startIcon={<DriveFolderUploadIcon />}>
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
};

export default TableArea;
