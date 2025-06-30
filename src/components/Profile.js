import { useState } from "react";

const Profile = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This is Profile component</h1>
      <h3>Name:{name}</h3>
      <h3>Count:{count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Count
      </button>
    </div>
  );
};
export default Profile;
