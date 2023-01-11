import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { SampleSchema } from "../validations/SampleSchema";

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
  sikayet:string;
  uygunOrtamSaglandi: boolean | null;
  odadaBulunanlar: object|null;
  doktorAdi:string;
  organizasyon:string;
}

export const AddReport: React.FC<{}> = () => {
  const [darpDurumu, setDarpDurumu] = useState();
  const [uygunOrtam, setUygunOrtam] = useState(false);
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
    sikayet:"",
    uygunOrtamSaglandi: null,
    odadaBulunanlar: null,
    doktorAdi:"",
    organizasyon:""
  };
  return (
    <div>
      <h2>Yeni rapor kaydı</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={SampleSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched, isValidating }) => (
        <Container style={{ padding: 30 }}>
        
          <Form>
            <h4>Hasta Bilgileri</h4>
            <label htmlFor="adi">Adı</label>
            <Field name="adi" id="adi" component={Input} />
            {errors.adi && touched.adi ? <div>{errors.adi}</div> : null}
            <label htmlFor="soyadi">Soyadı</label>
            <Field name="soyadi" id="soyadi" component={Input} />
            {errors.soyadi && touched.soyadi ? <div>{errors.soyadi}</div> : null}
            <label htmlFor="yas">Yaşı</label>
            <Field name="yas" id="yas" component={InputNumber} />
            {errors.yas && touched.yas ? <div>{errors.yas}</div> : null}
            <label htmlFor="cinsiyet"> Cinsiyet </label>
            <Field
              name="cinsiyet"
              id="cinsiyet"
              data={genders}
              component={SelectPicker}
            />
            {errors.cinsiyet && touched.cinsiyet ? <div>{errors.cinsiyet}</div> : null}
            <br />
            <label htmlFor="kanGrubu"> Kan Grubu </label>
             <Field
              searchable={false}
              data={kan} 
              name="kanGrubu"
              id="kanGrubu"
              component={SelectPicker}
            />
            {errors.kanGrubu && touched.kanGrubu ? <div>{errors.kanGrubu}</div> : null}
            <Divider />
            <h4>Rapor Bilgileri</h4>
            <Field
              inline
              id="darpDurumu"
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
            {errors.darpDurumu && touched.darpDurumu ? <div>{errors.darpDurumu}</div> : null}
            
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
            {next ? 
                <>
                <label htmlFor="gelisNedeni"> Geliş nedeni </label>
                <br />
                <Field
                  id="gelisNedeni"
                  name="gelisNedeni"
                  data={gelis}
                  component={SelectPicker}
                />
                {errors.gelisNedeni && touched.gelisNedeni ? <div>{errors.gelisNedeni}</div> : null}
                <br />
                <label htmlFor="gelisNedeniAciklama">Geliş nedeni açıklama</label>
                <Field
                  placeholder="Opsiyonel"
                  id="gelisNedeniAciklama"
                  name="gelisNedeniAciklama"
                  component={Input}
                />
                <label htmlFor="sikayet">Şikayet</label>
                <Field
                  id="sikayet"
                  name="sikayet"
                  component={Input}
                />
                {errors.sikayet && touched.sikayet ? <div>{errors.sikayet}</div> : null}
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
                {errors.uygunOrtamSaglandi && touched.uygunOrtamSaglandi ? <div>{errors.uygunOrtamSaglandi}</div> : null}
                <br />
                <label htmlFor="odadaBulunanlar"> Odada bulunanlar </label>
                <br />
                <Field
                  id="odadaBulunanlar"
                  name="odadaBulunanlar"
                  data={bulunanlar}
                  component={TagPicker}
                />
                {errors.odadaBulunanlar && touched.odadaBulunanlar ? <div>Odada bulunanlar kısmı boş bırakılamaz</div> : null}
                <br />
                <label htmlFor="doktorAdi">Doktor adı</label>
                <Field id="doktorAdi" name="doktorAdi" component={Input} />
                {errors.doktorAdi && touched.doktorAdi ? <div>{errors.doktorAdi}</div> : null}
                <label htmlFor="organizasyon">Organizasyon</label>
                <Field id="organizasyon" name="organizasyon" component={Input} />
                {errors.organizasyon && touched.organizasyon ? <div>{errors.organizasyon}</div> : null}
                <Button type="submit">Raporu kaydet</Button>
              </>
            : null}
          </Form>
          
        </Container>
        )}
      </Formik>
    </div>
  );
};


const genders = [Cinsiyet.Erkek,Cinsiyet.Kadin].map((item) => ({
  label: item,
  value: item,
}));



const kan = 
[
  KanGrubu.A+KanGrubuRh.RhPozitif,
  KanGrubu.A+KanGrubuRh.RhNegatif,
  KanGrubu.B+KanGrubuRh.RhPozitif,
  KanGrubu.B+KanGrubuRh.RhNegatif,
  KanGrubu.AB+KanGrubuRh.RhPozitif,
  KanGrubu.AB+KanGrubuRh.RhNegatif,
  KanGrubu.O+KanGrubuRh.RhPozitif,
  KanGrubu.O+KanGrubuRh.RhNegatif,
].map((item)=>({
  label:item,
  value:item
}))


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

