interface data {
  Data: string[][][];
  numberOfHeader: number[];
  selectedIcon?: boolean;
}

const DataProps = ({ Data, selectedIcon, numberOfHeader }: data) => {
  const numRowsInHeader = numberOfHeader.length - 1 ?? 0;
  const numRowsWithData = (Data && Data[0]?.length) ?? 0;
  const numRowsWithInput = Math.abs(numRowsInHeader - numRowsWithData);
  const subDataLenght =
    (Data &&
      Data?.map(
        (data, index) => Data && Data[index][data?.length - 1]?.length
      )) ??
    0;
  return (
    <tbody>
      {Data?.map((outerArray, index) => (
        <tr key={index}>
          <td key={-1}>{index + 1}</td>
          {outerArray.map((innerArray, innerIndex) => (
            <td key={innerIndex}>
              {numberOfHeader[innerIndex + 1] > 1 ? (
                <table>
                  <tbody>
                    <tr>
                      {innerArray.map((item, itemIndex) => (
                        <td key={itemIndex}>
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
                      <tr>
                        <td>
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
            [...Array(numRowsWithInput)].map((_, rowIndex) => (
              <td key={rowIndex}>
                <table>
                  <tbody>
                    {Array(subDataLenght[rowIndex])
                      .fill(null)
                      .map((_, cellIndex) => (
                        <tr key={cellIndex}>
                          <td>
                            <input type="text" />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </td>
            ))}
        </tr>
      ))}
    </tbody>
  );
};

export default DataProps;
