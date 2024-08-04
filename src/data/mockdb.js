// src/data/mockdb.js

const mockdb = {
    users: [
      {
        id: 1,
        // TODO: Move these to system variables
        username: 'admin',
        password: '12345',
        isAdmin: true,
        
      },
      {
        id: 2,
        // TODO: Move these to system variables
        username: 'user',
        password: '12345',
        isAdmin: false,
      },
      
    ],
  
    findUser: (email, password) => {
      return mockdb.users.find(
        (user) => user.username === email && user.password === password
      );
    },
  };
  
  export default mockdb;
  