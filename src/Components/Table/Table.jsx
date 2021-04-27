import React from "react";
import ReactDom from "react-dom";
import "./Table.scss";

function Table({ comparison }) {
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
  return ReactDom.createPortal(
    <>
      <table className="table">
        <thead>
          <td>{comparison.title}</td>
          <td className="prodOne">{comparison.productOne}</td>
          <td className="prodTwo">{comparison.productTwo}</td>
        </thead>
        <tbody>
          {comparison.differences.map((compare, index) => {
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
    </>,
    document.getElementById(comparison.portId)
  );
}

export default Table;
