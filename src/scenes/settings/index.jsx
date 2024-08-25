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
import { useState, useEffect } from "react";
import axios from "axios";
import { Variables } from "../../Variables";
import Select from "react-select";
import Gridlayout from "react-grid-layout";
const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleFormSubmit = (values) => {};

  

  
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  const [filteredData2, setFilteredData2] = useState(null);

  useEffect(() => {
    axios
      .get(Variables.API_URL + "/Machine")
      .then((response) => setData(response.data))

      .catch((error) => console.log(error));
  }, []);

  const handleChange3 = (event) => {
    setSelectedValue({ value: event.value, label: event.label });

    setFilteredData(data.filter((item) => item.ProcessName === event.label));
  };
  const setdropdownsecenekleri4 = (arr) => {
    const liste = arr.map(({ id, ProcessName, SubProcessName }) => ({
      value: id,
      label: ProcessName,
      control: SubProcessName,
    }));

    const unique = new Map();

    liste.forEach((item) => {
      if (!unique.has(item.label) && item.control === selectedValue2.label) {
        unique.set(item.label, item);
      }
    });
    return [...unique.values()];
  };
  const setdropdownsecenekleri = (arr, index) => {
    const liste = arr.map(({ id, ProcessName }) => ({
      value: id,
      label: ProcessName,
    }));

    const unique = new Map();

    liste.forEach((item) => {
      if (!unique.has(item.label)) {
        unique.set(item.label, item);
      }
    });
    return [...unique.values()];
  };

  const handleChange5 = (index, key, event) => {
    event.preventDefault();
    const value = event.target.value;
    console.log(event)
    setKutular((prevKutular) => ({
      ...prevKutular,
      [index]: {
        ...prevKutular[index],
        [key]: value,
      },
    }));
    event.preventDefault();
    console.log(kutular)
  };
  /*const handleChange5 = (index, key, event ) => {
    //console.log(index, event.target.name);
    const values = {...kutular};
    values[index][key] = event.target.value;
    //setKutular(values);
    
    console.log(values)
    console.log(kutular)
    console.log(index)
    console.log(key)
    console.log(event)




  };*/
  


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
  const handleChange4 = (event) => {
    //console.log(event)
    setSelectedValue2({ value: event.value, label: event.label });

    //setFilteredData(data.filter(item => item.SubProcessName === event.label && item.ProcessName === selectedValue.label));
    setFilteredData2(
      filteredData
        ? filteredData.filter((item) => item.SubProcessName === event.label)
        : data.filter((item) => item.SubProcessName === event.label)
    );
    //setFilteredData2(filteredData  ?  filteredData.filter(item => item.SubProcessName === event.label ) : console.log('adsdadsasd'));
  };
  const setdropdownsecenekleri3 = (arr) => {
    console.log(arr);
    const liste = arr.map(({ id, SubProcessName, ProcessName }) => ({
      value: id,
      label: SubProcessName,
      control: ProcessName,
    }));
    const unique = new Map();
    liste.forEach((item) => {
      if (!unique.has(item.label)) {
        // if (!unique.has(item.label)   ) {

        unique.set(item.label, item);
      }
    });

    return [...unique.values()];
  };
  const setdropdownsecenekleri2 = (arr) => {
    console.log(arr);
    const liste = arr.map(({ id, SubProcessName, ProcessName }) => ({
      value: id,
      label: SubProcessName,
      control: ProcessName,
    }));
    const unique = new Map();
    liste.forEach((item) => {
      if (!unique.has(item.label) && item.control === selectedValue.label) {
        // if (!unique.has(item.label)   ) {

        unique.set(item.label, item);
      }
    });
    return [...unique.values()];
  };
  /*const yatayarttir = (index) => {
    setKutular((prevKutular) => ({
      ...prevKutular,
      [index]: {
        ...prevKutular[index],
        visible: true,
      },
    }));
  };*/
  const Acilirmenurenkleri = {
    option: (provided, state) => ({
      ...provided,
      fontSize: 12,
      color: "primary",
      backgroundColor: state.isSelected ? "white" : colors.primary[500],
    }),
  };
  const[yatayx, setYatayx]= useState(0)
  const[dikeyy, setDikeyy]= useState(1)
  const[kutusayisi, setKutusayisi]= useState(1)
  
  const alanekle = (indis) => {
   
    const prevyatay=yatayx
   
    const currentKutu = kutular.filter((item) => item.indis === parseInt(indis))[0];

    

     const newKutu = { indis: kutusayisi+1,   yataykonum: currentKutu.yataykonum+8, duseykonum: currentKutu.duseykonum}
     console.log(newKutu)
     setKutular([...kutular, newKutu ]) ;
     setKutusayisi( prevKutusayisi => prevKutusayisi+1)
     setYatayx( prevyatay+8)
     
   
   };

   const alanekleDikey = (indis) => {
   
    
    const prevdikey=dikeyy
    const currentKutu = kutular.filter((item) => item.indis === parseInt(indis))[0];
     
    const newKutu = { indis: kutusayisi+1,   yataykonum: currentKutu.yataykonum, duseykonum: currentKutu.duseykonum+5}
     setKutular([...kutular, newKutu]) ;
     setKutusayisi( prevKutusayisi => prevKutusayisi+1)
     setDikeyy(prevdikey+5)
     
     
   };

  const [kutular, setKutular] = useState([
    
    
      
    {   indis: 1,
          yataykonum: 0,
          duseykonum: 1,
      },
     

   ]);
  

 
  
  
  function Kutu({ index }) {

    
  
 
   

  const deneme = () =>{
    
    setKutusayisi( prevKutusayisi => prevKutusayisi+1)
    setYatayx( prevYatayx=> prevYatayx+4)

    console.log(yatayx , "yatay deger")
   

  }
  
    return (
        <div>
        <Box
         
          display="grid"
          //width="25vh"
          border="2px solid"
          textAlign="center"
          gridTemplateColumns="repeat(8, 1fr)"
        >
          <Box
         //   display="grid"
            border="1px solid"
            //height="15vh"
            sx={{ gridColumn: "span 8" }}
          >
            <Typography color={colors.grey[100]}>Görsel</Typography>
          </Box>
          <Box
           // display="grid"
            sx={{ gridColumn: "span 6" }}
            //textbox özellikleri
          >
            <Formik onSubmit={handleFormSubmit} >
              {({
                values,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                onSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    // fullWidth:false
                    required
                    variant="filled" //filled-outlined-standart
                    type="text" //number yapılabilir
                    label="Stok No "
                    handleSubmit={onSubmit}
                    //onBlur={handleBlur} //fonksiyon dokundugunda degisiyor veya degismiyor
                    //value={kutular[index].StokNo}
                   // onChange={(event) => handleChange5(index, "StokNo", event)} // text değişip değişmiyor

                    name="StokNo"
                    size="medium" //medium ve small
                  />

                  <TextField
                    // fullWidth
                    required
                    variant="filled"
                    type="text"
                    label="Açıklama"
                    onBlur={handleBlur}
                   // onChange={(event) => handleChange5(index, "Description", event)}
                    //value={kutular[index].Description}
                    name="Description"
                  />
                  <TextField
                    //fullWidth
                    required
                    variant="filled"
                    type="text"
                    label="Hedef"
                    onBlur={handleBlur}
                    //onChange={handleChange}
                    //value={kutular[index].hedef}
                    name="target"
                  />

                  <Select
                    menuPortalTarget={document.body}
                    menuPosition="fixed"
                    styles={Acilirmenurenkleri}
                    options={
                      filteredData2
                        ? setdropdownsecenekleri4(data, index)
                        : setdropdownsecenekleri(data, index)
                    }
                    //  value={secilensatir.ProcessName}
                    //options={[{value: secilensatir.id, label: secilensatir.ProcessName}]}
                    value={selectedValue}
                    onChange={handleChange3}
                  >
                    {" "}
                    /
                  </Select>

                  <Select
                    menuPortalTarget={document.body}
                    menuPosition="fixed"
                    styles={Acilirmenurenkleri}
                    options={
                      filteredData
                        ? setdropdownsecenekleri2(data, index)
                        : setdropdownsecenekleri3(data, index)
                    }
                    //  value={secilensatir.ProcessName}
                    //options={[{value: secilensatir.id, label: secilensatir.ProcessName}]}
                    value={selectedValue2}
                    onChange={handleChange4}
                  >
                    {" "}
                    /
                  </Select>
                  <TextField
                    required
                    variant="filled"
                    type="text"
                    label="Makine Kodu"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    //value={kutular[index].machine}
                    name="machine"
                  />
                  <TextField
                    variant="filled"
                    type="text"
                    required
                    label="Operasyon Adı"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    //value={kutular[index].operation}
                    name="operation"

                    // sx={{".MuiInputBase-input": { fontSize: "0,1rem" },
                    //}}
                  />
                  <TextField
                    variant="filled"
                    type="text"
                    label="Route"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    //value={kutular[index].route}
                    name="route"
                    // sx={{ gridColumn: "span 4", textAlign: "center" }}
                    disabled
                  />
                </form>
              )}
            </Formik>
          </Box>
          <Box display="grid" sx={{ gridColumn: "span 2" }}>
            <IconButton
              display="grid"
              //onClick={() => yatayarttir(parseInt(index) + 1)}
              onClick={() =>alanekle(parseInt(index))}
            >
              <ArrowRightIcon display="grid" fontSize="large"></ArrowRightIcon>
            </IconButton>
            <IconButton
             // display="grid"
              onClick={() =>alanekleDikey(parseInt(index))}
            >
              <ArrowDropDownIcon
              //  display="grid"
                fontSize="large"
              ></ArrowDropDownIcon>
            </IconButton>
          </Box>
        </Box>
        </div>
    );
    
  }


 

  return (
   
   <Gridlayout className="layout" cols={40} rowHeight={75} width={1200}>
    <div key="header" >            <Header title="SETTINGS" subtittle="Ayarlar" />    </div>
      
     
    
    {kutular.map ((option, id) => (
    
    <div key={option.indis} data-grid={{ x:option.yataykonum, y: option.duseykonum, w: 8, h:2}} >
    <Kutu key={option.indis} index={option.indis} > </Kutu>
    </div>
    ))}
    
    </Gridlayout>
  );
};

export default Settings;
