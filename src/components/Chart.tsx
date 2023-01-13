import { PieChart, Pie, Tooltip } from "recharts";
export const Chart=()=> {

    const data01 = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
                                          //kategori sayıları hesaplanamadığı için veriler girilemedi.
      ];
  return (
    <PieChart width={1000} height={500}>
    <Pie
      dataKey="value"
      isAnimationActive={false}
      data={data01}
      cx={300}
      cy={300}
      outerRadius={150}
      fill="#5389d8"
      label
    />

    <Tooltip />
  </PieChart>
  )
}

