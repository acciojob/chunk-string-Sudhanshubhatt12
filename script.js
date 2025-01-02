function stringChop(str, size) {
    // If the string is null or empty, return an empty array
    if (!str) return [];

    const chunks = [];

    // Loop through the string and slice it into chunks of the specified size
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }

    return chunks;
}

// Do not change the code below
 const str = prompt("Enter String.");
 const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

