export const getEvents = async (page: number) => {
    const events = await (
        await fetch(`https://randomuser.me/api/?pages=${page}&results=6`)
    ).json();
    return events.results;
};