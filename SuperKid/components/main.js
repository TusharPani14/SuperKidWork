
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import logo from '/pictures/LOGO.png'
import star from '/pictures/star.png'
import hero from '/pictures/hero.png'
import plane from '/pictures/plane.png'
import grp1 from '/pictures/grp1.png'
import grp2 from '/pictures/grp2.png'
import grp3 from '/pictures/grp3.png'
import Link from "next/link";
import background from '../pictures/background.png'
import bck1 from '../pictures/bck1.png'
import { useState , useEffect } from "react";
import { styled } from "@mui/material/styles";

const FixedButtonContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "50%",
  right: "-4rem", /* Adjust the value as needed */
  transform: "translateY(-50%)",
  zIndex: 999,
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
}));
export default function Main() {
  
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
    <Box  sx={{backgroundImage:`url(${background.src})`,
          backgroundColor: "#00C881",padding:"0.5em 0.7em",height:"auto"}}>
    <Stack sx={{margin:"0 25px"}} direction="row" justifyContent="space-between">
        <Image src={logo} width={150} />
        <Link href={{pathname: '/Register', query: {price: 349}}}><Button
          style={{
            borderRadius: 28,
            backgroundColor: "#F39B0E",
            padding: "10px 15px",
            fontSize: "17px",
            textTransform: "none",
            fontWeight: "700",
            border: "5px solid #F85415",
            color:"#1C1F51"
          }}
          variant="contained"
        >
          Register Now
        </Button></Link>   
    </Stack>
    <FixedButtonContainer sx={{ opacity: showButton ? 1 : 0 }}>
        <Link href={{pathname: '/Register', query: {price: 349}}}> <Button
        variant="contained"
        sx={{
          background: "linear-gradient(0deg, #FCD281 0%, #FBCF7A 15%, #FAC669 35.99%, #F7B94D 59.99%, #F4A627 85.99%, #F39B0E 99.98%)",
          borderTopLeftRadius:"52.8079px",
          borderTopRightRadius:"52.8079px",
          fontWeight: "700",
          color: "#000",
          fontSize: "17px",
          textTransform: "none",
          width: "170px",
          transform:"rotate(-90deg)",
        }}
      >
     Register Now</Button></Link>
    </FixedButtonContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: {lg:"row",sm:"column",xs:"column"},
          justifyContent: {lg:"space-between",sm:"center",xs:"center"},
          padding: "20px",
          alignItems: "center",
        }}
      >
        <Stack sx={{ maxWidth: "60vw", justifyContent: "center", marginLeft:"4em" }}>
          <Typography
            variant="h1"
            color="initial"
            sx={{ fontWeight: "700" ,fontSize: {xs:"25px",sm:"35px",lg:"50px"}, marginBottom: "25px",letterSpacing:{sm:"-3px",xs:"-1px"} }}
            textAlign="start"
          >
            Framework for nurturing your 0-2 year old's brain development!
          </Typography>
          <Typography
            variant="h4"
            color="initial"
            sx={{ fontWeight: "400", fontSize: {xs:"15px",sm:"20px",lg:"30px"}}}
            textAlign="center"
          >
            Did you know that nearly 80% of your baby’s brain development
            happens before the age of 2?
          </Typography>
          <Stack sx={{flexDirection:{lg:"row",xs:"coloumn",sm:"row"}}}alignItems="center" margin="0 auto" mt="25px" gap="20px">
            <Stack sx={{ position: "relative" }}>
              <Image src={star} width={140} height={140} />
              <Stack
                position="absolute"
               sx={{top:{lg:"28px",xs:"34px"},left:{lg:"25px",xs:"30px"}}}
                textAlign="center"
              >
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ fontSize: {lg:"20px",xs:"18px"},fontWeight:"500" }}
                >
                  Only
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ fontSize:{lg:"30px",xs:"24px"},fontWeight:"700" }}
                >
                  Rs.349
                </Typography>
              </Stack>
            </Stack>
            <Link href={{pathname: '/Register', query: {price: 349}}}> <Button
          style={{
            borderRadius: 28,
            backgroundColor: "#F39B0E",
            padding: "10px 15px",
            fontSize: "17px",
            textTransform: "none",
            fontWeight: "700",
            border: "5px solid #F85415",
            color:"#1C1F51"
          }}
          variant="contained"
        >
          Register Now
        </Button></Link>
          </Stack>
          <Typography
            variant="h4"
            mt="30px"
            sx={{ color: "rgba(0, 0, 0, 0.58)",fontWeight:{sm:"500",xs:"700"},fontSize:{lg:"30px",sm:"25px",xs:"22px"},textAlign:"center"}}
          >
            Only 15 minutes a day of daily
          </Typography>
        </Stack>
        <Stack >
          <Image src={hero} width={500} className="hero"/>
        </Stack>
      </Box>
      </Box>
      <Box padding="30px">
        <Stack direction="row" gap="5px">
        <Typography
          variant="h4"
          sx={{ fontSize: {lg:"25px",sm:"18px",xs:"15px"}, marginBottom: "30px", color:"#1C1F51",fontWeight:"700",textAlign:"center" }}
        >
          Hence, commencing a lifelong learning journey from the start for your
          baby is crucial. If you're unsure of where to start, our team of
          professionals is available to assist you.
        </Typography>
        <Image src={plane} height={20} width={30}/> 
        </Stack>
        <Stack >
          <Stack direction="coloumn" gap="15px" justifyContent="space-around" sx={{flexWrap:{lg:"nowrap",sm:"wrap",xs:"wrap"}}}>
            <Stack
              alignItems="center"
              gap="20px"
              sx={{
                borderRadius: "15px",
                backgroundColor: "#FCD4A8",
                padding: "15px",
              }}
            >
              <Image src={grp1} height={60} width={60} />
              <Typography
                variant="h5"
                width="200px"
                textAlign="center"
                sx={{ fontWeight: "700", fontSize: {lg:"25px",sm:"18px",xs:"15px"}, color: "#F7890A" }}
              >
                CREATED BY EXPERTS
              </Typography>
              <Typography
                variant="h5"
                color="initial"
                width="280px"
                textAlign="center"
                sx={{ fontWeight: "500", fontSize:{lg:"18px",sm:"14px",xs:"13px"}, color: "#585858" }}
              >
                You’ll feel confident watching your baby become a pro under this
                program.
              </Typography>
            </Stack>
            <Stack
              alignItems="center"
              gap="20px"
              sx={{
                borderRadius: "15px",
                backgroundColor: "#FCD4A8",
                padding: "15px",
              }}
            >
              <Image src={grp2} height={60} width={60} />
              <Typography
                variant="h5"
                color="initial"
                width="200px"
                textAlign="center"
                sx={{ fontWeight: "700",fontSize: {lg:"25px",sm:"18px",xs:"15px"}, color: "#F7890A" }}
              >
                HEALTHIER SCREENTIME
              </Typography>
              <Typography
                variant="h5"
                color="initial"
                width="280px"
                textAlign="center"
                sx={{ fontWeight: "500", fontSize:{lg:"18px",sm:"14px",xs:"13px"}, color: "#585858" }}
              >
                Enables parents to actively participate and watch content for a
                minimal time
              </Typography>
            </Stack>
            <Stack
              alignItems="center"
              gap="20px"
              sx={{
                borderRadius: "15px",
                backgroundColor: "#FCD4A8",
                padding: "15px",
              }}
            >
              <Image src={grp3} height={60} width={60} />
              <Typography
                variant="h5"
                color="initial"
                width="180px"
                textAlign="center"
                sx={{ fontWeight: "700",fontSize: {lg:"25px",sm:"18px",xs:"15px"}, color: "#F7890A" }}
              >
                ONGOING SUPPORT
              </Typography>
              <Typography
                variant="h5"
                color="initial"
                width="280px"
                textAlign="center"
                sx={{ fontWeight: "500", fontSize:{lg:"18px",sm:"14px",xs:"13px"}, color: "#585858" }}
              >
                You get expert coaching and supportive community to help raise
                your baby into a genius
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box  sx={{minHeight: "auto",
          backgroundImage: `url(${bck1.src})`,
          backgroundColor: "#7983D6",backgroundSize:"cover",padding:"20px"}}>
        <Stack>
          <Stack gap="15px" sx={{flexDirection:{xs:"column",sm:"row",lg:"row"}}} >
            <Box>
              <Typography
                variant="h5"
                color="initial"
                sx={{
                  position: "relative",
                  top: "15px",
                  left: "15px",
                  backgroundColor: "white",
                  borderRadius: "50px",
                  height: "45px",
                  width: "45px",
                  textAlign: "center",
                  padding: "5px",
                  border: "3px solid #F49D00",
                  color: "#F1654A",
                  boxShadow: " 2px 4px 6px rgba(0, 0, 0, 0.25)",
                }}
              >
                1
              </Typography>
              <Stack
                alignItems="center"
                backgroundColor="#F9A23D"
                borderRadius="15px"
                padding="10px"
                width="auto"
               sx={{height:{lg:"170px",xs:"120px",sm:"170px"}}}
              >
                <Typography
                  variant="h2"
                  sx={{ color: "#1C1F51",marginBottom:"15px",fontWeigth:"700",fontSize:{lg:"30px",sm:"25px",xs:"22px"} }}
                >
                  Log In Yourself
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ color: "#E3E3E3" ,textAlign:"center",fontSize:{sm:"15px",xs:"13px"}}}
                >
                  A handful of our popular activities that will help you get
                  started. This will help you to shape a better future for your
                  child.
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Typography
                variant="h5"
                color="initial"
                sx={{
                  position: "relative",
                  top: "15px",
                  left: "15px",
                  backgroundColor: "white",
                  borderRadius: "50px",
                  height: "45px",
                  width: "45px",
                  textAlign: "center",
                  padding: "5px",
                  border: "3px solid #F49D00",
                  color: "#F1654A",
                  boxShadow: " 2px 4px 6px rgba(0, 0, 0, 0.25)",
                }}
              >
                2
              </Typography>
              <Stack
                alignItems="center"
                backgroundColor="#F9A23D"
                borderRadius="15px"
                padding="10px"
                width="auto"
                sx={{height:{lg:"170px",xs:"120px",sm:"170px"}}}
              >
                <Typography
                  variant="h2"
                  color="initial"
                  sx={{ color: "#1C1F51" ,marginBottom:"15px",fontWeigth:"700",fontSize:{lg:"30px",sm:"25px",xs:"22px"}}}
                >
                 See the Difference
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ color: "#E3E3E3",textAlign:"center",fontSize:{sm:"15px",xs:"13px"} }}
                >
                  How with as little as a few daily minutes, you can start to 
                      uncover your baby’s hidden, unconscious genius and 
                     potential minds.  
                </Typography>
              </Stack>
            </Box> 
          </Stack>
          <Stack  gap="15px" sx={{flexDirection:{xs:"column",sm:"row",lg:"row"}}}>
            <Box>
              <Typography
                variant="h5"
                color="initial"
                sx={{
                  position: "relative",
                  top: "15px",
                  left: "15px",
                  backgroundColor: "white",
                  borderRadius: "50px",
                  height: "45px",
                  width: "45px",
                  textAlign: "center",
                  padding: "5px",
                  border: "3px solid #F49D00",
                  color: "#F1654A",
                  boxShadow: " 2px 4px 6px rgba(0, 0, 0, 0.25)",
                }}
              >
                3
              </Typography>
              <Stack
                alignItems="center"
                backgroundColor="#F9A23D"
                borderRadius="15px"
                padding="10px"
                width="auto"
                sx={{height:{lg:"170px",xs:"120px",sm:"170px"}}}
              >
                <Typography
                  variant="h5"
                  color="initial"
                  sx={{ color: "#1C1F51",marginBottom:"15px",fontWeigth:"700",fontSize:{lg:"30px",sm:"25px",xs:"22px"} }}
                >
                  Enjoy the Trial
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ color: "#E3E3E3" ,textAlign:"center",fontSize:{sm:"15px",xs:"13px"}}}
                >
                  How to nurture your baby’s abilities so that they can 
                   develop and retain their skills for life before they are
                     lost due to synaptic pruning.
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Typography
                variant="h5"
                color="initial"
                sx={{
                  position: "relative",
                  top: "15px",
                  left: "15px",
                  backgroundColor: "white",
                  borderRadius: "50px",
                  height: "45px",
                  width: "45px",
                  textAlign: "center",
                  padding: "5px",
                  border: "3px solid #F49D00",
                  color: "#F1654A",
                  boxShadow: " 2px 4px 6px rgba(0, 0, 0, 0.25)",
                }}
              >
                4
              </Typography>
              <Stack
                alignItems="center"
                backgroundColor="#F9A23D"
                borderRadius="15px"
                padding="10px"
                width="auto"
                sx={{height:{lg:"170px",xs:"120px",sm:"170px"}}}
              >
                <Typography
                  variant="h5"
                  color="initial"
                  sx={{ color: "#1C1F51",marginBottom:"15px",fontWeigth:"700",fontSize:{lg:"30px",sm:"25px",xs:"22px"} }}
                >
                Super Kids Ready
                </Typography>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ color: "#E3E3E3",textAlign:"center",fontSize:{sm:"15px",xs:"13px"} }}
                >
                  How your baby can avoid the stress and pressure of
                           school works by developing learning abilities that
                   lead to a happy, successful and healthy life.  
                </Typography>
              </Stack>
            </Box> 
          </Stack>
        </Stack>
        <Stack maxWidth='250px' alignItems="center" margin="25px auto">
        <Link href={{pathname: '/Register', query: {price: 349}}}><Button
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
        </Stack>
      </Box>
    </div>
  );
}
