export enum Cinsiyet {
  Erkek = 'Erkek',
  Kadin = 'Kadın',
}

enum KanGrubu {
  A = 'A',
  B = 'B',
  AB = 'AB',
  O = 'O',
}
enum KanGrubuRh {
  RhPozitif = '+',
  RhNegatif = '-',
}


export enum OdadaBulunanlar {
  doktor = 'Tabip',
  saglikci = 'Sağlık Personeli',
  other = 'sağlık Meslek Mensubu Personel',
  refakatci = 'Refakatçi',
  güvenlik = 'Güvenlik Görevlisi',
}

export enum GelisNedeni {
  etkiliEylem = 'Etkili Eylem',
  trafikKazasi = 'Trafik Kazası',
  isKazasi = 'İş Kazası',
  digerKazalar = 'Diğer Kazalar',
  insanHaklari = 'İnsan Hakları İhlali İddiası',
  intihar = 'İntihar Girişimi',
  zehirlenme = 'Zehirlenmeler',
}
export interface HastaBilgileri {
  adi: string;
  soyadi: string;
  yas: number;
  cinsiyet: string;
  kanGrubu: KanGrubu;
  kanGrubuRh: KanGrubuRh;
}


export interface GenelBilgiler {
  gelisNedeni: GelisNedeni;
  gelisNedeniAciklama: string;
  odadaBulunanlar: OdadaBulunanlar[];
  darpDurumu: boolean;
  organizasyon: string;
  sikayet: string;
  doktorAdi: string;
  uygunOrtamSaglandı: boolean;
}

export const hasta: HastaBilgileri = {
  adi: "doğancan",
  soyadi: "aksak",
  cinsiyet: Cinsiyet.Erkek,
  kanGrubu: KanGrubu.AB,
  kanGrubuRh: KanGrubuRh.RhNegatif,
  yas: 28
}

export const rapor: GenelBilgiler = {
  darpDurumu: true,
  doktorAdi: "tabib",
  gelisNedeni: GelisNedeni.trafikKazasi,
  gelisNedeniAciklama: "alkol sonucu",
  odadaBulunanlar: [OdadaBulunanlar.doktor, OdadaBulunanlar.güvenlik],
  organizasyon: "org1",
  sikayet: "alkol dokanmış",
  uygunOrtamSaglandı: true
}