import EventsList from '../components/EventsList';
import {useLoaderData } from "react-router";

function EventsPage() {
    const data = useLoaderData();
/*    if (data.isError) {
        return <p>{data.message}</p>
    }*/

    const events = data.events;
    return (
        <>
            <EventsList events={events}/>
        </>
    );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        //return {isError: true, message: 'Unable to load events.'};
        //throw new Response(JSON.stringify({message: 'Unable to load
        // events.'}), {status: 500});
        return Response.json({message: 'Unable to load events.'}, {status: 200});
    } else {
        return response;
    }
}