// Mision 1

fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then((data) => {
    const character = data.results.slice(0, 5);
    // console.log(character);
    character.forEach((character) => console.log(`${character.name}, status: ${character.status}, Especie: ${character.species}`));})
.catch((error) => console.error(error))
.finally(() => console.log("Fin"));

// Mision 2

