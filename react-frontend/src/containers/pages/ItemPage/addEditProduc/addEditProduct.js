
import * as React from "react";

import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";
import "./itemPage.css";


/* <CardElementsCardContent
  formsSettingsBasicProps={{
    buttonTextProps: {
      children: "Add/edit Product",
    }, */
  

    const addEditProductPage = (props) => {
        //   const { children = <></> } = props;
        const theme = useTheme();
    
        
      
        return (
        <ThemeProvider theme={theme}>
        {/* Background */}
            <div className="productName">
              {/* productName header and box*/}
              <div className="productName-header">
                <h1>product name </h1> 
                <div> all-day luna Rectangle dog mattress </div>
              </div>

                
                  {/* Middle area: productPrice and the price in box */}
                  <div className="productPrice">
                    <div className="productPrice-header">
                    <h1>product price </h1> 
                    <div>$28.99</div>
                    </div>

                {/* Middle area: productPrice and the price in box */}
                    <div className="productCategory-header">
                    <h2>productCategory</h2>
                    <div> Dog </div>
                    </div>


                    <div className="productDescription">
        {/* ItemPage header*/}
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