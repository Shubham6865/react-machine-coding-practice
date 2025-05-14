import React, { useState, useEffect } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Fetch results when debounced term changes
  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedTerm) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/search/users?q=${debouncedTerm}`);
        const data = await response.json();
        console.log(data)
        setResults(data.items || []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedTerm]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>GitHub User Search (Debounced)</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
      {loading && <p>Loading...</p>}
      <ul>
        {results.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} width="30" /> {user.login}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
