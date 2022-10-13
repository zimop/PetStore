import "./productRow.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ProductRow = (props) => {
  return (
    <div className="productRow">
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <div className="productText">
            Supercoat Chicken Large Breed Adult Dog Food 18kg
          </div>
        </Grid>
        <Grid item xs={1}>
          <div className="stockText">Stock: 6</div>
        </Grid>
        <Grid item xs={3} container justifyContent="flex-end">
          <div className="editDeleteButtons">
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              style={{ minHeight: "40px", minWidth: "100px" }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              startIcon={<DeleteIcon />}
              style={{ minHeight: "40px", maxWidth: "100px" }}
            >
              Delete
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductRow;
