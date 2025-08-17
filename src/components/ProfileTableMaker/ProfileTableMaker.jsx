import React from "react";
import "./ProfileTableMaker.css";
export default function ProfileTableMaker(props) {
  const { table } = props;
  const tdMaker = (item) => {
    if (item.kind == "input") {
      return <input className="table-input" type={item.type} />;
    }
    if (item.kind == "select") {
      return (
        <select className="table-select">
          {item.options.map((option, o) => (
            <option key={o} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }
    if (item.kind == "link") {
      return <a href={item.link}>Click Here</a>;
    }
    if (item.kind == "text") {
      return <>{item.text}</>;
    }
    return null;
  };
  return (
    <table className="ProfileTableMaker">
      {table.map((tr, r) => (
        <tr key={r}>
          <td>{tr.title}</td>
          <td>{tdMaker(tr)}</td>
        </tr>
      ))}
    </table>
  );
}
