import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { Container, TextField, Box, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Header from "../components/Header";

const Bomdesc = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [inputFields, setInputFields] = useState([{ StokNo: "", Adet: "" }]);

  const handleChangeInput = (index, event) => {
    //console.log(index, event.target.name);
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };
  const handleSubmit = (e) => {
   e.preventDefault();
    console.log("Degerler", inputFields);
  };

  const alanekle = () => {
    setInputFields([...inputFields, { StokNo: "", Adet: "" }]);
  };
  const alansil = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <Box>
      <Header title="Ürün Ağacı Düzenleme" subtittle="Ürün Ağacı Düzenleme" />
      <Box display="grid" ml="10px" mt="20px">
        <form onSubmit={handleSubmit}>
          {inputFields.map((inputField, index) => (
            <div key={index} display="inline-flex">
              <Box display="inline-flex" mr="5px" ml="5px">
                <Typography variant="h3" color={colors.greenAccent[400]}>
                  {index + 1}
                </Typography>
              </Box>

              <Box display="inline-flex" mt="5px">
                <TextField
                  name="StokNo"
                  label="StokNoGiriniz"
                  value={inputField.StokNo}
                  variant="filled"
                  // margin={theme.spacing(1)}
                  onChange={(event) => handleChangeInput(index, event)}
                ></TextField>
              </Box>

              <Box display="inline-flex" ml="5px" mr="5px" width="330px">
                <Typography variant="h5" color={colors.greenAccent[400]}>
                  StokNoAçıklamaVeriTabanındanGelecek
                </Typography>
              </Box>

              <Box display="inline-flex">
                <TextField
                  name="Adet"
                  label="AdetGiriniz"
                  value={inputField.Adet}
                  variant="filled"
                  onChange={(event) => handleChangeInput(index, event)}
                  // margin={theme.spacing(1)}
                ></TextField>
                <IconButton onClick={() => alansil(index)}>
                  <RemoveIcon> /</RemoveIcon>
                </IconButton>

                <IconButton onClick={() => alanekle()}>
                  <AddIcon> /</AddIcon>
                </IconButton>
              </Box>
            </div>
          ))}

          <Box display="flex" justifyContent="center" mt="20px">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<SaveIcon></SaveIcon>}
              onClick={handleSubmit}
            >
              <Typography
                variant="h5"
                color={colors.greenAccent[400]}
                display="inline-flex"
              >
                KAYDET
              </Typography>
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
export default Bomdesc;
