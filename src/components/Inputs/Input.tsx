import { Field } from "formik";
import { Input, InputNumber } from "@rsuite/formik";

const CustomTextareaInput = ({ field, form, ...props }: any) => {
  return <textarea  rows={3} cols={100} {...field} {...props} />;
};

export const FirstnameInput = () => {
  return (
    <>
      <label htmlFor="adi">Adı</label>
      <Field name="adi" id="adi" component={Input} />
    </>
  );
};

export const LastnameInput = () => {
  return (
    <>
      <label htmlFor="soyadi">Soyadı</label>
      <Field name="soyadi" id="soyadi" component={Input} />
    </>
  );
};

export const AgeInput = () => {
  return (
    <>
      <label htmlFor="yas">Yaşı</label>
      <Field name="yas" id="yas" component={InputNumber} />
    </>
  );
};

export const OrganizationInput = () => {
  return (
    <>
      <label htmlFor="organizasyon">Organizasyon</label>
      <Field id="organizasyon" placeholder="Hazırlayan kurum adı" name="organizasyon" component={Input} />
    </>
  );
};

export const ComingReasonDescriptionInput = () => {
  return (
    <>
     <br/>
      <label htmlFor="gelisNedeniAciklama">Geliş nedeni açıklama</label>
      <br/>
      <Field
        id="gelisNedeniAciklama"
        name="gelisNedeniAciklama"
        component={CustomTextareaInput}
      />
    </>
  );
};

export const ComplaintInput = () => {
  return (
    <>
          <br/>
<label htmlFor="sikayet">Şikayet</label>
<br/>
<Field id="sikayet" name="sikayet"  component={CustomTextareaInput} />
    </>
  );
};

export const DoctorNameInput = () => {
  return (
    <>
      <label htmlFor="doktorAdi">Doktor adı</label>
      <Field name="doktorAdi" id="doktorAdi" component={Input} />
    </>
  );
};


