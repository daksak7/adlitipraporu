import * as yup from "yup";

export const SampleSchema=yup.object(
    {
    adi:yup
       .string()
       .required()
       .min(4,'Girilecek ad 4 karakterden kısa olamaz'),
    soyadi:yup
       .string()
       .required()
       .max(20,'Soyadı 20 karakterden uzun olamaz'),
       
    }   
)