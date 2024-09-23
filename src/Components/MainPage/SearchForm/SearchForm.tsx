import { Button, Stack } from "@mui/material";
import SearchItem from "./SearchItem/SearchItem";
import SelectItem from "./SelectItem/SelectItem";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import { observer } from "mobx-react";
import { useStores } from "../../../use-store";

let fileHandle: FileSystemFileHandle | undefined;

const SearchForm = observer(() => {
  const { productStore } = useStores();

  const saveFileOptions: FilePickerOptions = {
    types: [
      {
        description: "Json or CVS Files",
        accept: { "application/json": [".json"], "text/cvs": [".cvs"] },
      },
    ],
  };

  const saveFileAs = async (content: string) => {
    fileHandle = await window.showSaveFilePicker(saveFileOptions);
    const file: File = await fileHandle.getFile();
    save(fileHandle, content);
    return file;
  };

  const save = async (handle: FileSystemFileHandle, fileContent: string) => {
    const writableStream = await handle.createWritable();
    await writableStream.write(fileContent);
    await writableStream.close();
  };

  return (
    <div>
      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        <SearchItem name="Баркод" value="6456465464645" />
        <SearchItem name="Артикул" value="ДжиСимМом0878" />
        <SearchItem name="Размер" value="44" />
        <SelectItem name="Категория" value="Джинсы" />
      </Stack>
      <Button>Сформировать</Button>
      <Button
        startIcon={<UnarchiveIcon />}
        onClick={() => saveFileAs(JSON.stringify(productStore.products))}
      >
        Экспорт
      </Button>
    </div>
  );
});

export default SearchForm;
