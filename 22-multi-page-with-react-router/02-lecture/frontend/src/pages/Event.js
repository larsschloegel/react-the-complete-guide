import {useLoaderData} from "react-router";
import EventItem from "../components/EventItem";

export default function EventPage() {
    const data = useLoaderData();
    return (
        <EventItem event={data.event}/>
    );
}

export async function loader({request, params}) {
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/' + id);
    if (!response.ok) {
        throw Response.json({message: 'Could not fetch details for selected event'}, {status: 500});
    } else {
        return response;
    }
}