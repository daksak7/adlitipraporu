import { useState } from "react";
import { Formik, Form, Field } from "formik";

import {
  Input,
  InputNumber,
  SelectPicker,
  Toggle,
  RadioGroup,
  TagPicker,
} from "@rsuite/formik";
import { AutoComplete, Button, Container, Divider, Radio, Cascader } from "rsuite";
import { Cinsiyet, KanGrubu, KanGrubuRh } from "../ReportDetails";


interface MyFormValues {
  adi: string;
  soyadi: string;
  yas: number | null;
  cinsiyet: string;
  kanGrubu: string;
  kanGrubuRh: string;
  darpDurumu: boolean | null;
  gelisNedeni: string;
  gelisNedeniAciklama: string;
  uygunOrtamSaglandi: boolean | null;
  odadaBulunanlar: object;
}

export const AddReport: React.FC<{}> = () => {
  const [darpDurumu, setDarpDurumu] = useState();
  const [next, setNext] = useState(false);

  const initialValues: MyFormValues = {
    adi: "",
    soyadi: "",
    yas: null,
    cinsiyet: "",
    kanGrubu: KanGrubu.A,
    kanGrubuRh: KanGrubuRh.RhPozitif,
    darpDurumu: null,
    gelisNedeni: "",
    gelisNedeniAciklama: "",
    uygunOrtamSaglandi: null,
    odadaBulunanlar: [],
  };
  return (
    <div>
      <h2>Yeni rapor kaydı</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Container style={{ padding: 30 }}>
          <Form>
            <h4>Hasta Bilgileri</h4>
            <label htmlFor="adi">Adı</label>
            <Field name="adi" id="adi" component={Input} />
            <label htmlFor="soyadi">Soyadı</label>
            <Field name="soyadi" id="soyadi" component={Input} />
            <label htmlFor="yas">Yaşı</label>
            <Field name="yas" id="yas" component={InputNumber} />

            <label htmlFor="cinsiyet"> Cinsiyet </label>
            <Field
              name="cinsiyet"
              id="cinsiyet"
              data={genders}
              component={SelectPicker}
            />
            <br />
            <label htmlFor="kanGrubu"> Kan Grubu </label>
             <Field
              data={kan} 
              onChange={(value:KanGrubu)=>{
                console.log(value);
              }}
              name="kanGrubu"
              id="kanGrubu"
              component={Cascader}
            /> 
            <Divider />
            <h4>Rapor Bilgileri</h4>
            <Field
              inline
              name="darpDurumu"
              value={darpDurumu}
              component={RadioGroup}
              onChange={setDarpDurumu}
            >
              <Field value={true} component={Radio}>
                Evet
              </Field>
              <Field value={false} component={Radio}>
                Hayır
              </Field>
            </Field>
            {!next ? (
              <Button
                onClick={() => {
                  setNext(true);
                }}
                disabled={darpDurumu === undefined}
              >
                Devam
              </Button>
            ) : null}
            {next ? <AddReportNext /> : null}
          </Form>
        </Container>
      </Formik>
    </div>
  );
};

export const AddReportNext: React.FC<{}> = () => {
  const [uygunOrtam, setUygunOrtam] = useState(false);
  return (
    <>
      <label htmlFor="gelisNedeni"> Geliş nedeni </label>
      <br />
      <Field
        id="gelisNedeni"
        name="gelisNedeni"
        data={gelis}
        component={SelectPicker}
      />
      <br />
      <label htmlFor="gelisNedeniAciklama">Geliş nedeni açıklama</label>
      <Field
        placeholder="Textarea"
        id="gelisNedeniAciklama"
        name="gelisNedeniAciklama"
        component={Input}
      />
      <label htmlFor="sikayet">Şikayet</label>
      <Field
        placeholder="Textarea"
        id="sikayet"
        name="sikayet"
        component={Input}
      />
      <label htmlFor="uygunOrtamSaglandi"> Uygun ortam sağlandı mı? </label>
      <br />
      <Field
        value={uygunOrtam}
        onChange={setUygunOrtam}
        id="uygunOrtamSaglandi"
        name="uygunOrtamSaglandi"
        size="lg"
        checkedChildren="Evet"
        unCheckedChildren="Hayır"
        component={Toggle}
      />
      <br />
      <label htmlFor="odadaBulunanlar"> Odada bulunanlar </label>
      <br />
      <Field
        id="odadaBulunanlar"
        name="odadaBulunanlar"
        data={bulunanlar}
        component={TagPicker}
      />
      <br />
      <label htmlFor="doktorAdi">Doktor adı</label>
      <Field id="doktorAdi" name="doktorAdi" component={Input} />
      <label htmlFor="organizasyon">Organizasyon</label>
      <Field id="organizasyon" name="organizasyon" component={Input} />
      <Button type="submit">Raporu kaydet</Button>
    </>
  );
};

const genders = [Cinsiyet.Erkek,Cinsiyet.Kadin].map((item) => ({
  label: item,
  value: item,
}));



const kan = [
  {
    label: "A",
    value: KanGrubu.A,
    children: [
      {
        label: "RhPozitif",
        value: KanGrubuRh.RhPozitif,
      },
      {
        label: "RhNegatif",
        value: KanGrubuRh.RhNegatif,
      },
    ],
  },
  {
    label: "B",
    value: KanGrubu.B,
    children: [
      {
        label: "RhPozitif",
        value: KanGrubuRh.RhPozitif,
      },
      {
        label: "RhNegatif",
        value: KanGrubuRh.RhNegatif,
      },
    ],
  },
  {
    label: "AB",
    value: KanGrubu.AB,
    children: [
      {
        label: "RhPozitif",
        value: KanGrubuRh.RhPozitif,
      },
      {
        label: "RhNegatif",
        value: KanGrubuRh.RhNegatif,
      },
    ],
  },
  {
    label: "0",
    value: KanGrubu.O,
    children: [
      {
        label: "RhPozitif",
        value: KanGrubuRh.RhPozitif,
      },
      {
        label: "RhNegatif",
        value: KanGrubuRh.RhNegatif,
      },
    ],
  },
];


const gelis = [
  "Etkili Eylem",
  "Trafik Kazası",
  "İş Kazası",
  "Diğer Kazalar",
  "İnsan Hakları İhlali İddiası",
  "İntihar Girişimi",
  "Zehirlenmeler",
].map((item) => ({
  label: item,
  value: item,
}));

const bulunanlar = [
  "Tabip",
  "Sağlık Personeli",
  "Sağlık Meslek Mensubu Personel",
  "Refakatçi",
  "Güvenlik Görevlisi",
].map((item) => ({
  label: item,
  value: item,
}));

