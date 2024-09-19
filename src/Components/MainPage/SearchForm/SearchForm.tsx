import { Stack } from "@mui/material";
import SearchItem from "./SearchItem/SearchItem";
import SelectItem from "./SelectItem/SelectItem";

const SearchForm = () => {
  return (
    <div>
      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        <SearchItem name="Баркод" value="6456465464645" />
        <SearchItem name="Артикул" value="ДжиСимМом0878" />
        <SearchItem name="Размер" value="44" />
        <SelectItem name="Категория" value="Джинсы" />
      </Stack>
    </div>
  );
};

export default SearchForm;
