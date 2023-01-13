import { Field } from "formik";
import {Cascader} from "@rsuite/formik";
import { kan } from "../../Data";
export const BloodCascader = () => {
    return (
      <>
        <br/>
        <label htmlFor="adi">Kan grubu</label>
        <Field
                searchable={true}
                data={kan}
                name="kanGrubu"
                id="kanGrubu"
           
                component={Cascader}
                placeholder="Seçiniz"
                > 

                </Field>
      </>
    );
  };