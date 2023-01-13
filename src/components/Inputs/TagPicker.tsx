import { Field } from "formik";
import { TagPicker } from "@rsuite/formik";
import { bulunanlar } from "../../Data";

export const StaffInRoomInput = () => {
  return (
    <>
      <br/>
      <label htmlFor="odadaBulunanlar"> Odada bulunanlar </label>
      <Field 
        id="odadaBulunanlar"
        name="odadaBulunanlar"
        data={bulunanlar}
        component={TagPicker}
      />
    </>
  );
};
