const { useState, useEffect } = React;

export function AnimalList(props) {
  const { animalData } = props;
  const searchQuery = "https://www.google.com/search?q=";
  return (
    <section className="animal-list">
      <div className="animal-list-container">
        <h1>Rare Animals</h1>
        <table className="animal-table">
          <tbody>
              {animalData.map((animal, index) => (
              <tr key={index}>
                  <td>{animal.type}</td>
                  <td>{animal.count}</td>
                  <td>
                      <a href={searchQuery + animal.type}>search</a>
                  </td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>

    </section>
  );
}
