import { Box, useTheme, TextField, Button } from "@mui/material";
import Header from "../components/Header";
import { Formik } from "formik";
import { DataGrid } from "@mui/x-data-grid";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import { Variables } from "../Variables";
//import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../theme";

const Sprocess = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormSubmit = (values) => {
    //console.log(values);
  };

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  
  

  // const isNonMobile = useMediaQuery("(min-width:350px)");
  const initialValues = {};

  useEffect(() => {
    axios
      .get(Variables.API_URL + "/SubProcess")
      

      .then((response) => setData(response.data))
      
      .catch((error) => console.log(error));
  }, []);

  

  const sutunlar = [
    { field: "id", headerName: "ID" },
    { field: "ProcessName", headerName: "Ana Proses", flex: 1 },
    { field: "SubProcessName", headerName: "Alt Proses", flex: 1 },
  ];

  const Acilirmenurenkleri = {
    option: (provided, state) => ({
      ...provided,
      fontSize: 12,
      color: "primary",
      backgroundColor: state.isSelected ? "white" : colors.primary[500],
    }),
  };

  const [eklenecekproses, setEklenecekproses] = useState();
  const [secilensatir, setSecilensatir] = useState(1);
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange2 = (event) => {
    //console.log(event.target.value);
    setEklenecekproses(event.target.value);
  };
  const handleRowClick = (params) => {
    console.log(params.row)
    setSecilensatir(params.row);
    setSelectedValue({value: params.row.id, label: params.row.ProcessName})
    
  };
  

  const handleChange3 = (event) => {
    setSelectedValue({value: event.value, label: event.label});
    setFilteredData(data.filter(item => item.ProcessName === event.label));

  };
  

  const setdropdownsecenekleri = arr => {
    const liste = arr.map(({ id, ProcessName }) => ({ value: id, label: ProcessName }));
   
    const unique = new Map();
  
    liste.forEach(item => {
    
      
      if (!unique.has(item.label)) {
        unique.set(item.label, item);
      }
    });
    console.log(unique)
    return [...unique.values()];
  };
 

  const update = () => {
    axios
      .put(Variables.API_URL + "/SubProcess", {
        id: secilensatir.id,
        SubProcessName: eklenecekproses,
        ProcessName: secilensatir.ProcessName,
        
      })

      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    window.location.reload();
  };

 

  const del = () => {
    axios
      .delete(Variables.API_URL + "/process/" + secilensatir.id)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    window.location.reload();
  };
  // const isNonMobile = useMediaQuery("(min-width:350px)");

  return (
    <div display="grid">
      <Box>
        <Header
          title="Alt Proses Düzenle"
          subtittle="Alt Proses Ekle/Sil/Düzenle"
        />
      </Box>

      <Box
        ml="15%"
        mt="1%"
        display="grid"
        // mr="5px"
        border="2px solid"
        textAlign="center"
        borderRadius="20px"
        width="30vw"
        //sx={{gridTemplateColumns:"repeat(2, minmax(2vw, 1fr))"}}
      >
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          // validationSchema={userSchema}
          display="grid"
          //sx={{gridColumn:"span 2" }}
        >
          {({
            values,

            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              sx={{ display: "grid", gridColumn: "span 1" }}
            >
              <Box
                display="grid"
                border="1px solid"
                textAlign="center"
                borderRadius="20px"
                height="60vh"
                gridColumn="span 21"
                //   gridColumn="span 2"
                // sx={{gridColumnStart:"1", gridColumnEnd:"3"}}
                // sx={{gridColumn:"span 3"}}
                sx={{
                  "& .MuiDataGrid-root": {
                    border: "1px",
                    borderRadius: "20px",
                  },
                  "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                    borderRadius: "20px",
                  },
                  "& .name-column--cell": {
                    color: colors.greenAccent[300],
                    borderRadius: "20px",
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                    borderRadius: "20px",
                  },
                  "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                    borderRadius: "20px",
                  },
                  "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                    borderRadius: "20px",
                  },
                  "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                  },
                }}
              >
                <DataGrid
                  rows={filteredData ? filteredData  : data}
                  columns={sutunlar}
                  sx={{ borderRadius: 250 }}
                  onRowClick={handleRowClick}
                ></DataGrid>
              </Box>

              <Box
                display="grid"
                gap="10px" //alanların birbiri arasındaki mesafe
                //    gridTemplateColumns="repeat(10, minmax(0, 1fr))" //oluşturulan dikey sütun
                mt="10px" //tablo baslangıcı ile üst taraf arasındaki mesafe
                ml="20px"
                mr="20px"
              >
                <Select
                  menuPortalTarget={document.body}
                  menuPosition="fixed"
                  styles={Acilirmenurenkleri}
                options={setdropdownsecenekleri(data)}
               //  value={secilensatir.ProcessName}
              //options={[{value: secilensatir.id, label: secilensatir.ProcessName}]}
              value={selectedValue}
              onChange={handleChange3}
                  
                >
                  /
                </Select>

                <TextField
                  fullWidth
                  required
                  variant="filled"
                  type="text"
                  label="Alt Proses"
                  onBlur={handleBlur}
                  onChange={handleChange2}
                  value={
                    eklenecekproses
                      ? eklenecekproses
                      : secilensatir.SubProcessName
                  }
                  name="subprocess"

                  //sx={{ display: "grid", gridColumn: "span 37" }}
                />
              </Box>
              <Box
                display="flex"
                fullWidth
                sx={{ justifyContent: "space-around", borderRadius: "20px" }}
                //sx={{gridColumnStart:"1", gridColumnEnd:"7", gridRowStart:"1", gridRowEnd:"9"}}
              >
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  border="2px solid"
                  sx={{
                    display: "flex",
                    mt: "20px",
                    fontSize: "2rem",
                    justifyContent: "space-around",
                    width: "66%",
                  }}
                  onClick={update}
                >
                  Ekle/Güncelle
                </Button>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  sx={{
                    display: "flex",
                    mt: "20px",
                    fontSize: " 2rem",
                    justifyContent: "space-around",
                    width: "33%",
                  }}
                  onClick={del}
                >
                  Sil
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default Sprocess;
