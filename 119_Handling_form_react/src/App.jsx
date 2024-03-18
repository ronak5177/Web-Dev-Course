import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2) // simulating network delay
    // console.log(data)

    let r = await fetch("http://localhost:3000/", { method: "POST", headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify(data) });
    let result = await r.text();
    console.log(data, result);

    // if(data.username != "Ronak"){
    //   setError("myform", {message: "Your form is not in good order"})
    // }
  };

  return (
    <>
      {isSubmitting && <div>Loading ... </div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="username"
            {...register("username", {
              required: { value: true, message: "UserName is required" },
              minLength: { value: 3, message: "Min length of username is 3" },
              maxLength: { value: 8, message: "Max length is 8" },
            })}
            type="text"
          />
          <br />
          {errors.username && (
            <div className="red">{errors.username.message}</div>
          )}
          <input
            placeholder="password"
            {...register("password", {
              minLength: { value: 7, message: "Min length of username is 7" },
            })}
            type="password"
          />
          {errors.password && (
            <div className="red">{errors.password.message}</div>
          )}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
        </form>
      </div>
    </>
  );
}

export default App;
