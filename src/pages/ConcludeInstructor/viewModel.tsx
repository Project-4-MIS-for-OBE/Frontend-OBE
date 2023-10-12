import { useEffect, useState } from "react";
import EditScore from "../../data/EditScore.json";
import concludeData from "../../data/concludeInstructor.json";
import { useNavigate } from "react-router-dom";
import { PROTECTED_PATH } from "../../constants/path.route";

const useViewModel = () => {
  const [EditScoreData, setEditScoreData] = useState<any | undefined>(
    undefined
  );
  const [ConcludeSOData, setConcludeSOData] = useState<any | undefined>(
    undefined
  );
  const dataTable1 = EditScoreData?.CSOList.map((data: any) => [
    [[data.objTH]],
    data.scoreTopicList,
    data.evaluationResults,
  ]);
  const dataTableSO = ConcludeSOData?.SOList?.map((data: any) => [
    [[data.detailTH]],
    data.CSOSelected,
    data.evaluationResults,
  ]);

  console.log(dataTableSO);
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
      mainTopic: "ผลการประเมิน",
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
    {
      mainTopic: "CSO",
      subTopic: undefined,
    },
    {
      mainTopic: "ผลการประเมิน",
      subTopic: undefined,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setEditScoreData(EditScore);
        setConcludeSOData(concludeData);
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
  return {
    EditScoreData,
    dataTable1,
    dataTableSO,
    HeaderTable1,
    HeaderTableSO,
    navigateToDashBoard,
  };
};

export default useViewModel;
