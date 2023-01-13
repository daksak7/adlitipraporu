import { useContext, useState  } from "react";
import { Formik, Form, Field  } from "formik";
import { SampleSchema } from "../validations/SampleSchema";
import { Button, Container, Divider } from "rsuite";
import {FirstnameInput,LastnameInput,AgeInput,OrganizationInput,BloodCascader,ComingReasonInput,GenderInput,ComingReasonDescriptionInput,ComplaintInput,StaffInRoomInput,DoctorNameInput,
} from "./Inputs";
import { Radio } from "rsuite";
import { RadioGroup, Toggle } from "@rsuite/formik";
import { initialValues } from "../Data";
import { Link } from "react-router-dom";
import { IconButton } from "rsuite";
import ArowBackIcon from "@rsuite/icons/ArowBack";
import "../App.css";
import { Context } from "../contexts/ReportDataContext";

export const AddReport: React.FC<{}> = () => {
  const { setData } = useContext(Context);

  const [darpDurumu, setDarpDurumu] = useState(null);
  const [uygunOrtam, setUygunOrtam] = useState("");
  const [submitCheck, setSubmitCheck] = useState(false);
  const [next, setNext] = useState(false);

  return (
    <div>
      <IconButton icon={<ArowBackIcon />}><Link to="/">GERİ DÖN</Link></IconButton>
      <h2>Yeni rapor kaydı</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={SampleSchema}
        onSubmit={(values, actions) => {
          setSubmitCheck(true);
          actions.setSubmitting(false);
          setData(values);
          console.log(values); //Verilere contextteki array e push edecek düzeyde obje olarak ulaştım.Fakat objenin katman hesaplamalarında sebebini farkemedeğim bir sepeten dolayı verileri contexte set edemedim.

        }}
      >
        {({ errors, touched }) => (
          <Container style={{ padding: 30 }}>
            <Form>
              <h4>Hasta Bilgileri</h4>

              <FirstnameInput />
              {errors.adi && touched.adi ? <div>{errors.adi}</div> : null}

              <LastnameInput />
              {errors.soyadi && touched.soyadi ? (<div>{errors.soyadi}</div>) : null}

              <AgeInput />
              {errors.yas && touched.yas ? <div>{errors.yas}</div> : null}

              <GenderInput />
              {errors.cinsiyet && touched.cinsiyet ? (
                <div>{errors.cinsiyet}</div>
              ) : null}

              <BloodCascader />
              {errors.kanGrubu && touched.kanGrubu ? (<div>{errors.kanGrubu}</div>) : null}

              <Divider />
              <h4>Rapor Bilgileri</h4>
              <br />
              <label htmlFor="darpDurumu">Darp Durumu</label>
              <Field
                data
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
              {errors.darpDurumu && touched.darpDurumu ? (<div>{errors.darpDurumu}</div>) : null}

              {next === false ? ( //next state i darp durumu bilgisini kullanıcıdan alıp almadığımızın bilgisini tutuyor, formun devamının renderından görevli.
                <Button
                  onClick={() => {
                    setNext(true);
                  }}
                  disabled={darpDurumu === null}
                >
                  Devam
                </Button>
              ) : (
                <>
                  <ComingReasonInput />
                  {errors.gelisNedeni && touched.gelisNedeni ? (<div>{errors.gelisNedeni}</div>) : null}

                  <ComingReasonDescriptionInput />
                  {errors.gelisNedeniAciklama && touched.gelisNedeniAciklama ? (<div>{errors.gelisNedeniAciklama}</div>) : null}

                  <ComplaintInput />
                  {errors.sikayet && touched.sikayet ? (<div>{errors.sikayet}</div>) : null}
                  <br />

                  <label htmlFor="uygunOrtamSaglandi">Uygun ortam sağlandı mı?</label>
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
                  {errors.uygunOrtamSaglandi && touched.uygunOrtamSaglandi ? (<div>{errors.uygunOrtamSaglandi}</div>) : null}
                  <br />

                  <StaffInRoomInput />
                  {errors.odadaBulunanlar && touched.odadaBulunanlar ? (<div>Odada bulunanlar kısmı boş bırakılamaz</div>) : null}

                  <br />
                  <DoctorNameInput />
                  {errors.doktorAdi && touched.doktorAdi ? (<div>{errors.doktorAdi}</div>) : null}
                 
                  <br/>
                  <OrganizationInput />
                  {errors.organizasyon && touched.organizasyon ? (<div>{errors.organizasyon}</div>) : null}
                  <br></br>

                  {submitCheck === false ? (
                    <Button
                      color="cyan"
                      onClick={() => {
                        setSubmitCheck(true);
                      }}
                      appearance="primary"
                      size="lg"
                    >
                      RAPORU KAYDET
                    </Button>
                  ) : (
                    <>
                      <h4>Raporunuz kaydedilecek, onaylıyor musunuz?</h4>
                      <Link to="/">
                        <Button size="lg" appearance="primary" color="red">
                          İPTAL ET
                        </Button>
                      </Link>

                      <Button
                        size="lg"
                        type="submit"
                        color="green"
                        appearance="primary"
                      >
                        ONAYLIYORUM
                      </Button>
                    </>
                  )}
                </>
              )}
            </Form>
          </Container>
        )}
      </Formik>
    </div>
  );
};
