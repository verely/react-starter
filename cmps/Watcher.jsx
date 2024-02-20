const {useState, useEffect} = React;

import { WatcherPreview } from "./WatcherPreview.jsx"
import  { watcherService } from "../services/watcher.service.js"

export function Watcher() {
    // const [watchers, setWatchers] = useState([
    //     {id: 'w101', fullname: 'n101', movies: ['Rambo','Rocky']},
    //     {id: 'w102', fullname: 'n102', movies: ['Rambo2','Rocky2']},
    //     {id: 'w103', fullname: 'n103', movies: ['Rambo3','Rocky3']},
    // ])
    const [watchers, setWatchers] = useState([])
    const [selectedWatcher, setSelectedWatcher] = useState(null)

    useEffect(()=>{
        watcherService.getWatchers()
        .then(setWatchers)
    },[])

    async function renderWatchers() {
       const watchers = await watcherService.getWatchers();
       setWatchers(watchers)
       console.log('renderWatchers')
    }

    async function onAddWatcher() {
        try {
            const fullname = prompt('full name?')
            if (fullname && fullname.length>1){
                const watcher = await watcherService.addWatcher(fullname)
                renderWatchers()
            }
        } catch (err) {
            console.log('Had issues with', err)
        }
    }

    return (
        <div className="watcher-app">
            <h2>Watcher App</h2>
            <button onClick={onAddWatcher}>Add watcher</button>
            <div className="watcher-preview-container">
                {watchers.map((watcher, index) => (
                                <WatcherPreview key={index} watcher={watcher}/>
                            ))}
            </div>
        </div>
    );
}
