// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];


// SOLUTION 1 =>

cons isNameExists = (name, users) => {
  let exists = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      exists = true;
    }
  }
  return exists;
}


// SOLUTION 2 =>
const isNameExists = (name, arr) => arr.some(el) => el.name === name);


// SOLUTION 3 =>
const isNameExists = (name, arr) => {
  const  el = arr.find((el) => el.name === name);
  return Boolean(el);
}

// SOLUTION 4 =>
const isNameExists = (name, arr) => {
  const index = arr.findIndex((el) => el.name === name);
  return index > 0;
}
  
  
  
  
  
  
  







