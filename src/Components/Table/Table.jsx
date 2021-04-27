import React from "react";
import ReactDom from "react-dom";
import "./Table.scss";

function Table() {
  const iconCheck = (
    <img
      src="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_ca/shared/icons/checkmark-thick.svg"
      className="icon"
      alt="yes"
    />
  );
  const iconCross = (
    <img
      className="icon"
      src="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/shared/icons/sbseg-ic_close.svg"
      alt="no"
    />
  );
  console.log(`window`, window);
  return ReactDom.createPortal(
    <div className="tableComp">
      <table className="table">
        <thead className="th">
          <td className="compTitle">{window.comparison.title}</td>
          <td className="prodOne">{window.comparison.productOne}</td>
          <td className="prodTwo">{window.comparison.productTwo}</td>
        </thead>
        <tbody className="tbody">
          {window.comparison.differences.map((compare, index) => {
            return (
              <>
                <tr className="tr">
                  <td
                    className="td"
                    dangerouslySetInnerHTML={{ __html: compare.title }}
                  />
                  <td className="td">
                    {compare.prodOne.icon && <span>{iconCheck}</span>}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: compare.prodOne.description
                      }}
                    />
                  </td>
                  <td className="td">
                    {compare.prodTwo.icon && <span>{iconCross}</span>}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: compare.prodTwo.description
                      }}
                    />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>,
    document.getElementById(window.comparison.portId)
  );
}

export default Table;
