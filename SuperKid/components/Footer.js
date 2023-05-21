import { Avatar, Box, Typography } from "@mui/material";
import logo from '/pictures/LOGO.png'
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
    return ( 
        <>
        <Box className='foot' sx={{height:"100%" , display:"flex" ,justifyContent:"space-evenly !important", alignItems:"center" , flexWrap:{xl:"nowrap" , xs:"wrap"}  ,padding:"2em 0em", gap:{xs:"40px" , lg:"0px" , xl:"0px"} }}>
            <Box sx={{display:"flex" , flexDirection:"column" , alignItems:{xs:"center" , lg:"flex-start"} , gap:"10px",  position:"relative" , left:{xl:"5em" , lg:"0em" ,xs:"0em"}}}>
            <Image src={logo} width={200}/>
            <Typography sx={{color:"#000" ,  width:{xs:"0px" , md:"400px"} ,minWidth:"320px", fontSize:"14px" , lineHeight:"27px" , marginTop:"2em"}}>3rd Floor, Cowork Valley, MMS Divya Diamonds Junction, Kavuri Hills Phase 2 Rd, Hyderabad, Telangana 500033</Typography>
            <Box sx={{ display:"flex" , gap:"20px"}}>
                 <Box className='hover' sx={{color:"#AD7002" , width:"32px" , height:"32px" , borderRadius:"50%" , background:"#f7f1e6" , display:"flex" , justifyContent:"center", alignItems:"center"}} ><InstagramIcon/></Box>
                 <Box  className='hover'  sx={{color:"#AD7002" , width:"32px" , height:"32px" , borderRadius:"50%" , background:"#f7f1e6" , display:"flex" , justifyContent:"center", alignItems:"center"}} ><LanguageIcon/></Box>
                 <Box  className='hover'  sx={{color:"#AD7002" , width:"32px" , height:"32px" , borderRadius:"50%" , background:"#f7f1e6" , display:"flex" , justifyContent:"center", alignItems:"center"}} ><TwitterIcon/></Box>
                 <Box  className='hover'  sx={{color:"#AD7002" , width:"32px" , height:"32px" , borderRadius:"50%" , background:"#f7f1e6" , display:"flex" , justifyContent:"center", alignItems:"center"}} ><YouTubeIcon/></Box>
            </Box>
            <Typography sx={{color:"#000" , width:{xs:"0px" , md:"400px"} ,minWidth:"320px", fontSize:"14px" , lineHeight:"27px"}}>Copyright © 2022 Super kids</Typography>
            <Typography sx={{color:"#000" , width:{xs:"0px" , md:"400px"} ,minWidth:"320px", fontSize:"14px" , lineHeight:"27px"}}>All rights reserved</Typography>
            <Typography sx={{color:"#000" , width:{xs:"0px" , md:"400px"} , minWidth:"320px",fontSize:"16px" , lineHeight:"27px" , fontWeight:"700"}}>Credmarg technologies pvt. Ltd.(Super Kids) </Typography>
            <Typography sx={{color:"#000" , width:{xs:"0px" , md:"400px" , xl:"1200px"},minWidth:"320px",fontSize:"16px" , lineHeight:"27px" , fontWeight:"700"}}>This Site will be updated on a regular basis.
Credmarg Technologies  Private Limited (CIN-: U74999DL2021PTC386817)Registered Contact: +91 9672421830 (contact@Superkid.co.in) </Typography>
            </Box>
            <Box sx={{ display:"flex" , justifyContent:"space-evenly" , alignItems:"start", gap:"25px" , flexWrap:{xl:"nowrap" , lg:"wrap" , xs:"wrap"} , position:"relative" , right:{xl:"5em" , lg:"0em" ,xs:"0em"}}}>
                 <Box sx={{display:"flex" , flexDirection:"column" , gap:"15px"}}>
                    <Typography sx={{color:" #AD7002" , fontSize:"20px" , fontWeight:"600"}}>Company</Typography>
                    <Typography sx={{color:" #000" , fontSize:"15px"}}>About Us</Typography>
                    <Typography sx={{color:" #000" , fontSize:"15px"}}>Blog</Typography>
                    <Typography sx={{color:" #000" , fontSize:"15px"}}>Home</Typography>
                 </Box>
                 <Box sx={{display:"flex" , flexDirection:"column" , gap:"15px" }}>
                 <Typography sx={{color:" #AD7002" , fontSize:"20px" , fontWeight:"600" }}>Legal</Typography>
                 <Typography sx={{color:" #000" , fontSize:"15px" }}>Terms of use</Typography>
                    <Typography sx={{color:" #000" , fontSize:"15px" }}>Privacy policy</Typography>
                 </Box>
                 <Box sx={{display:"flex" , flexDirection:"column" , gap:"15px"}}>
                 <Typography sx={{color:" #AD7002" , fontSize:"20px" , fontWeight:"600"}}>Support</Typography>
                 <a href="mailto:contact@superkid.co.in ">contact@superkid.co.in</a>
                   <a href="tel:+9672421830">+91 9672421830</a>
                 </Box>
            </Box>
        </Box>
        </>
     );
}
 
export default Footer;