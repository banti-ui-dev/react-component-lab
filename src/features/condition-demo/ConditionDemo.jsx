import { react, useState } from "react";
import Button from "../../components/Button";

const ConditionDemo = () => {
  const [username, setUsername] = useState(null);
  const handleNamechnage = (e) => {
    setUsername(e.target.value);
  };
  const handleSignin = () => {
    window.sessionStorage.setItem("uname", username);
    location.reload()
  };
  const handleSignout = () => {
    window.sessionStorage.removeItem('uname')
    location.reload()
  }
  return (
    <div className="px-28">
      <header className="border m-2 p-2 flex justify-between items-center">
        <div className="font-bold text-xl">Amazon</div>
        <nav>
          <span>Home</span>
          <span className="mx-4">Shop</span>
          <span>Contact</span>
        </nav>
        {
        window.sessionStorage.getItem("uname") === null 
        ? 
        (
          <div>
            <input
              type="text"
              onChange={handleNamechnage}
              placeholder="Change username"
            />
            <Button onClick={handleSignin}>Sign in</Button>
          </div>
        ) 
        : 
        (
          <div>{window.sessionStorage.getItem("uname")} <Button onClick={handleSignout}>Sign out</Button></div>
        )
        }
      </header>
    </div>
  );
};
export default ConditionDemo;
