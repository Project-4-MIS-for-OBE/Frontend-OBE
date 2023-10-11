import { useEffect, useState } from "react";
import EditScore from "../../data/EditScore.json";

const useViewModel = () => {
  const [EditScoreData, setEditScoreData] = useState<any | undefined>(
    undefined
  );
  const dataTableSOstudent = EditScoreData?.SOList.map((data: any) => [
    [[data.detailTH]],
  ]);

  const HeaderTableSO = [
    {
      mainTopic: "ลำดับ",
      subTopic: undefined,
    },
    {
      mainTopic:
        "คำอธิบายวัตถุประสงค์การเรียนรู้ของนักศึกษา (SO : Student outcomes)",
      subTopic: undefined,
    },
    {
      mainTopic: "CSO",
      subTopic: undefined,
    },
    {
      mainTopic: "ผลการประเมินเฉลี่ยรวม",
      subTopic: undefined,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setEditScoreData(EditScore);
      } catch (err) {
        console.error("err msg", err);
      }
    };
    fetchData();
  });

  return {
    dataTableSOstudent,
    HeaderTableSO,
  };
};

export default useViewModel;
