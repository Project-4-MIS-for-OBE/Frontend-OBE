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
    data.evaluationResults,
  ]);
  const dataTableSO = EditScoreData?.SOList.map(
    (soData: any, soIndex: number) => {
      const csoData = EditScoreData?.CSOList.map(
        (csoItem: any, csoIndex: number) => {
          if (csoItem.selectedSO.includes(soIndex + 1)) {
            return [[`CSO ${soIndex + 1}`], [...csoItem.evaluationResults]];
          } else {
          }
        }
      );

      return [[[soData.detailTH]], ...csoData.flat()];
    }
  );

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
