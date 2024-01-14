function changePage(accueil) {
    const pages = document.getElementsByClassName("page");
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";

    }
    
    const selectedPage = document.getElementById(accueil);
    if (selectedPage) {
        selectedPage.style.display = "flex";
    }

    const onglets = document.getElementsByClassName("onglet");

for (let i = 0; i < onglets.length; i++) {
    onglets[i].addEventListener('click', () => {
        for (let j = 0; j < onglets.length; j++) {
            onglets[j].classList.remove('active');
        }
    
        onglets[i].classList.add('active');
    });
}

};

fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach((pokemon) => {
            fetch(pokemon.url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    const detailsDiv = document.createElement("div");
                    detailsDiv.innerHTML = `
                    <h3>${data.name}</h3>
                    <img src="${data.sprites.front_default}" alt="${data.name}">
                    `;
                    document.querySelector("#pokemons").appendChild(detailsDiv);
                })
        });
    });
    