import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["0", "1", "2", "3", "4"],
  datasets: [
    {
      label: "จำนวนนักศึกษา",
      data: [2, 25, 11, 5, 12],
      backgroundColor: [
        "rgba(220, 228, 242, 0.9)",
        "rgba(185, 201, 228, 0.9)",
        "rgba(149, 175, 215, 0.9)",
        "rgba(114, 148, 201, 0.9)",
        "rgba(63, 97, 150, 0.9)",
      ],
      borderColor: [
        "rgba(220, 228, 242, 1)",
        "rgba(185, 201, 228, 1)",
        "rgba(149, 175, 215, 1)",
        "rgba(114, 148, 201, 1)",
        "rgba(63, 97, 150, 1)",
      ],
      borderWidth: 2,
    },
  ],
};

export function DoughnutChart() {
  return <Doughnut data={data} />;
}
