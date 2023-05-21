import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import bck2 from '../pictures/bck2.png'
import globe from '/pictures/globe.png'
import people from '/pictures/people.png'
import rating from '/pictures/rating.png'
export default function SimpleAccordion() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bck2.src})`,
        backgroundColor: "#7983D6",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "15px",
      }}
    >
      <Box sx={{ maxWidth: "80vw", margin: "15px auto" }}>
        <Typography
          variant="h4"
          color="initial"
          sx={{ fontWeight: "700", fontSize: {lg:"30px",sm:"20px",xs:"18px"}, textAlign: "center" }}
        >
          FREQUENTLY ASKED QUESTIONS
        </Typography>
        <Stack mt="30px" gap="15px">
          <Accordion
            sx={{ backgroundColor: "#F89015", borderRadius: "20px" }}
            square="false"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{ fontWeight: "700", fontSize:{lg:"20px",sm:"15px",xs:"12px"}, color: "white" }}
              >
                + What is Super Kids?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontWeight: {lg:"500",xs:"700"}, fontSize:{lg:"18px",sm:"12px",xs:"10px"}, color: "white" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ backgroundColor: "#F89015", borderRadius: "20px" }}
            square="false"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{ fontWeight: "700", fontSize:{lg:"20px",sm:"15px",xs:"12px"}, color: "white" }}
              >
                + What will be the format of this program?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontWeight: {lg:"500",xs:"700"}, fontSize: {lg:"18px",sm:"12px",xs:"10px"}, color: "white" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ backgroundColor: "#F89015", borderRadius: "20px" }}
            square="false"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{ fontWeight: "700", fontSize: {lg:"20px",sm:"15px",xs:"12px"}, color: "white" }}
              >
                + Who develops the programs and activities?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontWeight: {lg:"500",xs:"700"}, fontSize: {lg:"18px",sm:"12px",xs:"10px"}, color: "white" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ backgroundColor: "#F89015", borderRadius: "20px" }}
            square="false"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{ fontWeight: "700", fontSize:{lg:"20px",sm:"15px",xs:"12px"}, color: "white" }}
              >
                + Are your activities screenfree?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontWeight: {lg:"500",xs:"700"}, fontSize: {lg:"18px",sm:"12px",xs:"10px"}, color: "white" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{ backgroundColor: "#F89015", borderRadius: "20px" }}
            square="false"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{ fontWeight: "700", fontSize:{lg:"20px",sm:"15px",xs:"12px"}, color: "white" }}
              >
                + What kind of results can I expect with the Super Kids system?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontWeight: {lg:"500",xs:"700"}, fontSize: {lg:"18px",sm:"12px",xs:"10px"}, color: "white" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ backgroundColor: "#F89015", borderRadius: "20px" }}
            square="false"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{ fontWeight: "700", fontSize:{lg:"20px",sm:"15px",xs:"12px"}, color: "white" }}
              >
                + How do I get started?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontWeight: {lg:"500",xs:"700"}, fontSize: {lg:"18px",sm:"12px",xs:"10px"}, color: "white" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Box>
      <Box mt="40px" textAlign="center" alignItems="center"> 
        <Typography
          variant="h4"
          sx={{ color: "white", fontWeight: "700", fontSize:{lg:"25px",sm:"16px",xs:"16px"} }}
        >
          We keep getting love from Super Kids worldwide
        </Typography>
        <Stack  gap="40px" mt="30px" justifyContent="center" sx={{flexDirection:{xs:"coloumn",sm:"row"}}}>
          <Stack
            alignItems="center"
            backgroundColor="#F89015"
            borderRadius="20px"
            margin="0 auto"
            boxShadow="5px 5px 5px rgba(0, 0, 0, 0.25)"
            sx={{ height:{lg:"200px",sm:"150px",xs:"150px"},
            width:{lg:"220px",sm:"150px",xs:"150px"},padding:{lg:"40px",sm:"15px",xs:"15px"},gap:{lg:"40px",sm:"20px"}}}
          >
            <Image src={globe} height={50} width={50} />
            <Typography variant="h6" sx={{ color: "white", fontWeight: "700" }}>
              158+ Countries
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            backgroundColor="#F89015"
            padding="40px"
            borderRadius="20px"
            margin="0 auto"
            boxShadow="5px 5px 5px rgba(0, 0, 0, 0.25)"
            sx={{ height:{lg:"200px",xs:"150px"},
            width:{lg:"220px",xs:"150px"},padding:{lg:"40px",xs:"10px"},gap:{lg:"40px",xs:"20px"}}}
          >
            <Image src={people} height={50} width={50} />
            <Typography variant="h6" sx={{ color: "white", fontWeight: "600" }}>
              500K+ Happy Parents
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            backgroundColor="#F89015"
            padding="60px"
            margin="0 auto"
            borderRadius="20px"
            boxShadow="5px 5px 5px rgba(0, 0, 0, 0.25)"
            sx={{ height:{lg:"200px",xs:"150px"},
            width:{lg:"220px",xs:"150px"},padding:{lg:"40px",xs:"30px"},gap:{lg:"40px",xs:"30px"}}}
          >
            <Image src={rating} height={50} width={50} />
            <Typography variant="h6" sx={{ color: "white", fontWeight: "600" }}>
              4.5+ App Rating
            </Typography>
          </Stack>
        </Stack>
        <Link href={{pathname: '/Register', query: {price: 349}}}>  <Button
    style={{
        borderRadius: 35,
        backgroundColor: "#F39B0E",
        padding: {lg:"15px 20px",sm:"10px 15px"},
        fontSize: "20px",
        textTransform:"none",
        fontWeight:"700",
        border:"5px solid #F85415",
        marginTop:"30px"
    }}
    variant="contained"
    >
    Register Now
</Button></Link>
      </Box>
      
    </Box>
  );
}
