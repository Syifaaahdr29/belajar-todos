import { useState } from "react";
import Profile from "./components/profile";
import Todos from "./components/Todos";

function App() {
  const [users, setUsers] = useState([
    {name: "alpha", age: 20},
    {name: "beta", age: 20},
    {name: "charlie", age: 20},
  ]);

  return (
    <>
      {/* {users.map((item, index) => (
        <Profile key={index} name={item.name} age={item.age} />
      ))} */}

      <Todos />
    </>
  )
}

export default App
