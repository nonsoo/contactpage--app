import "./css/layout.css";

import data from "./data.json";
import Card from "./Components/Card";

function App() {
  const dataHolder = data.data;
  return (
    <div className="App">
      <h1>Meet the Team</h1>
      <div className="cardContainer">
        {dataHolder.map((user) => (
          <Card
            profPic={user.avatar}
            fName={user.first_name}
            lName={user.last_name}
            email={user.email}
            position={user.position}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
