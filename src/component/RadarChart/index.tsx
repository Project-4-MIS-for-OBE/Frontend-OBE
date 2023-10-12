/*install package.json before use*/
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["SO 1", "SO 2", "SO 3", "SO 4", "SO 5", "SO 6", "SO 7"],
  datasets: [
    {
      label: "ผลการประเมิน",
      data: [1.2, 0, 4, 3.5, , 2.3, 3.5],
      backgroundColor: "rgba(79, 121, 188, 0.80)",
      borderColor: "#3F6196",
      borderWidth: 1,
    },
  ],
};

export function Chart() {
  return <Radar data={data} />;
}
