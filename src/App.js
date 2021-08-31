import "./css/layout.css";

import data from "./data.json";
import Card from "./Components/Card";

function App() {
  const dataHolder = data.data;
  return (
    <div className="App">
      <section className="contentContainer">
        {dataHolder.map((user) => (
          <Card
            avatar={user.avatar}
            fName={user.first_name}
            lName={user.last_name}
            email={user.email}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
