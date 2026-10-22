import { useState } from "react";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contact/Contacts";
const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Contacts contacts={getContacts} loading={loading} />
    </div>
  );
};

export default App;
