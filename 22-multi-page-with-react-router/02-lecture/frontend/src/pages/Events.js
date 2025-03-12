import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router";

function EventsPage() {
    const data = useLoaderData();
    return (
        <>
           <EventsList events={data} />
        </>
    );
}

export default EventsPage;

export async function eventsLoader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {

    } else {
        const resData = await response.json();
        return resData.events;
    }
}