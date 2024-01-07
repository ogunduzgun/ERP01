import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import Header from "../components/Header";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuItem from "@mui/material/MenuItem";

import { tokens } from "../theme";

const Machine = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const isNonMobile = useMediaQuery("(min-width:350px)");

  const initialValues = {
    makine: "",
    Description: "",
    proses: "",
    machine: "",
    MacCode: "",
  };

  return (
    <div>
      <Box>
        <Header
          title="Makine Parkı Düzenle"
          subtittle="Makine Ekle/Sil/Düzenle"
        />
      </Box>
      <Box
        ml="15%"
        mt="5%"
        display="grid"
        // mr="5px"
        border="2px solid"
        textAlign="center"
        width="30vw"
        gridTemplateColumns="repeat(3, minmax(0, 1fr))"
      >
        <Box
          display="grid"
          border="1px solid"
          textAlign="center"
          height="30vh"
          //   gridColumn="span 2"
          sx={{ gridColumnStart: "1", gridColumnEnd: "3" }}
        >
          <Typography color={colors.grey[100]}>
            Mevcut Makinelerin Listesi
          </Typography>
        </Box>
        <Box
          sx={{
            gridColumnStart: "3",
            gridColumnEnd: "4",
            gridRowStart: "1",
            gridRowEnd: "3",
          }}
        >
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            fullWidth
            sx={{
              display: "flex",
              mt: "20px",
              fontSize: "2rem",
              justifyContent: "space-around",
            }}
          >
            Sil
          </Button>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            border="2px solid"
            fullWidth
            sx={{
              display: "flex",
              mt: "40px",
              fontSize: "2rem",
              justifyContent: "space-around",
            }}
          >
            Güncelle
          </Button>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            fullWidth
            sx={{
              display: "flex",
              mt: "40px",
              fontSize: "2rem",
              justifyContent: "space-around",
            }}
          >
            Ekle
          </Button>
        </Box>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          // validationSchema={userSchema}
        >
          {({
            values,

            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="10px" //alanların birbiri arasındaki mesafe
                //    gridTemplateColumns="repeat(10, minmax(0, 1fr))" //oluşturulan dikey sütun
                mt="10px" //tablo baslangıcı ile üst taraf arasındaki mesafe
                ml="20px"
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat (5, (minmax(0,1fr))",
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 8" },
                }}
              >
                <TextField
                  fullWidth
                  required
                  variant="filled" //filled-outlined-standart
                  type="text" //number yapılabilir
                  label="Mekine Adı "
                  onBlur={handleBlur} //fonksiyon dokundugunda degisiyor veya degismiyor
                  onChange={handleChange} // text değişip değişmiyor
                  value={values.machine}
                  name="machine"
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
                >
                  {" "}
                </TextField>
                <TextField
                  fullWidth
                  required
                  select
                  variant="filled"
                  type="text"
                  label="Proses"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.proses}
                  name="proses"
                  sx={{ display: "grid", gridColumn: "span 37" }}
                >
                  <MenuItem key={1} value={"Proses1"}>
                    Proses1
                  </MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  required
                  variant="filled"
                  type="text"
                  label="Makine Kodu"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.MacCode}
                  name="MacCode"
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

export default Machine;
