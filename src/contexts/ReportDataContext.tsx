import { createContext , useState, useEffect, useContext } from 'react';
import { GelisNedeni, KanGrubu, KanGrubuRh, OdadaBulunanlar } from '../DataTypes';

export interface IMyFormValues  {
    data:{
        adi: string;
        soyadi: string;
        yas: number ;
        cinsiyet: string;
        kanGrubu: string ;
        darpDurumu: string ;
        gelisNedeni: string;
        gelisNedeniAciklama: string;
        sikayet: string;
        uygunOrtamSaglandi: boolean ;
        odadaBulunanlar: object ;
        doktorAdi: string;
        organizasyon: string;
    },
    setData(values:object):any;
  }

var defaultData= [{                              //Test amaçlı 2 başlangıç verisi mevcut.Contexteki veri panelden okunabiliyor.
    adi: "Doğancan",
    soyadi: "Aksak",
    yas: 28,
    cinsiyet: "Erkek",
    kanGrubu: KanGrubu.A+KanGrubuRh.RhPozitif,
    darpDurumu: "true",
    gelisNedeni: GelisNedeni.trafikKazasi,
    gelisNedeniAciklama: "Test açıklaması",
    sikayet: "Karşıdan karşıya geçerken motorsiklet çarptı",
    uygunOrtamSaglandi: "false",
    odadaBulunanlar: [OdadaBulunanlar.doktor],
    doktorAdi: "Tabibey",
    organizasyon: "Hastane",

},{
adi: "Can",
soyadi: "Aksak",
yas: 28,
cinsiyet: "Erkek",
kanGrubu: KanGrubu.B+KanGrubuRh.RhNegatif,
darpDurumu: "true",
gelisNedeni: GelisNedeni.insanHaklari,
gelisNedeniAciklama: "Test açıklaması",
sikayet: "Karşıdan karşıya geçerken araba çarptı",
uygunOrtamSaglandi: "true",
odadaBulunanlar: [OdadaBulunanlar.güvenlik],
doktorAdi: "Tabibey",
organizasyon: "Askeriye",

}
]

interface ContextProps {
    data:object
    setData(values:object): void;
  }
  const Context = createContext<ContextProps>({
    data:defaultData,
    setData: (values) => {
              return [...Object.values(values),defaultData]
        }
  });

interface Props {
    children?: React.ReactNode;
  }
  const Provider: React.FC<Props> = ({ children }) => {
    const [data, setData] = useState(defaultData)
    return (
      <Context.Provider
        value={{
          data,
          setData,
        }}
      >
      {children}
    </Context.Provider>
   );
  };

  export const useStore = () => useContext(Context);
export function withProvider(Component: any) {
  return function WrapperComponent(props: any) {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    );
  };
}
export { Context, Provider };

