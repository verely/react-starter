import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'watcherDB'
//_createCars()

export const watcherService = {
    query,
    get,
    remove,
    addWatcher,
    getWatchers,
}
// For Debug (easy access from console):
// window.cs = watcherService

function query(filterBy = {}) {
    return storageService.query(STORAGE_KEY)
        .then(watchers => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                watchers = watchers.filter(car => regExp.test(car.vendor))
            }

            return cars
        })
}

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

function get(watcherId) {
    return storageService.get(STORAGE_KEY, watcherId)
        .then(watcher => {
            watcher = _setNextPrevCarId(watcher)
            return watcher
        })
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
