import { useState, useEffect } from "react";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((res) => res.json())
      .then((data) => {
        console.log("Actors data:", data);  // Log the fetched data
        setActors(data);
      })
      .catch((error) => console.error("Error fetching actors:", error));
  }, []);

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.length === 0 ? (
        <p>No actors found.</p>  // In case the data is empty
      ) : (
        actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))
      )}
    </div>
  );
}

export default Actors;
