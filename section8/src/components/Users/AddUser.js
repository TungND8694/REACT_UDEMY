import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import UserList from "./UserList";
import ErrorModal from "../UI/ErrorModal";
const AddUSer = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "enter valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "enter age >1 ",
      });
      return;
    }
    props.onAddUSer(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            step="1"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit" onChange={addUserHandler}>
            Add Users
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUSer;
