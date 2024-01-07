import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import Header from "../components/Header";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";

import { tokens } from "../theme";

const Process = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const isNonMobile = useMediaQuery("(min-width:350px)");

  const initialValues = {
    proses: "sad",
    Description: "",

    reserv: "",
    machine: "",
    ProCode: "",
  };

  return (
    <div display="grid">
      
      <Box>
        <Header title="Proses Düzenle" subtittle="Proses Ekle/Sil/Düzenle" />
      </Box>
      
      <Box
        ml="15%"
        mt="5%"
        display="grid"
        // mr="5px"
        border="2px solid"
        textAlign="center"
        borderRadius="20px"
        width="30vw"
       sx={{gridTemplateColumns:"repeat(4, minmax(2vw, 1fr))"}} 
      >
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          // validationSchema={userSchema}
          display="grid"
          sx={{display:"grid", gridColumn:"span 3" }}
        >
          
          {({
            values,

            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit} sx={{display:"grid", gridColumn:"span 3" }}>
        <Box
          display="grid"
          border="1px solid"
          textAlign="center"
          borderRadius="20px"
          height="30vh"
          // gridColumn="span 2"
          
        //   gridColumn="span 2"
        // sx={{gridColumnStart:"1", gridColumnEnd:"3"}}
        sx={{gridColumn:"span3"}}

        >
          <Typography color={colors.grey[100]}>
            Mevcut Proseslerin Listesi
          </Typography>
        </Box>
        <Box  
        display="grid"
        sx={{gridColumnStart:"1", gridColumnEnd:"5", gridRowStart:"1", gridRowEnd:"6"}}
        >
          <Button type="submit" color="secondary" variant="contained"  fullWidth
          sx={{display:"flex", mt:"20px",  fontSize:"2rem", justifyContent:"space-around"}}>
            Ekle
          </Button>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            border="2px solid"
            fullWidth
            sx={{display:"flex", mt:"40px", fontSize:"2rem", justifyContent:"space-around"}}
          >
            Güncelle
          </Button>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            fullWidth
            sx={{display:"flex", mt:"40px",  fontSize:"2rem", justifyContent:"space-around"}}
          >
            Sil
          </Button>
        </Box>

        
              <Box
                display="grid"
                gap="10px" //alanların birbiri arasındaki mesafe
                //    gridTemplateColumns="repeat(10, minmax(0, 1fr))" //oluşturulan dikey sütun
                mt="10px" //tablo baslangıcı ile üst taraf arasındaki mesafe
                ml="20px"
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat (5, (minmax(0,1fr))",
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 8" }
                }}
                  
              >
                <TextField
                  fullWidth
                  required
                  variant="filled" //filled-outlined-standart
                  type="text" //number yapılabilir
                  label="Proses Adı "
                  onBlur={handleBlur} //fonksiyon dokundugunda degisiyor veya degismiyor
                  onChange={handleChange} // text değişip değişmiyor
                  value={values.proses}
                  name="proses"
                  size="medium" //medium ve small
                  sx={{ display: "grid", gridColumn: "span 37" }}
                />

                <TextField
                  fullWidth
                  required
                  variant="filled"
                  type="text"
                  label="Açıklama"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Description}
                  name="Description"
                  sx={{ display: "grid", gridColumn: "span 37" }}
                />
                <TextField
                  fullWidth
                  required
                  variant="filled"
                  type="text"
                  label="Rezerve"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.reserv}
                  name="reserv"
                  sx={{ display: "grid", gridColumn: "span 37" }}
                />

                <TextField
                  fullWidth
                  required
                  variant="filled"
                  type="text"
                  label="Proses Kodu"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.ProCode}
                  name="ProCode"
                  sx={{ display: "grid", gridColumn: "span 37", mb: "2%" }}
                />
              </Box>
              
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default Process;
