import React from "react";
import ProfileTableMaker from "../../components/ProfileTableMaker/ProfileTableMaker";
import "./ProfileTables.css";
export default function ProfileTables(props) {
  const { tableList } = props;
  return (
    <div className="ProfileTables">
      <div className="ProfileTables-container">
        {tableList.map((table, t) => (
          <div className="table-wrapper">
            <p className="table-title">{table.title}</p>
            <ProfileTableMaker key={t} table={table.items} />
          </div>
        ))}
      </div>
      <div className="btn-wrapper">
        <button className="Update-btn">Update</button>
        <p>
          Once submitted, no further editing is allowed within one working day.
        </p>
      </div>
    </div>
  );
}
