import { Box,  useTheme, TextField, Button } from "@mui/material";
import Header from "../components/Header";
import { Formik } from "formik";
import { DataGrid } from "@mui/x-data-grid";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import { Variables } from "../Variables";
//import useMediaQuery from "@mui/material/useMediaQuery";

import { tokens } from "../theme";



const Machine = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormSubmit = (values) => {
   
  };
  const [data, setData] = useState([]);

 // const isNonMobile = useMediaQuery("(min-width:350px)");
 useEffect(() => {
  axios
    .get(Variables.API_URL + "/Machine")
    .then((response) => setData(response.data))
   

    .catch((error) => console.log(error));
}, []);

const [filteredData, setFilteredData] = useState(null);
const [filteredData2, setFilteredData2] = useState(null);


  const initialValues = {
    proses: "sad",
    Description: "",

    reserv: "",
    machine: "",
    ProCode: "",
  };

  const sutunlar =[
    {field:"id", headerName:"ID"},
    {field:"ProcessName", headerName:"Ana Proses", flex:1},
    {field:"SubProcessName", headerName:"Alt Proses", flex:1},
    {field:"MachineName", headerName:"Makine/Tezgah", flex:1},

    

  ];

  
  

  const Acilirmenurenkleri = {
    option: (provided, state)=> ({
        ...provided,
        fontSize:12,
        color: 'primary',
        backgroundColor: state.isSelected ? 'white' : colors.primary[500],
    })
  };

  const [eklenecekproses, setEklenecekproses] = useState();
  const [secilensatir, setSecilensatir] = useState(2);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');


  const handleChange2 = (event) => {
    //console.log(event.target.value);
    setEklenecekproses(event.target.value);
  };
  const handleRowClick = (params) => {
   
    setSecilensatir(params.row);
    setSelectedValue({value: params.row.id, label: params.row.ProcessName})
    setSelectedValue2({value: params.row.id, label: params.row.SubProcessName})

    
  };
  
//prosesin açılır menüsündeki değişiklikler
  const handleChange3 = (event) => {
    
    setSelectedValue({value: event.value, label: event.label});
    
    setFilteredData(data.filter(item => item.ProcessName === event.label ));

  };

// altprosesin açılır menüsündeki değişiklikler
  const handleChange4 = (event) => {
    //console.log(event)
    setSelectedValue2({value: event.value, label: event.label});
    
    //setFilteredData(data.filter(item => item.SubProcessName === event.label && item.ProcessName === selectedValue.label));
    setFilteredData2(filteredData  ?  filteredData.filter(item => item.SubProcessName === event.label ) : data.filter(item=>item.SubProcessName===event.label));
    //setFilteredData2(filteredData  ?  filteredData.filter(item => item.SubProcessName === event.label ) : console.log('adsdadsasd'));

   


  };
  
  //prosesteki unique operasyonları option olarak dropdowna atıyor
  const setdropdownsecenekleri = arr => {
    const liste = arr.map(({ id, ProcessName }) => ({ value: id, label: ProcessName}));
   
    const unique = new Map();
  
    liste.forEach(item => {
      if (!unique.has(item.label) ) {
        unique.set(item.label, item);
      }
    });
    return [...unique.values()];
  };

  //subprosesteki unique operasyonları option olarak dropdowna atıyor
  const setdropdownsecenekleri2 = arr => {
    console.log(arr)
    const liste = arr.map(({ id, SubProcessName, ProcessName }) => ({ value: id, label: SubProcessName, control:ProcessName }));
    const unique = new Map();
    liste.forEach(item => {
     if (!unique.has(item.label) && item.control===selectedValue.label  ) {
     // if (!unique.has(item.label)   ) {
        
        unique.set(item.label, item);
      }
      
      });
    return [...unique.values()];
  };
  //subproses dropdownunu drop1 yokken alıyor.
  const setdropdownsecenekleri3 = arr => {
    console.log(arr)
    const liste = arr.map(({ id, SubProcessName, ProcessName }) => ({ value: id, label: SubProcessName, control:ProcessName }));
    const unique = new Map();
    liste.forEach(item => {
     if (!unique.has(item.label)  ) {
     // if (!unique.has(item.label)   ) {
        
        unique.set(item.label, item);
      }
      
      });
     
    return [...unique.values()];
  };
  //proses dropdownunu drop2 varken alıyor.
  const setdropdownsecenekleri4 = arr => {
    const liste = arr.map(({ id, ProcessName, SubProcessName }) => ({ value: id, label: ProcessName, control: SubProcessName}));
   
    const unique = new Map();
  
    liste.forEach(item => {
      if (!unique.has(item.label) && item.control===selectedValue2.label) {
        unique.set(item.label, item);
      }
    });
    return [...unique.values()];
  };

  const update = () => {
    axios
      .put(Variables.API_URL + "/Machine", {
        id: secilensatir.id,
        SubProcessName: secilensatir.SubProcessName,
        ProcessName: secilensatir.ProcessName,
        MachineName: eklenecekproses,

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
  return (
    <div display="grid">
      
      <Box>
        <Header title="Makine Düzenleme" subtittle="Makine Ekle/Sil/Düzenle" />
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
            <form onSubmit={handleSubmit} sx={{display:"grid", gridColumn:"span 1" }}>
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
            borderRadius:"20px"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            borderRadius:"20px"
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
            borderRadius:"20px"
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            borderRadius:"20px"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
            borderRadius:"20px"
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
            borderRadius:"20px"
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
            
          },
          
        }}
              
        >
           
          
          <DataGrid rows= {filteredData2 ? filteredData2  : (filteredData ? filteredData : data)}
          
          columns={sutunlar} sx={{borderRadius:250}} onRowClick={handleRowClick} ></DataGrid>
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
              options={filteredData2 ? setdropdownsecenekleri4(data) : setdropdownsecenekleri(data) }
             //  value={secilensatir.ProcessName}
            //options={[{value: secilensatir.id, label: secilensatir.ProcessName}]}
            value={selectedValue}
            onChange={handleChange3}
                
                > /</Select>

                <Select 
                menuPortalTarget={document.body}
                menuPosition="fixed"
                styles={Acilirmenurenkleri}
              options={filteredData ? setdropdownsecenekleri2(data) : setdropdownsecenekleri3(data) }
             //  value={secilensatir.ProcessName}
            //options={[{value: secilensatir.id, label: secilensatir.ProcessName}]}
            value={selectedValue2}
            onChange={handleChange4}> /</Select>
               
                 <TextField
                  fullWidth
                  required
                  variant="filled"
                  type="text"
                  label="Makine/Tezgah"
                  onBlur={handleBlur}
                  onChange={handleChange2}
                  value={
                    eklenecekproses
                      ? eklenecekproses
                      : secilensatir.MachineName
                  }
                  name="machine"
                  
                  //sx={{ display: "grid", gridColumn: "span 37" }}
                />
                
                
                
              </Box>
        <Box  
        display="flex"
        fullWidth
        sx={{justifyContent:"space-around", borderRadius:"20px"}}
        //sx={{gridColumnStart:"1", gridColumnEnd:"7", gridRowStart:"1", gridRowEnd:"9"}}
        >
          
          <Button type="submit" color="secondary" variant="contained"   borderRadius="20px"
          //fullWidth
          border="2px solid"

          sx={{display:"flex", mt:"20px",  fontSize:"2rem", justifyContent:"space-around", width:"66%"}} onClick={update}>
                     Ekle / Güncelle
          </Button>
         
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            sx={{display:"flex", mt:"20px",  fontSize:" 2rem", justifyContent:"space-around", width:"33%"}}
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

export default Machine;
