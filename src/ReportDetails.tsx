export type HastaBilgileri= {
  adi: string;
  soyadi: string;
  yas: number;
  cinsiyet: Cinsiyet;
  kanGrubu: KanGrubu;
  kanGrubuRh: KanGrubuRh;
}

export enum Cinsiyet {
  Erkek = "Erkek",
  Kadin = "Kadın",
}

export enum KanGrubuRh {
  RhPozitif = "+",
  RhNegatif = "-",
}

export enum KanGrubu {
  A = "A",
  B = "B",
  AB = "AB",
  O = "O",
}

export type GenelBilgiler = {
  gelisNedeni: GelisNedeni;
  gelisNedeniAciklama: string;
  odadaBulunanlar: OdadaBulunanlar[];
  darpDurumu: boolean;
  organizasyon: string;
  sikayet: string;
  doktorAdi: string;
  uygunOrtamSaglandi: boolean;
}

export enum GelisNedeni {
  etkiliEylem = "Etkili Eylem",
  trafikKazasi = "Trafik Kazası",
  isKazasi = "İş Kazası",
  digerKazalar = "Diğer Kazalar",
  insanHaklari = "İnsan Hakları İhlali İddiası",
  intihar = "İntihar Girişimi",
  zehirlenme = "Zehirlenmeler",
}

export enum OdadaBulunanlar {
  doktor = "Tabip",
  saglikci = "Sağlık Personeli",
  other = "sağlık Meslek Mensubu Personel",
  refakatci = "Refakatçi",
  güvenlik = "Güvenlik Görevlisi",
}

