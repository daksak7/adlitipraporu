import { Field } from "formik";
import { Toggle } from "@rsuite/formik";
import { useState } from "react";


export const SuitableConditionInput = () => {
    const [uygunOrtam,setUygunOrtam] = useState("");
  return (
    <>
     <br/>
      <label htmlFor="uygunOrtamSaglandi"> Uygun ortam sağlandı mı? </label>
      <br/>
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
    </>
  );
};
