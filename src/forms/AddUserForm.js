import React, { useState } from 'react'
//import { useHistory } from "react-router-dom";

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '',age: '', location: '', }
	const [ user, setUser ] = useState(initialFormState)
	
	const handleInputChange = event => {
		const { name, value } = event.target
		
		setUser({ ...user, [name]: value })
	}

	

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username || !user.age || !user.location) return
				
			
				props.addUser(user)
				setUser(initialFormState)
			}} >
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<label>Age</label>
      		<input type="text" name="age" value={user.age} onChange={handleInputChange} />	
			<label>Location</label>
      		<input type="text" name="location" value={user.location} onChange={handleInputChange} />
			
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm

