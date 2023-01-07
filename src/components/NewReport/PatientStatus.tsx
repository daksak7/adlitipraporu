import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Cascader } from "antd";

enum Cinsiyet {
  Erkek = "Erkek",
  Kadin = "Kadın",
}

enum KanGrubu {
  A = "A",
  B = "B",
  AB = "AB",
  O = "O",
}
enum KanGrubuRh {
  RhPozitif = "+",
  RhNegatif = "-",
}

interface HastaBilgileri {
  adi: string;
  soyadi: string;
  yas: number;
  cinsiyet: Cinsiyet;
  kanGrubu: KanGrubu;
  kanGrubuRh: KanGrubuRh;
}
export function InputCinsiyet() {
  return (
    <Autocomplete
      disablePortal
      id="cinsiyet"
      options={gender}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Cinsiyet" />}
    />
  );
}

const gender = [{ label: "Erkek" }, { label: "Kadın" }];

export function InputYas() {
  return (
    <TextField
      required
      id="yas"
      label="Yaş"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
export function InputAd() {
  return <TextField required id="outlined-required" label="Ad" />;
}
export function InputSoyad() {
  return <TextField required id="outlined-required" label="Soyad" />;
}
export function InputKanGrubu() {
  return (
    <>
      <Cascader
        options={[
          {
            value: "A",
            label: "A",
            children: [
              {
                value: "+",
                label: "Rh (+)",
              },
              {
                value: "-",
                label: "Rh (-)",
              },
            ],
          },
          {
            value: "B",
            label: "B",
            children: [
              {
                value: "+",
                label: "Rh (+)",
              },
              {
                value: "-",
                label: "Rh (-)",
              },
            ],
          },
          {
            value: "AB",
            label: "AB",
            children: [
              {
                value: "+",
                label: "Rh (+)",
              },
              {
                value: "-",
                label: "Rh (-)",
              },
            ],
          },
          {
            value: "0",
            label: "0",
            children: [
              {
                value: "+",
                label: "Rh (+)",
              },
              {
                value: "-",
                label: "Rh (-)",
              },
            ],
          },
        ]}
        onChange={(data) => {
          console.log(data);
        }}
        placeholder="Select destination"
      />
    </>
  );
}
export default function PatientStatus() {
  return (
    <>
      <h3> Hasta Bilgileri</h3>
      <Grid container spacing={3}>
<Grid item xs={12} sm={6}>
  <TextField
    required
    id="adi"
    name="adi"
    label="Adı"
    fullWidth
    autoComplete="given-name"
    variant="standard"
  />
</Grid>
<Grid item xs={12} sm={6}>
  <TextField
    required
    id="soyadi"
    name="soyadi"
    label="Soyadı"
    fullWidth
    autoComplete="family-name"
    variant="standard"
  />
</Grid>

<Grid item xs={12} sm={6}>
  <TextField
    required
    id="yas"
    name="yas"
    label="Yaş"
    fullWidth
    autoComplete="age"
    variant="standard"
  />
</Grid>
<Grid item xs={12} sm={6}>
  <TextField
    id="cinsiyet"
    name="cinsiyet"
    label="Cinsiyet"
    fullWidth
    variant="standard"
  />
</Grid>
<Grid item xs={12} sm={6}>
  <TextField
    required
    id="kanGrubu"
    name="kanGrubu"
    label="Kan Grubu"
    fullWidth
    autoComplete=""
    variant="standard"
  />
</Grid>
<Grid item xs={12} sm={6}>
  <TextField
    required
    id="kanGrubuRh"
    name="kanGrubuRh"
    label="Kan Grubu Rh"
    fullWidth
    autoComplete=""
    variant="standard"
  />
</Grid>
</Grid> 

    </>
  );
}




{/* <Formik
initialValues={{
  adi: "Doğancan",
  soyadi: "Aksak",
  cinsiyet: Cinsiyet.Erkek,
  yas: 28,
  kanGrubu: KanGrubu.A,
  kanGrubuRh: KanGrubuRh.RhPozitif,
}}
onSubmit={(
  values: HastaBilgileri,
  { setSubmitting }: FormikHelpers<HastaBilgileri>
) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 500);
}}
>
<Form>
  <InputAd />
  <InputSoyad />
  <InputCinsiyet />
  <InputYas />
  <InputKanGrubu/>

  <button type="submit">Gönder</button>
</Form>
</Formik> */}