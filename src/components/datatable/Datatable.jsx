import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataTableSource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = ({ title, add, linkTo }) => {
  const [data, setData] = useState(userRows)
  
  const handelDelete = (id) => {
    setData(data.filter(item=> item.id !== id))
  }
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() =>handelDelete(params.row.id)}>Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        <Link to={`/${linkTo}/new`} className="link">
          {add}
        </Link>
      </div>
      <DataGrid
      className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
