import React, { useReducer } from "react";


//Global Store having only keys and values
let initialValue = { userCount: 0 };


//Reducer can acces the initila state and the action like edit update delete
const reducer = (state, action) => {
  switch (action.type) {
    case "Join": return { userCount: state.userCount + 1 };
    case "Exit": return { userCount: state.userCount - 1 };
  }
};


//Component 
const ReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const handleJoinClick = () => {
    dispatch({type:"Join"})
  }
  const handleExitClick = () => {
    dispatch({type:"Exit"})
  }
  return (
    <div>
      <div>
        <h2>Live Users {state.userCount}</h2>
        <iframe
          width="500"
          height="400"
          src="https://www.youtube.com/embed/MIDv4q_bvgU?si=8Eu1328m-iapd92U"
        ></iframe>
        <div className="mt-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-2" onClick={handleJoinClick}>
            Join Live
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700" onClick={handleExitClick}>
            Exit Live
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReducerDemo;
