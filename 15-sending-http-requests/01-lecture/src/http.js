export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json();
    // 200, 300 => ok
    // 400, 500 => not ok
    if (!response.ok) {
        throw new Error('Failed to fetch places');
    }

    return resData.places;
}