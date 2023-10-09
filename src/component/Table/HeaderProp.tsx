interface Header {
  mainTopic: string;
  subTopic: string[] | undefined;
}
interface Data {
  Header: Header[];
}
const HeaderProp = ({ Header }: Data) => {
  return (
    <thead>
      <tr>
        {Header.map((header, index) =>
          header.subTopic === undefined ? (
            <th key={index}>{header.mainTopic}</th>
          ) : (
            <th key={index}>
              <table>
                <thead>
                  <tr>
                    <th colSpan={header.subTopic.length}>{header.mainTopic}</th>
                  </tr>
                  <tr>
                    {header.subTopic.map((subTopic, key) => (
                      <th key={key}>{subTopic}</th>
                    ))}
                  </tr>
                </thead>
              </table>
            </th>
          )
        )}
      </tr>
    </thead>
  );
};

export default HeaderProp;
