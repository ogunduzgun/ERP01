import {
  Box,
  Typography,
  useTheme,
  TextField,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import Header from "../../components/Header";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";

import { tokens } from "../../theme";

const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  let MachineCount = ["Pres", "Emaye", "23", "33", "44"];

  const isNonMobile = useMediaQuery("(min-width:350px)");

  const initialValues = {
    StokNo: "",
    Description: "",
    target: "",
    machine: "",
    operation: "",
    Route: "",
    process:"",
  };

  const Kutu = () => {
    return (
      <Box
        // mt="15px"
        // ml="5px"
        display="grid"
        // mr="5px"
        border="2px solid"
        textAlign="center"
        sx={{ gridColumn: "span 1" }}
      >
        <Box
          display="grid"
          border="1px solid"
          textAlign="center"
          height="20vh"
          sx={{ gridColumn: "span 4" }}
        >
          <Typography color={colors.grey[100]}>Görsel</Typography>
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
                gridTemplateColumns="repeat(4, minmax(0, 1fr))" //oluşturulan dikey sütun
                mt="10px" //tablo baslangıcı ile üst taraf arasındaki mesafe
                ml="10px"
                mr="10px"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 8" },
                }}
              >
                <TextField
                  // fullWidth:false
                  required
                  variant="filled" //filled-outlined-standart
                  type="text" //number yapılabilir
                  label="Stok No "
                  onBlur={handleBlur} //fonksiyon dokundugunda degisiyor veya degismiyor
                  onChange={handleChange} // text değişip değişmiyor
                  value={values.StokNo}
                  name="StokNo"
                  size="medium" //medium ve small
                  // defaultValue="ilk deger" //olmayabiilir, eğer kullanılmıyorsa
                  sx={{ gridColumn: "span 4" }} //alanların genişliği
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
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  required
                  variant="filled"
                  type="text"
                  label="Hedef"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.hedef}
                  name="target"
                  sx={{ gridColumn: "span 4" }}
                />
                 <TextField
                  fullWidth
                  required
                  variant="filled"
                  type="text"
                  label="Proses"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.hedef}
                  name="process"
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  required
                  variant="filled"
                  type="text"
                  label="Makine Kodu"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.machine}
                  name="machine"
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  required
                  label="Operasyon Adı"
                  
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.operation}
                  name="operation"
                  sx={{ gridColumn: "span 4" , '.MuiInputBase-input': { fontSize: '0,1rem' },}}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Route"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.route}
                  name="route"
                  sx={{ gridColumn: "span 4", textAlign: "center" }}
                  disabled
                />
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        defaultChecked
                        color="secondary"
                        style={{ margin: "0px" }}
                      />
                    }
                    label={
                      <span
                        style={{
                          fontSize: "1rem",
                          margin: "5px",
                          padding: "5px",
                        }}
                      >
                        Kapalı
                      </span>
                    }
                  />
                </FormGroup>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    );
  };
  return (
    <div>
      <Box>
        <Header title="SETTINGS" subtittle="Ayarlar" />
      </Box>
      <Box display="grid" gridTemplateColumns="repeat(9, 1fr)" gap="10px">
        {MachineCount.map((machine) => (
          <div>
            <Kutu key={machine} display="grid" sx={{ gridColumn: "span 2" }}></Kutu>({machine});
          </div>
        ))}
      </Box>
    </div>
  );
};

export default Settings;
