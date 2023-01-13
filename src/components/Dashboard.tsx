import * as React from "react";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { IconButton } from "rsuite";
import PlusIcon from "@rsuite/icons/Plus";
import { Chart } from "./Chart";
import { Context } from "../contexts/ReportDataContext";

const Dahsboard = () => {
  const { data: formdata } = useContext(Context);

  const columns = [
    "Adı",
    "Soyadı",
    "Yaşı",
    "Cinsiyet",
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

  const data = [];

  const options: MUIDataTableOptions | undefined = {
    filterType: "checkbox",
    responsive: "simple",
  };

                                                                                          //burası contexten aldığımız verileri panelde okuduğumuz yer.daha doğrusu panelde gösterdiğimiz tablonun kaynağı olan data arrayini oluşturuyor
  for (let i = 0; i < Object.entries(formdata).length; i++) {
    const element = Object.values(Object.entries(formdata)[i][1]);
    data.push(element);
  }
  //Burada bir veri satırı içindeki organizasyon bilgisi alınmaktadır.
  // const count = function(value) {
  //   if (!organizasyonlar[value]) {
  //       organizasyonlar[value] = 1;
  //   }
  //   else {
  //    organizasyonlar[value]++;

  //   }
  //   const organizasyonSayisi:object={};
  //   for (let j = 0; j < data.length; j++) {
  //     const param:string=Object.values(Object.entries(formdata)[j][1]).slice(-1)[0]
  //     if (!organizasyonSayisi[param]) {
  //       organizasyonSayisi[param] = 1;
  //   }
  //   else {
  //    organizasyonSayisi[param]++;

  // }
  //   }

  // Object.values(Object.entries(formdata)[0][1]).slice(-1)[0] organizasyon verisine erişim. param olarak kullanılacak
  return (
    <>
      <IconButton icon={<PlusIcon />}>
        <Link to="/addreport">ADLİ RAPOR EKLE</Link>
      </IconButton>
      <br />
      <MUIDataTable
        title={"Tüm Raporlar"}
        data={Object.values(data)}
        columns={columns}
        options={options}
      />
      <Chart />
    </>
  );
};

export default Dahsboard;
