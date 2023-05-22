import React from "react";

const SearchBox = ({ onSubmit }) => {
  const [technology, setTechnology] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleSubmit = () => {
    const urlParams = `type:user+language: ${technology} location:${location}`;
    // const queryString = `q=${encodeURIComponent('GitHub Octocat in:readme user:defunkt type:user+language: ')}`;
    const queryString = "q=" + encodeURIComponent(urlParams);
    onSubmit(queryString);
  };
  return (
    <div className="search-box">
      <input
        name="technology"
        type="text"
        placeholder="Enter technology"
        onChange={(e) => setTechnology(e.target.value)}
      />
      <input
        name="location"
        type="text"
        placeholder="Enter location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" onClick={() => handleSubmit()}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
