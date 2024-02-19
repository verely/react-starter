const {useState, useEffect} = React;

import { WatcherPreview } from "./WatcherPreview.jsx"

export function Watcher() {
    const [watchers, setWatchers] = useState([
        {id: 'w101', fullname: 'n101', movies: ['Rambo','Rocky']},
        {id: 'w102', fullname: 'n102', movies: ['Rambo2','Rocky2']},
        {id: 'w103', fullname: 'n103', movies: ['Rambo3','Rocky3']},
    ])
    const [selectedWatcher, setSelectedWatcher] = useState(null)

    return (
        <div className="watcher-app">
            <h2>Watcher App</h2>
            <button>Add watcher</button>
            <div className="watcher-preview-container">
                {watchers.map((watcher, index) => (
                                <WatcherPreview key={index} watcher={watcher}/>
                            ))}
            </div>
        </div>
    );
}
