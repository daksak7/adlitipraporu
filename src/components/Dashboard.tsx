import * as React from "react";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";

const Dahsboard = () => {
  const columns = [
    "Adı",
    "Soyadı",
    "Yaşı",
    "Kan grubu",
    "Darp durumu",
    "Geliş nedeni",
    "Geliş nedeni açıklama",
    "Şikayet",
    "Uygun ortam sağlandı mı?",
    "Odada bulunanlar",
    "Doktor adı",
    "Organizasyon",
  ];

  const data = [
    ["Can", "Yucel", "55", "A+",true,"kaza","açıklama 1","darp edildi",true,["doktor"],"ceuyn","hastane"],
    ["Mert", "Zuyne", "15", "A-",false,"intihar","açıklama 231","darp yok",false,["doktor","güvenlik"],"tabib","askeri"],
    ["Merve", "Şehun", "35", "AB+",true,"darp","açıklama 132","darp edildi",true,["doktor"],"zeülfü","okul"],
    ["Hasan", "Vurel", "22", "0+",false,"kaza","açıklama 1232","darp ",true,["doktor"],"tabib","hastane"],
    ["Ceynil", "Yuvla", "19", "B-",true,"kaza","açıklama 231","darp edildi",true,["doktor"],"tabib","ev"],
  ];

  const options: MUIDataTableOptions | undefined = {
    filterType: "checkbox",
    responsive: "simple",
  };

  return (
    <MUIDataTable
      title={"Tüm Raporlar"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default Dahsboard;


