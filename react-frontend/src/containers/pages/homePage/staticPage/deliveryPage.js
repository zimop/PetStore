// 2 Hours Delivery Page

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DeliveryPage = (props) => {
  return (
    <Card sx={{ maxWidth: 800, my: 20, mx: "auto" }}>
      <CardMedia>
        <img
          src={require("./animations/90165-cat-in-box.gif")}
          style={{
            width: "25%",
            height: "100%",
            border: 0,
          }}
          alt="Cat in a box"
        />
      </CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          fontWeight={"bold"}
          component="div"
        >
          Same Day Delivery (2hr delivery)
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign={"left"}>
          Same Day Delivery (2hr delivery) is our fast and convenient delivery
          option, so you can get your pet essentials sooner. Get it in 2 hours
          or delivery free for orders placed before 4pm Monday-Saturday and 3pm
          Sundays and public holidays local time, for delivery within the
          Melbourne, Adelaide, Sunshine Coast, Gold Coast, Cairns, Perth, Sydney
          and Brisbane metro areas (excluding East Maitland (2323), Rutherford
          (2320), Port Macquarie (2444), Charmhaven (2263), and Orange stores
          (2800). You’ll be notified by email when your delivery is on its way.
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign={"center"}>
          * We are working to expand to all national metro areas at a later
          date.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          fontWeight={"bold"}
          component="div"
        >
          Standard Delivery
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign={"left"}>
          We offers a reliable and affordable delivery service to all metro and
          regional locations within Australia including Tasmania. At this time
          we do not deliver internationally. Standard orders will take between 2
          - 10 business days to arrive, depending on your destination and
          shipping method. Delivery times may be subject to stock availability
          and Public Holidays, as such receipt of orders may be extended by up
          to 21 days. We will notify you when your order has been dispatched.
          Please note that our couriers do not operate on weekends or public
          holidays. Please be prepared for slight delays to your delivery around
          Christmas, Easter and public holidays.
        </Typography>
      </CardContent>

      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          fontWeight={"bold"}
          component="div"
        >
          Frequently asked questions
        </Typography>

        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                textAlign={"left"}
              >
                How much does standard shipping cost?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign={"left"}
              >
                Delivery charges vary depending on the size and weight of your
                order and your chosen delivery address. For an accurate delivery
                quote, place the items you wish to order in your shopping cart,
                proceed to the checkout to receive your delivery quote.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign={"left"}
              >
                Simply enter the postcode or suburb of your shipping address and
                select the relevant location from the dropdown list that appears
                and click the 'Go' button. The shipping cost calculator will
                display the total cost for delivery to your selected postcode or
                suburb. Your final shipping charges will be displayed in your
                checkout page before you proceed to payment so that you know
                exactly how much shipping will be. All prices are in Australian
                Dollars and freight costs are payable in addition to the product
                price.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          {/* Second One */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                textAlign={"left"}
              >
                How do I qualify for Free Standard Delivery?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign={"left"}
              >
                Free delivery applies to all standard delivery orders of $49 or
                more sent to Metro Postcodes only. Orders less than $49 will
                incur a fee of $6.95. Metro postcodes are decided and managed by
                our delivery partner Australia Post.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign={"left"}
              >
                Simply enter the postcode or suburb of your shipping address and
                select the relevant location from the dropdown list that appears
                and click the 'Go' button. The shipping cost calculator will
                display the total cost for delivery to your selected postcode or
                suburb within the checkout.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          {/* Third One */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                textAlign={"left"}
              >
                Do I need to be home to receive my delivery?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign={"left"}
              >
                If you are not home when the courier attempts to deliver your
                order they will typically leave a note or calling card. This
                calling card usually contains the details needed to contact the
                courier to arrange a suitable re-delivery date. The courier will
                attempt to deliver your order two times however if for any
                reason you do not contact them and/ or they are unable to
                contact you, the delivery may be returned to us.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign={"left"}
              >
                If returned, we will contact you and either arrange another
                delivery (at an additional cost to you), or we will arrange a
                refund of the order value less any incurred delivery costs. Same
                Day Deliveries (2hr delivery) will be left at your delivery
                address in a safe place providing it is accessible.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeliveryPage;
