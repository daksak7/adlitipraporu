import { Cinsiyet, KanGrubu, KanGrubuRh } from "./DataTypes";
 type MyFormValues = {
    adi: string;
    soyadi: string;
    yas: number | null;
    cinsiyet: string;
    kanGrubu: string | null;
    darpDurumu: boolean | null;
    gelisNedeni: string;
    gelisNedeniAciklama: string;
    sikayet: string;
    uygunOrtamSaglandi: boolean | null;
    odadaBulunanlar: object | null;
    doktorAdi: string;
    organizasyon: string;
  }

export const initialValues: MyFormValues = {
    adi: "",
    soyadi: "",
    yas: null,
    cinsiyet: "",
    kanGrubu: null,
    darpDurumu: null,
    gelisNedeni: "",
    gelisNedeniAciklama: "",
    sikayet: "",
    uygunOrtamSaglandi: null,
    odadaBulunanlar: null,
    doktorAdi: "",
    organizasyon: "",
  };

  export const previewValues:MyFormValues = {
    adi: "",
    soyadi: "",
    yas: null,
    cinsiyet: "",
    kanGrubu: "",
    darpDurumu: null,
    gelisNedeni: "",
    gelisNedeniAciklama: "",
    sikayet: "",
    uygunOrtamSaglandi: null,
    odadaBulunanlar: null,
    doktorAdi: "",
    organizasyon: "",
  };



export const cinsiyet = [Cinsiyet.Erkek, Cinsiyet.Kadin].map((item) => ({
    label: item,
    value: item,
  }));
 
  export const kan:Object = [
    {
      label: "A",
      value: KanGrubu.A,
      children: [
        {
          label: "RhPozitif",
          value: KanGrubu.A+KanGrubuRh.RhPozitif,
        },
        {
          label: "RhNegatif",
          value: KanGrubu.A+KanGrubuRh.RhNegatif,
        },
      ],
    },
    {
      label: "B",
      value: KanGrubu.B,
      children: [
        {
          label: "RhPozitif",
          value: KanGrubu.B+KanGrubuRh.RhPozitif,
        },
        {
          label: "RhNegatif",
          value: KanGrubu.B+KanGrubuRh.RhNegatif,
        },
      ],
    },
    {
      label: "AB",
      value: KanGrubu.AB,
      children: [
        {
          label: "RhPozitif",
          value: KanGrubu.AB+KanGrubuRh.RhPozitif,
        },
        {
          label: "RhNegatif",
          value: KanGrubu.AB+KanGrubuRh.RhNegatif,
        },
      ],
    },
    {
      label: "0",
      value: KanGrubu.O,
      children: [
        {
          label: "RhPozitif",
          value: KanGrubu.O+KanGrubuRh.RhPozitif,
        },
        {
          label: "RhNegatif",
          value: KanGrubu.O+KanGrubuRh.RhNegatif,
        },
      ],
    },
  ];
  
  
  export const gelis = [
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
  
  export const bulunanlar = [
    "Tabip",
    "Sağlık Personeli",
    "Sağlık Meslek Mensubu Personel",
    "Refakatçi",
    "Güvenlik Görevlisi",
  ].map((item) => ({
    label: item,
    value: item,
  }));
  