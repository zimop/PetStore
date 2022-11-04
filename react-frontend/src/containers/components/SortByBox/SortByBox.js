import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SortByBox = ({ onSort }) => {
  const handleChange = (event) => {
    onSort(event.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 100,
        }}
      >
        <InputLabel id="demo-simple-select-autowidth-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleChange}
          autoWidth
          label="Sort by"
        >
          <MenuItem value="">
            <em>Default</em>
          </MenuItem>
          <MenuItem value={"price-asc"}>Price Ascending</MenuItem>
          <MenuItem value={"price-desc"}>Price Descending</MenuItem>
          <MenuItem value={"product-name"}>Product Name A-Z</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortByBox;
