import { useState, useEffect } from "react";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => res.json())
      .then((data) => {
        console.log("Directors data:", data);  // Log the fetched data
        setDirectors(data);
      })
      .catch((error) => console.error("Error fetching directors:", error));
  }, []);

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.length === 0 ? (
        <p>No directors found.</p>  // In case the data is empty
      ) : (
        directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))
      )}
    </div>
  );
}

export default Directors;
