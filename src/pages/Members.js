import React, { useState, useEffect, useRef } from "react";
import { withTranslation } from "react-i18next";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import axios from "axios";

function Members(props) {
  const { t } = props;
  const [data, setData] = useState([]);
  const [editingCellRows, setEditingCellRows]=useState({});
  const [originalRows, setOriginalRows]=useState({});
  const memToast = useRef(null);
  const columns = [
    { field: "uid", header: "ID" },
    { field: "Firstname", header: "First Name" },
    { field: "Lastname", header: "Last Name" },
    { field: "Mail", header: "E-Mail" },
  ];

  const inputTextEditor = (productKey, props, field) => {
    return (
      <InputText
        type="text"
        value={props.rowData[field]}
        onChange={(e) =>
          onEditorValueChange(productKey, props, e.target.value)
        }
      />
    );
  };
  const emptyValueValidator = (props) => {
    const { rowData, field } = props;
    return rowData[field].trim().length > 0;
  };
  const onEditorInit = (props) => {
    const { rowIndex: index, field, rowData } = props;
    let tempArray=editingCellRows;
    if (!tempArray[index]) {
      tempArray[index] = { ...rowData };
    }
    tempArray[index][field] = data[index][field];
    setEditingCellRows(tempArray);
  };

  const onEditorCancel = (props) => {
    const { rowIndex: index, field } = props;
    let products = [...data];
    products[index][field] = editingCellRows[index][field];
    let tempArray = editingCellRows;
    delete tempArray[index][field];
    setEditingCellRows(tempArray);

    setData(data);
  };

  const onEditorSubmit = (props) => {
    const { rowIndex: index, field } = props;
    let tempArray = editingCellRows;
    delete tempArray[index][field];
    setEditingCellRows(tempArray);
  };
  const onEditorValueChange = (productKey, props, value)=> {
      let updatedProducts = [...props.value];
      updatedProducts[props.rowIndex][props.field] = value;
      setData(updatedProducts);
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/members");
      console.log("Fetching members...");
      console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <Card id="content">
      <div>
        <h1>{t("menu.members")}</h1>
        <Toast ref={memToast}/>
        <DataTable
          value={data}
          className="p-datatable-sm p-datatable-striped editable-cells-table"
          editMode="cell"
        >
          {columns.map((col) => {
            const { field, header } = col;
            const validator = emptyValueValidator;
            return (
              <Column
                key={field}
                field={field}
                header={header}
                editor={(props) => inputTextEditor(data, props, field)}
                editorValidator={validator}
                onEditorInit={onEditorInit}
                onEditorCancel={onEditorCancel}
                onEditorSubmit={onEditorSubmit}
              />
            );
          })}
        </DataTable>
      </div>
    </Card>
  );
}

export default withTranslation()(Members);
