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