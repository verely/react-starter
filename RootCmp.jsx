
import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./cmps/Home.jsx"
import { AnimalList } from "./cmps/AnimalList.jsx"
import { SeasonClock } from "./cmps/SeasonClock.jsx"
import { CountDown } from "./cmps/CountDown.jsx"
import { Watcher } from "./cmps/Watcher.jsx"
import { MouseMonitor } from "./cmps/MouseMonitor.jsx"

const animalData = [
    { type: 'Malayan Tiger', count: 787 },
    { type: 'Mountain Gorilla', count: 212 },
    { type: 'Fin Whale', count: 28 },
];

export function RootCmp() {
    return (
        <section className="app main-layout">
            <AppHeader />
            <main>
                <main>
                    <AnimalList animalData={animalData} />
                    <SeasonClock/>
                    <CountDown startFrom={5} onDone={()=>{
                        console.log('Done!');
                    }}/>
                    <Watcher/>
                    <MouseMonitor/>
                </main>
            </main>
        </section>
    )
}
