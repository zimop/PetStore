import { Card } from '@mui/material';

<CardElementsCardContent
  formsSettingsBasicProps={{
    buttonTextProps: {
      children: "Add/edit Product",
    },
    textFieldOutlined1Props: {
      contentProps: {
        label: "Product name",
        contentProps: {
          children:
            "The all-day luna Rectangle dog mattress",
        },
      },
    },
    textFieldOutlined2Props: {
      label: "product price",
      contentProps: {
        children: "$28.99",
        className: "content",
      },
    },
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