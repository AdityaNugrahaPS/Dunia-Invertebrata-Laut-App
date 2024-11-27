import speciesData from "./speciesData";

// List of words to italicize
const wordsToItalicize = [
    'Fungia sp.', 'Holothuria atra', 'Culcita sp.', 'Spongia sp.',
    'Tridacna maxima', 'Macrocypraea cervinetta', 'Pitar tumens',
    'septa', 'pali', 'koralit', 'ambulaktral', 'podia', 'ostium',
    'oskulum', 'choanocytes', 'leucon', 'oral', 'aboral', 'biofilter',
    'eutrofikasi', 'substrat', 'demersal', 'Echinodermata', 'Porifera',
    'Bivalvia', 'Veneridae', 'filum'
];

// Function to italicize specific words
function italicizeWords(text) {
    // Create a case-insensitive regex pattern for each word
    const regex = new RegExp(
        `\\b(${wordsToItalicize.map(word =>
            word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // escape special regex characters
        ).join('|')})\\b`,
        'gi' // case-insensitive global match
    );

    // Replace matched words with italicized version
    return text.replace(regex, match => `<i>${match}</i>`);
}

// Transform the speciesData
const formattedSpeciesData = speciesData.map(species => ({
    ...species,
    description: italicizeWords(species.description)
}));

export default formattedSpeciesData;
