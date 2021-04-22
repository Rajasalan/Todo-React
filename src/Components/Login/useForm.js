import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


const useForm = ({ initState, callback, validator }) => {
    const [state, setState] = useState(initState);
    const [errors, setErrors] = useState({});
    const [isSubmited, setIsSubmited] = useState(false);
    const [emailInput, setEmailInput] = useState(initState);
    const [passwordInput, setPasswordInput] = useState(initState);
    const history = useHistory();


useEffect(() => {
    const isValidErrors = () =>
      Object.values(errors).filter(error => typeof error !== "undefined")
        .length > 0;
    if (isSubmited && !isValidErrors()) callback();
  }, [errors]);

  const handleChanges = e => {
    const { name, value } = e.target;
    setState(() => ({
      ...state,
      [name]: value
    }));
   
  };


  const handleBlur = e => {
    const { name: fieldName } = e.target;
    const faildFiels = validator(state, fieldName);
    setErrors(() => ({
      ...errors,
      [fieldName]: Object.values(faildFiels)[0]
    }));
  };

  const handleSubmit =(e)  => {
    e.preventDefault();
    let hardcodedCred = {
        email: 'ann@gmail.com',
        password: 'pass'
        
    }
    if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
        //combination is good. Log them in.
        //this token can be anything. You can use random.org to generate a random string;
        //const token = '123456abcdef';
        //sessionStorage.setItem('auth-token', token);
        //go to www.website.com/todo
        history.push('/Main');
    } else {
        //bad combination
        alert('wrong email or password combination');
    }
    const { name: fieldName } = e.target;
    const faildFiels = validator(state, fieldName);
    setErrors(() => ({
      ...errors,
      [fieldName]: Object.values(faildFiels)[0]
    }));
    setIsSubmited(true);
  };

  const handleChange = (event) => {
    setEmailInput(event.target.value);
  };

  const handleClickShowPassword = (event) => {
    setPasswordInput(event.target.value);
  };



  return {
    handleChange,
    handleClickShowPassword,
    handleChanges,
    handleSubmit,
    handleBlur,
    state,
    errors
  };
};

export default useForm;
