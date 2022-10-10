import * as React from "react";
import { Card } from '@mui/material';

import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";
import { flexbox } from '@mui/system';
import "./itemPage.css";



    const addEditProductPage = (props) => {
        //   const { children = <></> } = props;
        const theme = useTheme();
    
        
      
        return (
        <ThemeProvider theme={theme}>

        
        <Stack spacing={2}> 
            <Item>Dashboard</Item>
            <Item>Posts</Item>
            <Item>Pages</Item>
            <Item>Comments</Item>
            <Item>Products</Item>
            <Item>Add/Edit Products</Item>
            <Item>Categories</Item>
            <Item>Tags</Item>
            <Item>Attributes</Item>
            <Item>Analytics</Item>
            <Item>Marketing</Item>
            <Item>Appearance</Item>
            <Item>Plugins</Item>
            <Item>Snippets</Item>
            <Item>Users</Item>

        </Stack>

        <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <div className="productName">
              {/* productName header and box*/}
              <div className="productName-header">
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                </Typography>
                <h1>product name </h1> 
                
                <Typography
                  variant="body2"
                  component="div"
                  marginLeft={1}
                  marginRight={1}
                >
                  all-day luna Rectangle dog mattress
                </Typography>
              </div>
                


            
                  {/*  productPrice and the price in box */}
                  <div className="productPrice">
                    <div className="productPrice-header">
                    <h1>product price </h1> 
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    </Typography>
                   
                    <Typography
                  variant="body2"
                  component="div"
                  marginLeft={1}
                  marginRight={1}
                >
                  $28.99
                </Typography>

                    </div>

                {/* productCategory */}
                    <div className="productCategory-header">
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                </Typography>
                    <h2>productCategory</h2>
                    <div> Dog </div>
                    </div>


                    <div className="productDescription">
                    {/* product Descprition*/}
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
      </CardContent>
    </Card>
</ThemeProvider>
    );
};
                  
export default addEditProductPage;             
 


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

   // box with product name detail*/  //to be shown on top - left? how to code that?
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