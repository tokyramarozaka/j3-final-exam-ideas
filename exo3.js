export function getMaxVenue(n, input) {
    // Create an array to hold all events
    let events = [];

    // Process each participant's times
    for (let i = 0; i < n; i++) {
        const [arrival, departure] = input[i].split(' ').map(Number);
        events.push([arrival, 1]);    // +1 for arrival on the current count
        events.push([departure, -1]); // -1 for departure on the current count 
    }

    // Sort events
    events.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });

    let currentCount = 0;
    let maxCount = 0;

    // Sweep through the events
    for (let event of events) {
        currentCount += event[1]; // Adds 1 or -1 depending on the event type
        if (currentCount > maxCount) {
            maxCount = currentCount;
        }
    }

    return maxCount;
}
