const {useState, useEffect} = React;

import { WatcherPreview } from "./WatcherPreview.jsx"
import  { watcherService } from "../services/watcher.service.js"

export function Watcher() {
    const [watchers, setWatchers] = useState([])
    const [selectedWatcher, setSelectedWatcher] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editableName, setEditableName] = useState('');

    useEffect(()=>{
        const fetchWatchers = async () => {
            try {
                const watchers = await watcherService.getWatchers()
                setWatchers(watchers)
            } catch (err) {
                console.error('Failed to fetch watchers:', err)
            }
        }
        fetchWatchers()
    },[])


    async function onWatcherRename(newName) {
        if (selectedWatcher) {
            const updatedWatcher = { ...selectedWatcher, fullname: newName };
            try {
                await watcherService.save(updatedWatcher)
                renderWatchers();
                setIsModalOpen(false);
            } catch (err) {
                console.log('Had issues with', err);
            }
        }
    }

    function onWatcherSelect(watcher) {
        setSelectedWatcher(watcher);
        setIsModalOpen(true);
    }

    function onModalClose() {
        setIsModalOpen(false);
        setSelectedWatcher(null);
    }

    async function renderWatchers() {
       const watchers = await watcherService.getWatchers();
       setWatchers(watchers)
       console.log('renderWatchers')
    }

    async function onAddWatcher() {
        try {
            const fullname = prompt('full name?')
            if (fullname && fullname.length>1){
                await watcherService.addWatcher(fullname)
                renderWatchers()
            }
        } catch (err) {
            console.log('Had issues with', err)
        }
    }

    async function onWatcherRemove(watcherId) {
        try {
            await watcherService.remove(watcherId);
            renderWatchers();
        } catch (err) {
            console.log('Had issues with', err);
        }
    }

    return (
        <div className="watcher-app">
            <h2>Watcher App</h2>
            <button onClick={onAddWatcher}>Add watcher</button>
            <div className="watcher-preview-container">
                {watchers.map((watcher, index) => (
                                <WatcherPreview
                                    key={index}
                                    watcher={watcher}
                                    onWatcherSelect={() => onWatcherSelect(watcher)}
                                    onWatcherRemove={() => onWatcherRemove(watcher.id)}
                                />
                            ))}
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{selectedWatcher && selectedWatcher.fullname}</h2>
                        <input
                                type="text"
                                value={editableName}
                                onChange={e => setEditableName(e.target.value)}
                                placeholder="Enter new name"
                            />
                        <ul>
                            {selectedWatcher && selectedWatcher.movies.map((movie, index) => (
                                <li key={index}>{movie}</li>
                            ))}
                        </ul>
                        <button onClick={() => onWatcherRename(editableName)}>Rename</button>
                        <button onClick={onModalClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
