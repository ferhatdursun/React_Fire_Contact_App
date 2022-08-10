import React from "react";
import "./App.css";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [id, setId] = useState("");
  const [veri, setVeri] = useState([]);
  const [edit, setEdit] = useState(false);
  return (
    <div className="AppContainer">
      <div>
        <Form
          name={name}
          gender={gender}
          number={number}
          setNumber={setNumber}
          setName={setName}
          setGender={setGender}
          edit={edit}
          setEdit={setEdit}
          id={id}
          setId={setId}
        />
      </div>
      <div className="TableContainer">
        <Table
          name={name}
          gender={gender}
          number={number}
          setNumber={setNumber}
          setName={setName}
          setGender={setGender}
          id={id}
          setId={setId}
          veri={veri}
          setVeri={setVeri}
          edit={edit}
          setEdit={setEdit}
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
