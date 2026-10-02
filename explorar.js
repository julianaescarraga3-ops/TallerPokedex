async function obtenerPokemon(){
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if (!pokemon.ok) {
    console.log("Algo salió mal. Código:", pokemon.status);
    return;
  }
    const datos = await pokemon.json();
    console.log(datos);

}




obtenerPokemon()

