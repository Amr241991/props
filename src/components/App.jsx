import React from "react";
import contacts from "../contacts";
import Avatar from "./Avatar";
import Cards from "./Cards";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://i.ibb.co/fXzVHGw/212871.jpg" />
      <Cards
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Cards
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
    </div>
  );
}

export default App;
