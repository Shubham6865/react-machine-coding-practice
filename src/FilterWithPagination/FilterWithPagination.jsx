import React, { useState, useEffect } from "react";

const FilterWithPagination = () => {
  const [search, setSearch] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const result = await response.json();

        setUsersData(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(usersData);
  }, []);

  // filter logic 

  // const filterUsers = usersData;
  const filterUsers = usersData.filter((user) => {

    const matchData = user.name.toLowerCase().includes(search.toLowerCase()) || user.username.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())

    return matchData;
  })





  //Pagination

  const pagePerPage = 10;
  const totalPage = Math.ceil(filterUsers.length / pagePerPage);

  let currentIndex = (currentPage - 1) * pagePerPage;
  const displayData = filterUsers.slice(currentIndex, currentIndex + pagePerPage);
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  }
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  }
  return (
    <>
      <h1>Fetch and Display Data</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            displayData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div>

        <button onClick={handlePrev} disabled={currentPage <= 1}>Previous</button>
        {currentPage}
        <button onClick={handleNext} disabled={currentPage >= totalPage}>Next</button>
      </div>
    </>
  );
};
export default FilterWithPagination;
