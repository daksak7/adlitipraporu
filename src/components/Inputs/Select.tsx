import { Field } from "formik";
import { SelectPicker } from "@rsuite/formik";
import { gelis, cinsiyet } from "../../Data";

export const ComingReasonInput = () => {
  return (
    <>
     <br/>
      <label htmlFor="gelisNedeni"> Geliş nedeni </label>
      <br/>
      <Field
        id="gelisNedeni"
        name="gelisNedeni"
        data={gelis}
        component={SelectPicker}
      />
    </>
  );
};

export const GenderInput = () => {
  return (
    <>
     <br/>
      <label htmlFor="cinsiyet"> Cinsiyet </label>
      <Field 
        name="cinsiyet"
        id="cinsiyet"
        data={cinsiyet}
        component={SelectPicker}
      />
    </>
  );
};
