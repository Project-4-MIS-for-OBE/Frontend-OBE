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
      <tr className="outsideHeader">
        {Header.map((header, index) =>
          header.subTopic === undefined ? (
            <th key={index} className="headerTH">
              {header.mainTopic}
            </th>
          ) : (
            <th key={index} className="headerTH">
              <table className="insideTable">
                <thead>
                  <tr className="insideHeader headerTH">
                    <th colSpan={header.subTopic.length}>{header.mainTopic}</th>
                  </tr>
                  <tr className="insideHeader subHeaderTH">
                    {header.subTopic.map((subTopic, key) => (
                      <th key={key} className="subHeaderTH">
                        {subTopic}
                      </th>
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
