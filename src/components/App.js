import React, { useState } from 'react'

import '../styles/App.css';

const App = () => {

const [formFields, setFormFields] = useState({

username: "",

email: "",

password: "",

contactNo: ""

});

const [formErrors, setFormErrors] = useState({});

const [isFormSubmitted, setIsFormSubmitted] = useState(false);

function handleInputChange(event) {

const { name, value } = event.target;

setFormFields({...formFields, [name]: value});

}

function validateForm(inputValues) {

const errors = {};

if (!inputValues.username) {

errors.username = "Username is required";

}

if (!inputValues.email) {

errors.email = "Email is required";

}

if (!inputValues.password) {

errors.password = "Password is required";

} else if (inputValues.password.length < 4) {

errors.password = "Password must have more than 4 characters";

}

if (!inputValues.contactNo) {

errors.contactNo = "Contact no. is required";

} else if (inputValues.contactNo.length !== 10) {

errors.contactNo = "Invalid contact no.";

}

return errors;

}

function handleFormSubmit(event) {

event.preventDefault();

setFormErrors(validateForm(formFields));

setIsFormSubmitted(true);

setFormFields({

username: "",

email: "",

password: "",

contactNo: ""

})

}

return (

<div id="main">

{Object.keys(formErrors).length === 0 && isFormSubmitted ? <h3 className='success-alert'>Registered Successfullly</h3> : null}

<form onSubmit={handleFormSubmit}>

<h1>Registeration Form</h1>

<section>

<label>Username</label>

<input type="text" name='username' value={formFields.username} onChange={handleInputChange} />

{formErrors.username && <p className='username-error'>{formErrors.username}</p>}

<label>Email</label>

<input type="email" name='email' value={formFields.email} onChange={handleInputChange} />

{formErrors.email && <p className='email-error'>{formErrors.email}</p>}

<label>Password</label>

<input type="password" name='password' value={formFields.password} onChange={handleInputChange} />

{formErrors.password && <p className='password-error'>{formErrors.password}</p>}

<label>Contact Number</label>

<input type="number" name='contactNo' value={formFields.contactNo} onChange={handleInputChange} />

{formErrors.contactNo && <p className='contactNo-error'>{formErrors.contactNo}</p>}

<button onClick={handleFormSubmit}>Submit</button>

</section>

</form>

</div>

)

}

export default App;