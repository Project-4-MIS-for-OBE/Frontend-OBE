import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import "./index.css";

const ExcelBtn = () => {
  const excelData = [
    {
      studentID: "640610777",
      name: "วิศวะ ใจเดียว",
      quiz1: "10",
      quiz2: "10",
      midterm: "30",
      final: "30",
    },
    {
      studentID: "640610888",
      name: "สมใจ ใจดี",
      quiz1: "8",
      quiz2: "9",
      midterm: "28",
      final: "15",
    },
    {
      studentID: "640610999",
      name: "สมชาย เก่งกล้า",
      quiz1: "9",
      quiz2: "10",
      midterm: "29",
      final: "25",
    },
  ];

  const handleOnExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Score");

    /* fix headers */
    const headers = [
      "รหัศนักศึกษา",
      "ชื่อ - นามสกุล",
      "คะแนนควิซ1",
      "คะแนนควิซ2",
      "คะแนนสอบ Midterm",
      "คะแนนสอบ Final",
    ];
    XLSX.utils.sheet_add_aoa(worksheet, [headers], { origin: "A1" });

    /* calculate column width */
    const columnWidths = headers.map((header) => ({ wch: header.length }));
    worksheet["!cols"] = columnWidths;

    const excelBlob = new Blob(
      [s2ab(XLSX.write(workbook, { bookType: "xlsx", type: "binary" }))],
      {
        type: "application/octet-stream",
      }
    );
    FileSaver.saveAs(excelBlob, "Download.xlsx");
  };
  const s2ab = (s: any) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== s.length; ++i) {
      view[i] = s.charCodeAt(i) & 0xff;
    }
    return buf;
  };

  return (
    <button className="excelBtn" onClick={handleOnExport}>
      <p>บันทึกเป็นไฟล์ .xlsx</p>
    </button>
  );
};

export default ExcelBtn;
