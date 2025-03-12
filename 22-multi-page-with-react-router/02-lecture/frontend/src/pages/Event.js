import {useParams} from "react-router";

export default function EventPage() {
    const params = useParams();
    return (
        <>
            <h1>EventsPage</h1>
            <p>{params.id}</p>
        </>
    );
}