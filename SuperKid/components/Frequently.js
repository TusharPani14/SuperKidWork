import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import bg from '../pictures/bg.png'
import bulb from '../pictures/bulb.png'
import globe from '../pictures/globe.png'
import prof from '../pictures/prof.png'
import starss from '../pictures/starss.png'
import Image from 'next/image';
import Button from '@mui/material/Button'
import Link from 'next/link';
const Frequently = () => {
    return ( 
        <>
        <Box sx={{height:"100%" ,   backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        flexDirection:"column", padding:"2em 0.7em ",
        backgroundColor:"#fccc99"}}>
         <Typography sx={{color:' #fff' , fontWeight:"700" , fontSize:{xs:"30px" , sm:"35px" , md:"40px" , xl:"45px"} ,alignSelf:"center"}}>FREQUENTLY ASKED QUESTIONS</Typography>
         <Box sx={{display:"flex" , justifyContent:"center" , flexWrap:"wrap" }}>
            <Image src={bulb} width={65} style={{position:"relative" , right:"2em" }}/>
         <Box sx={{display:"flex", flexDirection:"column" , justifyContent:"center" , alignItems:"center" , gap:"20px" , marginTop:"1.5em"}}>
         <Accordion className='accordian' sx={{ background: "#F89015"}}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
      <AddIcon sx={{color:"#fff"}}/>
    <Typography sx={{color:"#fff" , marginLeft:"1em",fontWeight:"700"}}>What is Super Kids?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography sx={{color:"#fff"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
      lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion className='accordian' sx={{ background: "#F89015"}}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
      <AddIcon sx={{color:"#fff"}}/>
    <Typography sx={{color:"#fff" , marginLeft:"1em",fontWeight:"700"}}>What will be the format of this program?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography sx={{color:"#fff"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
      lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion className='accordian' sx={{ background: "#F89015"}}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
      <AddIcon sx={{color:"#fff"}}/>
    <Typography sx={{color:"#fff" , marginLeft:"1em",fontWeight:"700"}}>Who develops the programs and activities?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography sx={{color:"#fff"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
      lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion className='accordian' sx={{ background: "#F89015"}}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
      <AddIcon sx={{color:"#fff"}}/>
    <Typography sx={{color:"#fff" , marginLeft:"1em",fontWeight:"700"}}>Are your activities screenfree?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography sx={{color:"#fff"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
      lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion className='accordian' sx={{ background: "#F89015"}}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
      <AddIcon sx={{color:"#fff"}}/>
    <Typography sx={{color:"#fff" , marginLeft:"1em",fontWeight:"700"}}>What kind of results can I expect with the Super Kids system?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography sx={{color:"#fff"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
      lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion className='accordian' sx={{ background: "#F89015"}}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
      <AddIcon sx={{color:"#fff"}}/>
    <Typography sx={{color:"#fff" , marginLeft:"1em" ,fontWeight:"700"}}>How do I get started?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography sx={{color:"#fff"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
      lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>

         </Box>
         </Box>
         <Typography sx={{color:' #fff' , fontWeight:"700" , fontSize:{xs:"30px" , sm:"35px" , md:"40px" , xl:"40px"} ,alignSelf:"center" , marginTop:"1.5em"}}>We keep getting love from Super Kids worldwide</Typography>
        <Box sx={{display:"flex", justifyContent:"center" , alignItems:"center" , gap:"40px", marginTop:"2em" , flexWrap:"wrap"}}>
            <Box sx={{background:"#F89015" ,boxShadow:"6.33695px 7.39311px 5.28079px rgba(0, 0, 0, 0.25)" , borderRadius:"21.1232px" , width:"310px", height:"310px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , gap:"40px"}}>
                <Image src={globe} width={100}/>
                <Typography sx={{color:"white" , fontWeight:"600", fontSize:"25px"}}>158+ Countries</Typography>
            </Box>
            <Box sx={{background:"#F89015" ,boxShadow:"6.33695px 7.39311px 5.28079px rgba(0, 0, 0, 0.25)" , borderRadius:"21.1232px" , width:"310px", height:"310px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center", gap:"40px"}}>
                <Image src={prof} width={100}/>
                <Typography sx={{color:"white" , fontWeight:"600", fontSize:"25px"}}>100K+ Happy Parents</Typography>
            </Box>
            <Box sx={{background:"#F89015" ,boxShadow:"6.33695px 7.39311px 5.28079px rgba(0, 0, 0, 0.25)" , borderRadius:"21.1232px" , width:"310px", height:"310px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center", gap:"40px"}}>
                <Image src={starss} width={100}/>
                <Typography sx={{color:"white" , fontWeight:"600", fontSize:"25px"}}>4.5+ App Rating</Typography>
            </Box>
        </Box>
        <Link href={{pathname: '/Register', query: {price: 349}}}> <Button variant="contained" sx={{background:"linear-gradient(0deg, #F29808 0.01%, #F5AA2F 30.01%, #FAC567 77%, #FCD07E 100%)" , borderRadius:"52.8079px" ,fontWeight:"700" , color:"#000" , fontSize:"14px" , textTransform:"none" , height:"40px", width:"auto", padding:"0 2em" , alignSelf:"center", marginTop:"3em"}}>Start Your Journey Now</Button></Link>
        </Box>
        </>
     );
}
 
export default Frequently;