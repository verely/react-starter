export function WatcherPreview({watcher, onWatcherSelect, onWatcherRemove}){
    return (
        <div className="watcher-preview">
            <img src="" alt="watcher profile picture" />
            <h2>{watcher.fullname}</h2>
            <hr className="hr-watcher-preview"/>
            <button onClick={onWatcherRemove}>X</button>
            <button onClick={onWatcherSelect}>Select</button>
        </div>
    );
}
