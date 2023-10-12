import { useEffect, useState } from "react";
import EditScore from "../../data/EditScore.json";
import { useNavigate } from "react-router-dom";
import { PROTECTED_PATH } from "../../constants/path.route";

const useViewModel = () => {
  const [EditScoreData, setEditScoreData] = useState<any | undefined>(
    undefined
  );
  const dataTable1 = EditScoreData?.CSOList.map((data: any) => [
    [[data.objTH]],
    data.scoreTopicList,
  ]);
  const dataTableSO = EditScoreData?.SOList.map((data: any) => [
    [[data.detailTH]],
  ]);
  const subDataforTable2: string[] | string[][] = [
    ["0", "0", "0", "0", "0", "0", "1"],
    ["1", "0", "0", "0", "1", "0", "0"],
    ["1", "0", "0", "0", "1", "0", "0"],
  ];

  const dataTable2 = EditScore?.CSOList.map((data: any, index: any) => [
    [[data.objTH]],
    subDataforTable2[index],
  ]);
  const dataTable3 = dataTable1?.map((dataItem: any) => [
    ...dataItem,
    ...Array(5).fill(["0"]),
  ]);
  const HeaderTable1 = [
    {
      mainTopic: "ลำดับ",
      subTopic: undefined,
    },
    {
      mainTopic: "คำอธิบาย CSO",
      subTopic: undefined,
    },
    {
      mainTopic: "คะแนนที่ใช้ในการวัดผล CSO",
      subTopic: undefined,
    },
    {
      mainTopic: "คะแนนเต็ม",
      subTopic: undefined,
    },
    {
      mainTopic: "น้ำหนักคะแนน",
      subTopic: undefined,
    },
  ];
  const HeaderTable2 = [
    {
      mainTopic: "ลำดับ",
      subTopic: undefined,
    },
    {
      mainTopic: "คำอธิบาย CSO",
      subTopic: undefined,
    },
    {
      mainTopic: "SO (Student outcomes)",
      subTopic: ["1", "2", "3", "4", "5", "6", "7"],
    },
  ];
  const HeaderTable3 = [
    {
      mainTopic: "ลำดับ",
      subTopic: undefined,
    },
    {
      mainTopic: "คำอธิบาย CSO",
      subTopic: undefined,
    },
    {
      mainTopic: "คะแนนที่ใช้ในการวัดผล CSO",
      subTopic: undefined,
    },
    {
      mainTopic: "0",
      subTopic: undefined,
    },
    {
      mainTopic: "1",
      subTopic: undefined,
    },
    {
      mainTopic: "2",
      subTopic: undefined,
    },
    {
      mainTopic: "3",
      subTopic: undefined,
    },
    {
      mainTopic: "4",
      subTopic: undefined,
    },
  ];
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
  const navigate = useNavigate();

  const navigateToDashBoard = () => {
    navigate(PROTECTED_PATH.INSTRUCTOR_SUBJECT, { replace: false });
  };
  const navigateToConcludeInstructor = () => {
    navigate(PROTECTED_PATH.INSTRUCTOR_CONCLUDE, { replace: false });
  };

  return {
    EditScoreData,
    dataTable1,
    dataTable2,
    dataTable3,
    dataTableSO,
    HeaderTable1,
    HeaderTable2,
    HeaderTable3,
    HeaderTableSO,
    navigateToConcludeInstructor,
    navigateToDashBoard,
  };
};

export default useViewModel;
