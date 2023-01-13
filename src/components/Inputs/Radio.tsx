import { Field } from "formik";
import { Radio } from "rsuite";
import { RadioGroup } from "@rsuite/formik";
import { useState } from "react";

export const BatteredStatusInput = () => {
    const [darpDurumu, setDarpDurumu] = useState(false);
  return (
    <>
     <br/>
      <label htmlFor="darpDurumu">Darp Durumu</label>
      <Field 
        inline
        id="darpDurumu"
        name="darpDurumu"
        value={darpDurumu}
        component={RadioGroup}
        onChange={setDarpDurumu}
      >
        <Field  value={true} component={Radio}> 
          Evet
        </Field>
        <Field value={false} component={Radio}>
          Hayır
        </Field>
      </Field>
    </>
  );
};
