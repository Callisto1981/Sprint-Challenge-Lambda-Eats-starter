import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { validate } from "@babel/types";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is Required")
    .min(2, "Name must be 2 characters or more")
});

const Form = () => {
  const [button, setButton] = useState(true);


  const [formState, setFormState] = useState({
      name: ""
  });


  const [errors, setErrors] = useState({
      name:""
  });

  const[post, setPost] = useState([]);

  useEffect(()=> {
      formSchema.isValid(formState).then(valid => {
          setButton(!valid);
      });
  }, [formState]);


  const formSubmit = e => {
      e.preventDefault();
      axios.post("https://reqres.in/api/pizza", formState)
      .then(response => {
          setPost(response.data);

          setFormState({
              name:""
          });
      })
      .catch(error => console.log("something is wrong", error.response));
  };

  const validateChange = e => {
      yup.reach(formSchema, e.target.name)
      validate(e.target.name === "terms" ? e.target.checked : e.target.value)
      .then(valid => {
          setErrors({
              ...errors, [e.target.name]: ""
          });
      })
      .catch(error => {
          setErrors({
              ...errors, [e.target.name]: error.errors[0]
          });
      });
  };


  const inputChange = e => {
      e.persist();
      const newFormData = {
          ...formState,
          [e.target.name]: e.target.type === "checkbox" ? e,target.checked : e.target.value
      };
      validateChange(e);
      setFormState(newFormData);
  };

  return (
    <form onSubmit={formSubmit}>
        <Link to={"/"}>
            <div>Home</div>
        </Link>
      <label htmlFor="name">
        Name:
        <input id="name" type="text" name="name" value={formState.name} onChange={inputChange} />
      {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </label><br/>

      <label htmlFor="size">
          What size Pizza: 
        <select 
        id="size"
        name="name"
        onChange={inputChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>
        </label><br/>

        <label htmlFor="pepperoni">
            pepperoni
            <input 
            id="pepperoni"
            type="checkbox"
            name="pepperoni"
            checked={formState.pepperoni}
            onChange={inputChange}/>
            {errors.pepperoni.length > 0 ? <p className="pepperoni">{errors.pepperoni}</p> : null}
        </label>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <button disabled={button}>Submit</button>
    </form>
  );
};
