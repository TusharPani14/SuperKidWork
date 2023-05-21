import styles from "../styles/Home.module.css";
import {
  Box,
  Stack,
  Typography,
  Divider,
  TextField,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import Link from "next/link";
import DoneIcon from "@mui/icons-material/Done";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const Register = () => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const submit = async () => {
    setLoading(true);
    const { data } = await axios.post(
      "http://localhost:8080/register/",
      {
        fullName,
        phoneNo,
        email,
        age,
        selectedPrice
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    console.log(data);
    window.location.href = data.link_url;
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const router = useRouter();
  const query = router.query;
  const [selectedPrice, setSelectedPrice] = useState(
    query.price ? query.price : "349"
  );

  const handleChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const controlProp = (item) => ({
    checked: selectedPrice === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.kid}>
          <Link href="/">
            <Typography component="span" className={styles.super}>
              Super
            </Typography>
            Kid
          </Link>
        </Box>
        <Box
          className={styles.content}
          sx={{
            display: {
              xs: "stack",
              sm: "stack",
              md: "grid",
            },
          }}
          gridTemplateColumns="repeat(12, 1fr)"
          gap={2}
        >
          <Stack gridColumn="span 6" gap={2}>
            <Typography
              className={styles.heading}
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "30px",
                },
              }}
            >
              The best{" "}
              <Typography
                component="span"
                className={styles.highlight}
                sx={{ fontSize: { xs: "20px", sm: "30px" } }}
              >
                parenting Platform{" "}
              </Typography>
              with trainings, tools, Activities & Support to{" "}
              <Typography
                component="span"
                className={styles.highlight}
                sx={{ fontSize: { xs: "20px", sm: "30px" } }}
              >
                maximize{" "}
              </Typography>
              your baby’s hidden{" "}
              <Typography
                component="span"
                className={styles.highlight}
                sx={{ fontSize: { xs: "20px", sm: "30px" } }}
              >
                potential!
              </Typography>
            </Typography>
            <Divider></Divider>
            <Typography
              className={styles.points}
              sx={{ fontSize: { xs: "11px", sm: "18px" } }}
            >
              <DoneIcon
                sx={{
                  marginRight: { xs: 1, sm: 2 },
                  fontSize: { xs: "10px", sm: "20px" },
                }}
              ></DoneIcon>
              Break the limits of your child.
            </Typography>
            <Typography
              className={styles.points}
              sx={{ fontSize: { xs: "11px", sm: "18px" } }}
            >
              <DoneIcon
                sx={{
                  marginRight: { xs: 1, sm: 2 },
                  fontSize: { xs: "10px", sm: "20px" },
                }}
              ></DoneIcon>
              Created by experts. Alums of IIT Roorkee.
            </Typography>
            <Typography
              className={styles.points}
              sx={{ fontSize: { xs: "11px", sm: "18px" } }}
            >
              <DoneIcon
                sx={{
                  marginRight: { xs: 1, sm: 2 },
                  fontSize: { xs: "10px", sm: "20px" },
                }}
              ></DoneIcon>
              High-interest, activities that will awaken the true potential.
            </Typography>
            <Typography
              className={styles.points}
              sx={{ fontSize: { xs: "11px", sm: "18px" } }}
            >
              <DoneIcon
                sx={{
                  marginRight: { xs: 1, sm: 2 },
                  fontSize: { xs: "10px", sm: "20px" },
                }}
              ></DoneIcon>
              Join us in shaping the future of education.
            </Typography>
            <Divider></Divider>
            <Typography
              className={styles.points}
              sx={{ fontSize: { xs: "11px", sm: "18px" } }}
            >
              🎉 Watch your super Kid grow with superpowers
            </Typography>
          </Stack>
          <Box className={styles.form} gridColumn="span 4">
            <Stack gap={2}>
              <Typography
                variant="h5"
                className={styles.register}
                sx={{ fontSize: { xs: "20px" } }}
              >
                Register Now
              </Typography>
              <TextField
                required
                id="outlined-basic"
                label="Your Full Name"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
              <TextField
                required
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
              />
              <TextField
                required
                id="outlined-basic"
                label="Your E-mail"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                required
                id="outlined-basic"
                label="Your Child's age"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
              <FormControl>
                <FormLabel>Select Plans: </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="349"
                    control={
                      <Radio
                        {...controlProp("349")}
                        size="small"
                        sx={{
                          color: orange[800],
                          "&.Mui-checked": { color: orange[600] },
                        }}
                      />
                    }
                    label="Rs 349 per month for 1 month"
                    sx={{ color: "black" }}
                  />
                  <FormControlLabel
                    value="250"
                    control={
                      <Radio
                        {...controlProp("250")}
                        size="small"
                        sx={{
                          color: orange[800],
                          "&.Mui-checked": { color: orange[600] },
                        }}
                      />
                    }
                    label="Rs 250 per month for 3 month"
                    sx={{ color: "black" }}
                  />
                  <FormControlLabel
                    value="200"
                    control={
                      <Radio
                        {...controlProp("200")}
                        size="small"
                        sx={{
                          color: orange[800],
                          "&.Mui-checked": { color: orange[600] },
                        }}
                      />
                    }
                    label="Rs 200 per month for 6 month"
                    sx={{ color: "black" }}
                  />
                </RadioGroup>
              </FormControl>
              <Stack className={styles.price} direction="row">
                <ShoppingCartIcon
                  sx={{ marginRight: { xs: 1 }, fontSize: { xs: "20px" } }}
                ></ShoppingCartIcon>
                <Typography>
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    Total:{" "}
                  </Typography>
                  INR {selectedPrice} ONLY
                </Typography>
              </Stack>
              <LoadingButton
                loading={loading}
                variant="contained"
                onClick={() => submit()}
                fullWidth={true}
                sx={{ fontSize: "16px" }}
              >
                Pay now to help your child grow
              </LoadingButton>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Register;
