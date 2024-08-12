import {
  Box,
  Typography,
  useTheme,
  TextField,
  
  IconButton,
} from "@mui/material";
import Header from "../../components/Header";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../../theme";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleFormSubmit = (values) => {
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
    process: "",
  };
  const Kutu = () => {
    return (
      <Box
      display="grid" 
     // gridTemplateColumns="repeat(8, 1fr)" 
      gap="10px"
        mt="5px"
        // ml="5px"
        //display="grid"
        // mr="5px"
       width="15%"
       // height="50%"
        border="2px solid"
        textAlign="center"
        gridTemplateColumns="repeat(4, 1fr)"
      
        
      >
        <Box
          display="grid"
          border="1px solid"
          height="100%"
          sx={{ gridColumn: "span 4"}}
        > 
          <Typography color={colors.grey[100]}>Görsel</Typography>
        </Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          // validationSchema={userSchema}
         display="grid"
         sx={{ gridColumn: "span 3"}}


        >
          {({
            values,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}
            display="grid"
            //sx={{  gridColumn: "span 1"}}
            >

              
              <Box
               display="grid"
               //justifyContent="start"
               //gridColumnStart="1"
                gap="10px" //alanların birbiri arasındaki mesafe
                //gridTemplateColumns="repeat(5, minmax(0, 1fr))" //oluşturulan dikey sütun
                sx={{ gridColumn: "span 2", justifyContent:"space-between"}}
//textbox özellikleri
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
               display="grid"
                sx={{ gridColumn: "span 16"}}
                  
                  // defaultValue="ilk deger" //olmayabiilir, eğer kullanılmıyorsa
                  //sx={{ gridColumn: "span 30" }} //alanların genişliği
                />

                <TextField
                 // fullWidth
                  required
                  variant="filled"
                  type="text"
                  label="Açıklama"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Description}
                  name="Description"
                display="grid"
                sx={{ gridColumn: "span 16"}}

                />
                <TextField
                  //fullWidth
                  required
                  variant="filled"
                  type="text"
                  label="Hedef"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.hedef}
                  name="target"
                  display="grid"
                sx={{ gridColumn: "span 16"}}
                />
                <TextField
                  //fullWidth
                  required
                  variant="filled"
                  type="text"
                  label="Proses"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.hedef}
                  name="process"
                  display="grid"
                  sx={{ gridColumn: "span 16"}}
                />
                <TextField
                 // fullWidth
                  required
                  variant="filled"
                  type="text"
                  label="Makine Kodu"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.machine}
                  name="machine"
                  display="grid"
                sx={{ gridColumn: "span 16"}}
                />
                <TextField
                  //fullWidth
                  variant="filled"
                  type="text"
                  required
                  label="Operasyon Adı"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.operation}
                  name="operation"
                  display="grid"
                  sx={{gridColumn: "span 16",
                   
                    
                    ".MuiInputBase-input": { fontSize: "0,1rem" },
                  }}
                  
                />
                <TextField
                  //fullWidth
                  variant="filled"
                  type="text"
                  label="Route"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.route}
                  name="route"
                 // sx={{ gridColumn: "span 4", textAlign: "center" }}
                  


                 display="grid"
                sx={{ gridColumn: "span 16"}}
                  disabled
                />
              </Box>
            </form>
          )}
        </Formik>
        <Box 
       display="grid"

       sx={{ gridColumn: "span 4"}}
        >
          <IconButton>
            <ArrowRightIcon  fontSize="large"></ArrowRightIcon>
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon fontSize="large"></ArrowDropDownIcon>
          </IconButton>
        </Box>
      </Box>
    );
  };
  return (
    <div>
      <Box
      display="grid"
      >
        <Header title="SETTINGS" subtittle="Ayarlar" />
      </Box>
      <Box 
       display="grid"
        
      >
        
          <div>
            <Kutu
             
            ></Kutu>
            
          </div>
       
      </Box>
    </div>
  );
};

export default Settings;