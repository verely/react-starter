const { useState, useEffect } = React

export function AnimalList() {
    return (
        <section className="animal-list">
            <div>Rare Animals</div>
            <table>
                <tr>
                    <th>Animal</th>
                    <th>Count</th>
                    <th>Search link</th>
                </tr>
                <tr>
                    <td>Malayan</td>
                    <td>787</td>
                    <td>Search</td>
                </tr>
                <tr>
                    <td>Mountain Gorilla</td>
                    <td>212</td>
                    <td>Search2</td>
                </tr>
                <tr>
                    <td>Fin Whale</td>
                    <td>28</td>
                    <td>Search3</td>
                </tr>
            </table>
       </section>
    )
}
