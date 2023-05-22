import { useState } from "react";
import axios from "axios";
import SearchBox from "./components/search-box";
import UsersList from "./components/users-list";

function App() {
  const [usersData, setUsersData] = useState([]);

  const handleSearchQuery = (query) => {
    const url = `https://api.github.com/search/users?${query}`;
    return axios
      .get(url)
      .then((res) => {
        console.log("res", res);
        setUsersData(res?.data?.items || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app">
      <h1>Github Users</h1>
      <SearchBox onSubmit={(query) => handleSearchQuery(query)} />
      <UsersList data={usersData} />
    </div>
  );
}

export default App;
