// import "./App.css";
import Card from "./components/Card";
import users from "./data.json";

function App() {
  return (
    <div>
      {users.map((user) => {
        return (
          <Card
            key={user.id}
            name={user.name}
            // address={user.address}
            email={user.email}
            phone={user.phone}
          />
        );
      })}
      <Card
        key={777}
        name="Serhii"
        phone={777}
        email="qwerty@qwerty.com"
        // address="motel"
      />
    </div>
  );
}

export default App;

// function App() {
//   console.log("users: >>", users);
//   return (
//     <div>
//       <Card
//         name="Alex"
//         phone={555555555}
//         email="qwery@gmail.com"
//         qwery="qwery"
//       />
//       <Card
//         name="Serhii"
//         phone={111111111}
//         email="qwertyqwerty@gmail.com"
//         qwery="qwertyqwerty"
//       />
//     </div>
//   );
// }
