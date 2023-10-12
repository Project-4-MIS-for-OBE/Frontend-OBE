import { useEffect, useState } from "react";
import concludeStudent from "../../data/concludeStudent.json";

const useViewModel = () => {
  const [ConcludeStudentData, setConcludeStudentData] = useState<
    any | undefined
  >(undefined);
  const dataTableSOstudent = ConcludeStudentData?.SOList.map((data: any) => [
    [[data.detailTH]],
    data.StudentSoScore,
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
      mainTopic: "ผลการประเมินเฉลี่ยรวม",
      subTopic: undefined,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setConcludeStudentData(concludeStudent);
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
