interface data {
  Data: any[][][];
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
                    <tr
                      className={
                        selectedIcon ? "insideData icon" : "insideData noIcon"
                      }
                    >
                      {innerArray.map((item, itemIndex) => (
                        <td
                          key={itemIndex}
                          className={
                            selectedIcon ? "dataTD icon" : "dataTD noIcon"
                          }
                        >
                          {selectedIcon ? (
                            item === "0" ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                              >
                                <circle cx="7.5" cy="7.5" r="7.5" />
                              </svg>
                            ) : item === "1" ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                              >
                                <circle
                                  cx="7.5"
                                  cy="7.5"
                                  r="7.5"
                                  fill="url(#paint0_linear_370_858)"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_370_858"
                                    x1="7.5"
                                    y1="0"
                                    x2="7.5"
                                    y2="15"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#4F79BC" />
                                    <stop
                                      offset="0.963542"
                                      stopColor="#5166A1"
                                    />
                                  </linearGradient>
                                </defs>
                              </svg>
                            ) : (
                              item
                            )
                          ) : (
                            item
                          )}
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
