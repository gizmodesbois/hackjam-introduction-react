import React from 'react'
import users from '../mocks/users'

// TODO 1:
// Create a User component and refactor the App component below

// TODO 2:
// Map over the first 50 users and return a list of them

// TODO 3:
// Use propTypes to validate the props of the User component

// TODO 4:
// Make sure your console is free of error/warnings
export class App extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <ul>
          <li>
            <p
              style={{
                color: users[0].gender === 'F' ? 'pink' : 'blue'
              }}
            >
              <img
                alt={`Avatar of ${users[0].firstName} ${users[0].lastName}`}
                src={users[0].avatar}
              />
              {`${users[0].firstName} ${users[0].lastName} is a/an ${
                users[0].jobTitle
              }`}
            </p>
          </li>
        </ul>
      </div>
    )
  }
}
