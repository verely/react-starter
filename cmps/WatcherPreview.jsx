export function WatcherPreview({watcher}){
    const onWatcherPreview = () => {
        console.log('onWatcherPreview'); //to do: show modal
      };
    const onWatcherRemove = () => {
        console.log('onWatcherRemove'); //to do: show modal
      };
    return (
        <div className="watcher-preview">
            <img src="" alt="watcher profile picture" />
            <h2>{watcher.fullname}</h2>
            <hr className="hr-watcher-preview"/>
            <button onClick={onWatcherRemove}>X</button>
            <button onClick={onWatcherPreview}>Select</button>
        </div>
    );
}
