import { useState } from "react";

function HookObject() {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  const changeHandler = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };

  const lastNameHandler = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };

  return (
    <>
      <input type="text" value={user.firstName} onChange={changeHandler} />
      <input type="text" value={user.lastName} onChange={lastNameHandler} />
      <h2>{JSON.stringify(user)}</h2>
    </>
  );
}

export default HookObject;
