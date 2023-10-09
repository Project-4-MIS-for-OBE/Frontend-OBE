import "./index.css";
import HeaderProp from "./HeaderProp";
import DataProps from "./DataProps";
interface Header {
  mainTopic: string;
  subTopic: string[] | undefined;
}
interface data {
  Header: Header[];
  Data: string[][][];
  selectedIcon?: boolean;
}

const Table = ({ Header, Data, selectedIcon }: data) => {
  const numberOfHeader: number[] = Header.map((data) => {
    return data.subTopic === undefined ? 1 : data.subTopic?.length;
  });

  return (
    <table>
      <HeaderProp Header={Header} />
      <DataProps
        Data={Data}
        selectedIcon={selectedIcon ?? undefined}
        numberOfHeader={numberOfHeader}
      />
    </table>
  );
};

export default Table;
