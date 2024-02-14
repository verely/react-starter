const { useState, useEffect } = React;

export function AnimalList(props) {
  const { animalData } = props;
  const searchQuery = "https://www.google.com/search?q=";
  return (
    <section className="animal-list">
      <div>Rare Animals</div>
      <table>
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
    </section>
  );
}
