import "./productRow.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ProductRow = (props) => {
  const handleDelete = async (event) => {
    event.preventDefault();
    const id = props.ProductId;
    console.log(id);
    let response = await fetch("/api/delete-product", {
      method: "POST",
      body: id,
    });
    let body = await response.json();
    if (response.status !== 200) {
      this.state.error = body.error;
    } else {
      // Product is successfully deleted
      console.log("Successfully deleted product");
    }
  };

  return (
    <div className="productRow">
      <Grid key={`productId-${props.ProductId}`} container spacing={0}>
        <Grid item xs={8}>
          <div className="productText">{props.productName}</div>
        </Grid>
        <Grid item xs={1}>
          <div className="stockText">Stock: {props.stock}</div>
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
              onClick={() => handleDelete()}
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
