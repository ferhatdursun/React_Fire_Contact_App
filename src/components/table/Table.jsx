import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import firebase from "../../utils/firebase";
import DeleteIcon from "@mui/icons-material/Delete";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import Button from "@mui/material/Button";
import { toastWarnNotify, toastDangerNotify } from "../../utils/customToastify";
//!https://react-icons.github.io/react-icons

const Table = ({
  setName,
  setNumber,
  setGender,
  veri,
  setVeri,
  setId,
  id,
  setEdit,
}) => {
  // Sayfa yüklendiginde gelen verileri görmek icin GelenVeriyi useEffect icine aldik
  useEffect(() => {
    const database = getDatabase();
    const starCountRef = ref(database, "contact/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
      for (let i in data) {
        console.log("id;", i);
        userArray.push({ i, ...data[i] });
      }
      setVeri(userArray);
    });
  }, []);

  console.log("veri", veri);

  //! Edit
  const Edit = (i) => {
    setName(i.name);
    setNumber(i.number);
    setGender(i.gender);
    setId(i.i);
    setEdit(true);
  };

  // Veri silme
  const DeleteUser = (id) => {
    const database = getDatabase(firebase);
    remove(ref(database, "contact/" + id));
    toastDangerNotify("Deleted Successfully");
    console.log("id2;", id);
  };

  return (
    <div className="TableContainer">
      <div className="Contactsdiv">
        <h1 className="contacts">CONTACTS</h1>
      </div>
      <table>
        <tr>
          <th>Username</th>
          <th>Phone Number</th>
          <th>Gender</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>

        {veri?.lenght === 0 ? (
          <tr
            className=""
            style={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <td colSpan={5}>Nothing Found</td>
          </tr>
        ) : (
          veri?.map((i, id) => {
            return (
              <tr key={id}>
                <td>{i.name}</td>
                <td>{i.number}</td>
                <td>{i.gender}</td>
                <td>
                  <Button variant="contained" color="error">
                    <DeleteIcon
                      onClick={() => {
                        DeleteUser(i.i);
                      }}
                    />
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="success">
                    <DesignServicesIcon
                      onClick={() => {
                        Edit(i);
                      }}
                    />
                  </Button>
                </td>
              </tr>
            );
          })
        )}
      </table>
    </div>
  );
};

export default Table;
