import {
  Box,
  Typography,
  useTheme,
  TextField,
  IconButton,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
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
const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleFormSubmit = (values) => {};

  const [yatay, setYatay] = useState(0);
  const [kutuSayisi, setKutuSayisi] = useState([true]);
  const [kutular, setKutular] = useState({
    1: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: true,
    },
    2: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    3: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    4: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    5: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    6: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    7: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    8: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    9: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    10: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    11: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    12: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    13: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    14: false,
    15: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    16: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    17: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
    18: {
      StokNo: "",
      Description: "",
      target: "",
      machine: "",
      operation: "",
      Route: "",
      process: "",
      visible: false,
    },
  });
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
    
    setKutular((prevKutular) => ({
      ...prevKutular,
      [index]: {
        ...prevKutular[index],
        [key]: value,
      },
    }));
    event.preventDefault();
  };

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
  const yatayarttir = (index) => {
    setKutular((prevKutular) => ({
      ...prevKutular,
      [index]: {
        ...prevKutular[index],
        visible: true,
      },
    }));
  };
  const Acilirmenurenkleri = {
    option: (provided, state) => ({
      ...provided,
      fontSize: 12,
      color: "primary",
      backgroundColor: state.isSelected ? "white" : colors.primary[500],
    }),
  };

  function Kutu({ index }) {
    return (
      <Grid2 container spacing={-1}>
        <Grid2
          container
          display="grid"
          width="25vh"
          border="2px solid"
          textAlign="center"
          gridTemplateColumns="repeat(4, 1fr)"
        >
          <Box
            display="grid"
            border="1px solid"
            height="15vh"
            sx={{ gridColumn: "span 4" }}
          >
            <Typography color={colors.grey[100]}>Görsel</Typography>
          </Box>
          <Box
            display="grid"
            sx={{ gridColumn: "span 3" }}
            //textbox özellikleri
          >
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
            >
              {({
                values,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                onSubmit
              }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    // fullWidth:false
                    required
                    variant="filled" //filled-outlined-standart
                    type="text" //number yapılabilir
                    label="Stok No "
                    handleSubmit={onSubmit}
                    onBlur={handleBlur} //fonksiyon dokundugunda degisiyor veya degismiyor
                    value={kutular[index].StokNo}
                    onChange={(event) => handleChange5(index, "StokNo", event)} // text değişip değişmiyor
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
                    onChange={handleChange}
                    value={kutular[index].Description}
                    name="Description"
                    
                  />
                  <TextField
                    //fullWidth
                    required
                    variant="filled"
                    type="text"
                    label="Hedef"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={kutular[index].hedef}
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
                    value={kutular[index].machine}
                    name="machine"
                  />
                  <TextField
                    variant="filled"
                    type="text"
                    required
                    label="Operasyon Adı"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={kutular[index].operation}
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
                    value={kutular[index].route}
                    name="route"
                    // sx={{ gridColumn: "span 4", textAlign: "center" }}
                    disabled
                  />
                </form>
              )}
            </Formik>
          </Box>
          <Box display="grid" sx={{ gridColumn: "span 1" }}>
            <IconButton
              display="grid"
              onClick={() => yatayarttir(parseInt(index) + 1)}
            >
              <ArrowRightIcon display="grid" fontSize="large"></ArrowRightIcon>
            </IconButton>
            <IconButton
              display="grid"
              onClick={() => yatayarttir(parseInt(index) + 6)}
            >
              <ArrowDropDownIcon
                display="grid"
                fontSize="large"
              ></ArrowDropDownIcon>
            </IconButton>
          </Box>
        </Grid2>
      </Grid2>
    );
  }

  function BosKutu({ index }) {
    return (
      <Grid2 container spacing={-1}>
        <Grid2
          container
          //xl={1.5} mdOffset={yatay}
          //md={1.5} mdOffset={yatay}
          //alignItems='center'

          //gap="10px"
          display="grid"
          //gridTemplateColumns="repeat(8, 1fr)"
          //gap="10px"
          //mt="5px"
          // ml="5px"
          //display="grid"
          // mr="5px"
          width="25vh"
          // height="50%"
          // border="2px solid"
          textAlign="center"
          gridTemplateColumns="repeat(4, 1fr)"
        ></Grid2>
      </Grid2>
    );
  }

  return (
    <div>
      <Box display="grid">
        <Header title="SETTINGS" subtittle="Ayarlar" />
      </Box>
      <Box display="flex">
        {kutular[1].visible ? <Kutu index="1" /> : <BosKutu index="1" />}
        {kutular[2].visible ? <Kutu index="2" /> : <BosKutu index="2" />}
        {kutular[3].visible ? <Kutu index="3" /> : <BosKutu index="3" />}
        {kutular[4].visible ? <Kutu index="4" /> : <BosKutu index="4" />}
        {kutular[5].visible ? <Kutu index="5" /> : <BosKutu index="5" />}
        {kutular[6].visible ? <Kutu index="6" /> : <BosKutu index="6" />}
      </Box>

      <Box display="flex">
        {kutular[7].visible ? <Kutu index="7" /> : <BosKutu index="7" />}
        {kutular[8].visible ? <Kutu index="8" /> : <BosKutu index="8" />}
        {kutular[9].visible ? <Kutu index="9" /> : <BosKutu index="9" />}
        {kutular[10].visible ? <Kutu index="10" /> : <BosKutu index="10" />}
        {kutular[11].visible ? <Kutu index="11" /> : <BosKutu index="11" />}
        {kutular[12].visible ? <Kutu index="12" /> : <BosKutu index="12" />}
      </Box>

      <Box display="flex">
        {kutular[13].visible ? <Kutu index="13" /> : <BosKutu index="13" />}
        {kutular[14].visible ? <Kutu index="14" /> : <BosKutu index="14" />}
        {kutular[15].visible ? <Kutu index="15" /> : <BosKutu index="15" />}
        {kutular[16].visible ? <Kutu index="16" /> : <BosKutu index="16" />}
        {kutular[17].visible ? <Kutu index="17" /> : <BosKutu index="17" />}
        {kutular[18].visible ? <Kutu index="18" /> : <BosKutu index="18" />}
      </Box>
      <Box>
        <BosKutu></BosKutu>
      </Box>
    </div>
  );
};

export default Settings;
