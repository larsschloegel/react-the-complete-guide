import {Link} from "react-router";

const EVENTS = [
    {id: 'e1', name: 'Event 1'},
    {id: 'e2', name: 'Event 2'},
    {id: 'e3', name: 'Event 3'},
]
export default function EventsPage() {
    return (
        <>
            <h1>EventsPage</h1>
            <ul>
                {EVENTS.map((item) => (
                    <li key={item.id}><Link
                        to={`/events/${item.id}`}>{item.name}</Link></li>
                ))}
            </ul>
        </>
    );
}