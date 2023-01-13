import * as yup from "yup";



export const SampleSchema=yup.object().shape(
    {
    adi:yup
       .string()
       .required("Zorunlu alan")
       .min(4,'Girilecek ad 4 karakterden kısa olamaz'),
    soyadi:yup
       .string()
       .required("Zorunlu alan")
       .max(19,'Soyadı 20 karakterden uzun olamaz'),
    yas:yup
    .number()
    .nullable()
    .positive("Yaş 0'dan büyük olmalıdır")   
    .required("Zorunlu alan"),
    cinsiyet:yup 
    .string()
    .nullable()
    .required("Zorunlu alan"),
    kanGrubu:yup 
    .string()
    .nullable()
    .required("Zorunlu alan"),
    darpDurumu:yup 
    .boolean()
    .required("Zorunlu alan"),
    gelisNedeni:yup 
    .string()
    .required("Zorunlu alan")
    .nullable(false),
    gelisNedeniAciklama:yup 
    .string()
    .nullable()
    .min(25,"Bu alanı doldurmak isterseniz en az 25 karakter girmelisiniz"),
    sikayet:yup 
    .string()
    .required("Zorunlu alan")
    .min(25,"Şikayet alanı en az 25 karakter içermelidir."),
    uygunOrtamSaglandi:yup 
    .boolean()
    .required("Zorunlu alan")
    .nullable(),
    odadaBulunanlar:yup 
    .array()
    .nullable(false)
    .required("Zorunlu alan"),
    doktorAdi:yup 
    .string()
    .required("Zorunlu alan"),
    organizasyon:yup 
    .string()
    .required("Zorunlu alan")
    }   
)