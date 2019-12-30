import React from 'react'

const display = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Age</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
            <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.age}</td>
            <td>{user.location}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default display
