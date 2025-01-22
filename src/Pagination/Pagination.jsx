import { useState } from "react";

const Pagination = () => {
  const names = [
    "Jennifer Taylor", "Linda Harris", "Elizabeth Martinez", "Patricia White",
    "Linda Harris", "Michael Moore", "Barbara Taylor", "Joseph White",
    "Elizabeth White", "Robert Miller", "William Garcia", "Sarah Moore",
    "Michael Jones", "Jennifer Jones", "Mary Martin", "Susan Harris",
    "James Thompson", "Barbara Martinez", "David Taylor", "Richard Anderson",
    "Charles Martinez", "William Miller", "David Wilson", "Barbara Robinson",
    "Joseph Smith", "Joseph Garcia", "Patricia Brown", "Richard Harris",
    "Richard Thomas", "Joseph Wilson", "John Williams", "Jessica Johnson",
    "Thomas Taylor", "Mary Brown", "Sarah Thomas", "Thomas Wilson",
    "John Davis", "Thomas Brown", "Patricia Robinson", "Susan Robinson",
    "Robert Moore", "Michael Davis", "James Robinson", "Sarah Robinson",
    "Susan Moore", "Mary Robinson", "John Harris", "Robert Martin",
    "Charles Harris", "Joseph Jones", "Shubham"
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const ItemsPerPage = 10;

  const StartIndex = (currentPage - 1) * ItemsPerPage;
  const CurrentItems = names.slice(StartIndex, StartIndex + ItemsPerPage);
  const totalPage = Math.ceil(names.length / ItemsPerPage);
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <>

      <h1>Paginatiomn</h1>
      <ul style={{ height: '50vh' }}>
        {
          CurrentItems.map((items, index) => (
            <li key={index}>{items}</li>
          ))
        }
      </ul>
      <div style={{ display: "flex", gap: '20px', }}>
        <button onClick={() => handlePrev()} disabled={currentPage === 1}>Prev</button>
        <span>{currentPage}</span>
        <button onClick={() => handleNext()} disabled={currentPage === totalPage}>Next</button>
      </div>

    </>
  )
}

export default Pagination;