interface data {
  Data: string[][][];
  numberOfHeader: number[];
  selectedIcon?: boolean;
}

const DataProps = ({ Data, selectedIcon, numberOfHeader }: data) => {
  const numRowsInHeader = numberOfHeader.length - 1 ?? 0;
  const numRowsWithData = (Data && Data[0]?.length) ?? 0;
  const numRowsWithInput = Math.abs(numRowsInHeader - numRowsWithData);
  const subDataLenght = (Data &&
    Data?.map(
      (data, index) => Data && Data[index][data?.length - 1]?.length
    )) ?? [0];
  return (
    <tbody>
      {Data?.map((outerArray, index) => (
        <tr key={index} className="outsideData">
          <td className="order">{index + 1}</td>
          {outerArray.map((innerArray, innerIndex) => (
            <td key={innerIndex} className="insideDataContianer">
              {numberOfHeader[innerIndex + 1] > 1 ? (
                <table>
                  <tbody>
                    <tr className="insideData">
                      {innerArray.map((item, itemIndex) => (
                        <td key={itemIndex} className="dataTD">
                          {selectedIcon
                            ? item === "0"
                              ? ""
                              : item === "1"
                              ? 1
                              : item
                            : item}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              ) : (
                innerArray?.map((item, itemIndex) => (
                  <table key={itemIndex}>
                    <tbody>
                      <tr className="insideData">
                        <td className="dataTD">
                          {selectedIcon
                            ? item === "0"
                              ? ""
                              : item === "1"
                              ? 1
                              : item
                            : item}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ))
              )}
            </td>
          ))}
          {numRowsInHeader - 1 > numRowsWithData &&
            [...Array(numRowsWithInput)].map((_, rowIdex) => (
              <td key={rowIdex} className="insideDataContianer">
                {Array(subDataLenght[index])
                  .fill(null)
                  .map((_, cellIndex) => (
                    <table key={cellIndex}>
                      <tbody>
                        <tr className="insideData">
                          <td className="dataTD">
                            <input type="text" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ))}
              </td>
            ))}
        </tr>
      ))}
    </tbody>
  );
};

export default DataProps;
