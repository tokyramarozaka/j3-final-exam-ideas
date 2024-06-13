export function reorganize(input) {
    if (input.length === 0) return "";

    let seen = {};
    let result = "";

    for (let i = 0; i < input.length; i++) {
        let lowerChar = input[i].toLowerCase();

        if (!seen[lowerChar]) {
            seen[lowerChar] = true;
            result += input[i];
            result += addOtherOccurences(input[i], input, i);
        }
    }

    return result;
}

function addOtherOccurences(char, string, indexException) {
    let restOfTheString = string.slice(indexException + 1);

    if (!restOfTheString) return "";

    return restOfTheString
        .split("")
        .filter(letter => letter.toLowerCase() === char.toLowerCase())
        .join("");
}