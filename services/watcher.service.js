import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'watcherDB'

export const watcherService = {
    addWatcher,
    getWatchers,
    save,
    remove,
}
// For Debug (easy access from console):
// window.cs = watcherService

function _createWatcher(fullname) {
    return {
        id: utilService.makeId(),
        fullname,
        movies: []
    }
}

async function addWatcher(fullname) {
    const watcher = _createWatcher(fullname)
    const addedWatcher = await storageService.post(STORAGE_KEY, watcher)
    return addedWatcher
}

async function getWatchers() {
    let watchers = await storageService.query(STORAGE_KEY)
    return watchers
}

function remove(watcherId) {
    return storageService.remove(STORAGE_KEY, watcherId)
}

function save(watcher) {
    if (watcher.id) {
        return storageService.put(STORAGE_KEY, watcher)
    } else {
        return storageService.post(STORAGE_KEY, watcher)
    }
}
