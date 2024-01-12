import { useState } from "react";
import "./App.css";
import { puppyList } from "./data";
import "./index.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  // const handleClick = () => {};
  console.log("puppyList: ", puppyList);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <>
      {featPupId && (
        <div className="selectedPup">
          <h2>{featuredPup.name}</h2>
          <ul className="list">
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      <br />
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.name}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
