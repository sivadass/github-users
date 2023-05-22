const UsersList = ({ data }) => {
  if (!data) {
    return <p>Sorry, no results found!</p>;
  }
  return (
    <ul className="users-list">
      {data?.map((item) => {
        return (
          <li key={item.id}>
            <a href={item.html_url}>
              <div className="user-item">
                <img src={item.avatar_url} alt={item.login} />
                <h3>{item.login}</h3>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default UsersList;
