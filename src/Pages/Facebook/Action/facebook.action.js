export const getAnimalAdaptData = () => {
    return fetch('https://api.publicapis.org/entries')
        .then((response) => response.json())
};