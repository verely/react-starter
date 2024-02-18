export function AnimalList({animalData}) {
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
                      <a target="_blank" href={searchQuery + animal.type}>search</a>
                  </td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
