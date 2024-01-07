import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="50px" //alanların birbiri arasındaki mesafe
              gridTemplateColumns="repeat(4, minmax(0, 1fr))" //oluşturulan dikey sütun
              mt="60px" //tablo baslangıcı ile üst taraf arasındaki mesafe
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled" //filled-outlined-standart
                type="text" //number yapılabilir
                label="Ad "
                onBlur={handleBlur} //fonksiyon dokundugunda degisiyor veya degismiyor
                onChange={handleChange} // text değişip değişmiyor
                value={values.firstName}
                name="firstName"
                size="medium" //medium ve small
                defaultValue="ilk deger" //olmayabiilir, eğer kullanılmıyorsa 
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }} //alanların genişliği
              />
              

              <TextField
                fullWidth
                
                variant="filled"
                type="text"
                label="Soyad"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="E mail giriniz"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="İletişim2223"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="adressss1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="adress2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.adress2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            
              
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Yeni Kullanıcıfhgfhkhhgjgkjgkgk
                
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  adress2: "",
};

const telefonkontrol =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("Ad giriniz"),
  lastName: yup.string().required("SoyAd giriniz"),
  email: yup.string().email("geçersiz mail"),
  contact: yup
    .string()
    .matches(telefonkontrol, "Geçerli değil")
    .required("İletiişim"),

  address1: yup.string().required("Adres1"),
  adress2: yup.string().required("Adres2"),
});
export default Form;
