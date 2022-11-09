import * as React from "react";
import {
  Card,
  Typography,
  CardContent,
  FormControl,
  TextField,
  Button,
  CardActionArea,
  Link,
} from "@mui/material";

import "./addEditProduct.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useParams } from "react-router-dom";

function withParams(Component) {
  //https://stackoverflow.com/a/70446743
  return (props) => <Component {...props} params={useParams()} />;
}

class AddEditProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      product: null,
      dataFetched: false,
    };
  }

  async componentDidMount() {
    if (this.props.params?.productId) {
      let response = await fetch(
        `/api/get-product/${this.props.params?.productId}`
      );
      if (response.status === 200) {
        let data = await response.json();
        this.setState({
          error: this.state.error,
          product: data,
          dataFetched: true,
        });
      }
    } else {
      this.setState({
        error: this.state.error,
        product: this.state.product,
        dataFetched: true,
      });
    }
  }

  render() {
    if (!this.state.dataFetched) {
      return null;
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      let response;
      if (this.state.product) {
        data.append("productId", this.state.product.ProductId);
        response = await fetch("/api/edit-product", {
          method: "POST",
          body: data,
        });
      } else {
        response = await fetch("/api/add-product", {
          method: "POST",
          body: data,
        });
      }
      let body = await response.json();
      if (response.status !== 200) {
        this.state.error = body.error;
      } else {
        // Product is successfully submitted
        console.log("Successfully added/edited product");
        window.location = "/managerBrowseProduct";
      }
    };
    return (
      <div className="add-edit-product-page">
        <Typography variant="h3">
          {this.state.product ? "Edit Product" : "Add Product"}
        </Typography>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FormControl className="add-product-form">
                <div className="inline-flexbox">
                  <div>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      Product name
                    </Typography>
                    <TextField
                      className="inline-flexbox-item"
                      name="productName"
                      id="productName"
                      label="Product Name"
                      margin="normal"
                      required
                      defaultValue={this.state.product?.ProductName}
                    />
                  </div>
                  <div>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      Product price
                    </Typography>
                    <TextField
                      className="inline-flexbox-item"
                      name="productPrice"
                      id="productPrice"
                      label="Price"
                      margin="normal"
                      type="number"
                      required
                      defaultValue={this.state.product?.Price}
                      inputProps={{ step: 0.01 }}
                    />
                  </div>

                  <div>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      Product Category
                    </Typography>
                    <TextField
                      className="inline-flexbox-item"
                      name="productCategory"
                      id="productCategory"
                      label="Category"
                      margin="normal"
                      required
                      defaultValue={this.state.product?.ProductType}
                    />
                  </div>
                </div>
                <div>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Product Description
                  </Typography>
                  <TextField
                    id="productDescription"
                    name="productDescription"
                    label="Product Description"
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    rows={4}
                    defaultValue={this.state.product?.Description}
                  />
                </div>
                {/* Make a upload card to upload images */}
                <Card>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Upload Images
                  </Typography>

                  <CardActionArea>
                    <AddPhotoAlternateIcon sx />

                    <CardContent>
                      <Link>
                        <Typography variant="h5" component="div">
                          Click to upload
                        </Typography>
                      </Link>
                      <Typography variant="h5" component="div">
                        or drag and drop
                      </Typography>
                      <Typography variant="h5" component="div">
                        SVG, PNG, JPG or GIF (max. 3MB)
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                {this.state.error !== null && (
                  <p style={{ color: "red" }}>{this.state.error}</p>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Save
                </Button>
              </FormControl>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withParams(AddEditProductPage);

//JSX

/*
     <CardElementsCardContent
  formsSettingsBasicProps={{
    buttonTextProps: {
      children: "Add/edit Product",
    },
  

    // box with product price detail
    textFieldOutlined2Props: {
      label: "product price",
      contentProps: {
        children: "$28.99",
        className: "content",
      },
    },

    // product description box 
    multilineOutlinedProps: {
      textFieldOutlined2Props: {
        value: (
          <React.Fragment>
            The All-day Luna Rectangle
            Dog Mattress Is A
            Comfortable And Stylish Bed
            For Your Doggy
            <br />
            <br />
            features &amp; Benefits
            <br /> • Plush Velvet Lining
            For Extra Softness
            <br /> • Fully Machine
            Washable
            <br /> • Removable Cover
            <br /> • Exclusive To
            Petbarn
            <br />
            <br />
            size Guide
            <br />
            large 91x68x10cm
          </React.Fragment>
        ),
        label: "product description",
      },
    },


    sectionHeadingsFalseFalseFalseFalse: {
      sectionHeading: "Media",
    },
    formsUploaderFileUploadProps: {
      formsUploaderElementsContainerProps: {
        orDragAndDrop:
          "or drag and drop",
        svgPngJpgOrGifMax3Mb:
          "SVG, PNG, JPG or GIF (max. 3MB)",
        avatarProps: {
          adornmentIconProps: {
            src:
              "uploadfilefilled.png",
          },
        },
        linkProps: {
          link: "Click to upload",
          underline:
            "underline.png",
        },
      },
      formsUploaderElementsItemProps: {
        document_File_NamePdf:
          "my-new-cover.png",
        x100Kb: "100kb",
        text1: "•",
        complete: "Complete",
        avatarProps: {
          adornmentIconProps: {
            src:
              "uploadfilefilled-1.png",
          },
        },
        progressLinearProps: {
          children: "______",
        },
        iconButton2Props: {
          src:
            "closefilled.png",
        },
      },
    },
    typography2Props: {
      children: "Preview",
    },
    placeholderImageProps: {
      src:
        "photooutlined.png",
    },
  }}
/>;

   // box with product name detail*/ //to be shown on top - left? how to code that?
/*textFieldOutlined1Props: {
    contentProps: {
      label: "Product name",
      contentProps: {
        children:
          "The all-day luna Rectangle dog mattress",
      },
    },
  }, 
  */

// --------------------------------------------------------------------------

/*
  import React from 'react';
import { createTheme } from "@mui/material/styles";



/*
export function App(props) {
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
} 

export function App(addEditProductPage) {
  return (
    <div className='App'>
     
    </div>
  );
};

export const useTheme = () => {
  const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#2D9999",
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: "#0066ff",
        main: "#0044ff",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#ffcc00",
      },
      // Provide every color token (light, main, dark, and contrastText) when using
      // custom colors for props in Material UI's components.
      // Then you will be able to use it like this: `<Button color="custom">`
      // (For TypeScript, you need to add module augmentation for the `custom` value)
      footerText: {
        main: "#ffffff",
        // light: "#ffa726",
        // main: "#f57c00",
        // dark: "#ef6c00",
        // contrastText: 'rgba(0, 0, 0, 0.87)',
      },

      avatarColor: {
        deepOrange: "#ff5722",
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      // contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      // tonalOffset: 0.2,
    },
  });

  return theme;
};

//export default useTheme;

// Log to console
//console.log('Hello console')



//import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";
//import "./itemPage.css";


 <CardElementsCardContent
  formsSettingsBasicProps={{
    buttonTextProps: {
      children: "Add/edit Product",
    },
  

    const addEditProductPage = (props) => {
        //   const { children = <></> } = props;
        const theme = useTheme();
    
        
      
        return (
        <ThemeProvider theme={theme}>
        {// Background }
            <div className="productName">
              {// productName header and box}
              <div className="productName-header">
                <h1>product name </h1> 
                <div> all-day luna Rectangle dog mattress </div>
              </div>

                
                  {// productPrice and the price in box }
                  <div className="productPrice">
                    <div className="productPrice-header">
                    <h1>product price </h1> 
                    <div>$28.99</div>
                    </div>

                {//productCategory }
                    <div className="productCategory-header">
                    <h2>productCategory</h2>
                    <div> Dog </div>
                    </div>


                    <div className="productDescription">
                    {// product Descprition}
                      <div className="productDescription-header">
                       <h3>product Description </h3> 
                       <div>
                       <p>
                       The All-Day Luna Rectangle Dog Mattress is a comfortable and stylish bed for your  doggy

                      Features and benefits
                      • Plush velvet lining for extra softness
                      • Fully machine washable
                      • Removable cover
                      • Exclusive to Petbarn

                       Size Guide
                      Large 91x68x10cm
                     </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
    );
};

 
                  
export default App;  */
