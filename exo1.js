export function evaluatePrice(input) {
    const [ticketPrice, groupPrice, count] = input;

    // Calculate the total price for individual tickets
    const individualTotal = count * ticketPrice;

    // Calculate the rounded-up group size for group ticket pricing
    const groupCount = Math.ceil(count / 10);
    const groupTotal = groupCount * groupPrice;

    // Return the cheapest option amongst the two
    if (groupTotal < individualTotal) {
        return groupTotal;
    } else {
        return individualTotal;
    }
}