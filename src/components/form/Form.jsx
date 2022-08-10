import React, { useState } from "react";
import { getDatabase, ref, set, push, update } from "firebase/database";
import firebase from "../../utils/firebase";
import "react-toastify/dist/ReactToastify.min.css";
import {
  toastSuccessNotify,
  toastWarnNotify,
} from "../../utils/customToastify";

const Form = ({
  number,
  gender,
  name,
  setName,
  setNumber,
  setGender,
  edit,
  setEdit,
  id,
}) => {
  const create = (e) => {
    e.preventDefault();
    edit
      ? //! editUser update islemleri icin
        editUser({ name: name, number: number, gender: gender, i: id })
      : writeUserData(name, number, gender);
  };

  //! Yeni veri ekleme
  function writeUserData(name, number, gender) {
    const database = getDatabase(firebase);
    const userRef = ref(database, "contact/");
    const NewUserRef = push(userRef);
    set(NewUserRef, {
      name: name,
      number: number,
      gender: gender,
    });
    setName("");
    setNumber("");
    setGender("");
    setEdit(false);
    toastSuccessNotify("Added to table");
  }

  //! Update

  const editUser = (i) => {
    console.log("i;", i);
    const editt = {};
    editt["contact/" + i.i] = i;
    const database = getDatabase(firebase);
    update(ref(database), editt);
    setName("");
    setNumber("");
    setGender("");
    toastWarnNotify("Updated!");
    setEdit(false);
  };

  return (
    <div className="GenelContainer">
      <div className="containersol">
        <header className="header">
          <h1 className="FD">
            <i>FD DESIGN</i>
          </h1>
          <h2 className="AddContact">ADD CONTACT</h2>
        </header>
        <form onSubmit={create}>
          <div className="sol">
            <div className="form-control">
              <input
                id="text"
                type="text"
                name="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-control">
              <input
                id="text"
                type="phone"
                name="number"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-control">
              <select
                className="select"
                name="select"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              >
                <option selected disabled hidden value="">
                  Gender
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            {edit ? (
              <button className="add" type="submit">
                Update
              </button>
            ) : (
              <button className="add" type="submit">
                Add
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
