var games = [
    {
        "name": "1v1.lol",
        "id": "1v1lol"
    },
    {
        "name": "2048",
        "id": "2048"
    },
    {
        "name": "Archery World Tour",
        "id": "archeryworldtour"
    },
    {
        "name": "B-Cubed",
        "id": "bcubed"
    },
    {
        "name": "Bloxorz",
        "id": "bloxorz"
    },
    {
        "name": "Candy Jump",
        "id": "candyjump"
    },
    {
        "name": "Cannon Basketball",
        "id": "cannonbasketball"
    },
    {
        "name": "Car Drawing Game",
        "id": "cardrawinggame"
    },
    {
        "name": "CircloO",
        "id": "circloo"
    },
    {
        "name": "CircloO 2",
        "id": "circloo2"
    },
    {
        "name": "Jelly Truck",
        "id": "jellytruck"
    },
    {
        "name": "Madalin Stunt Cars 2",
        "id": "madalinstuntcars2"
    },
    {
        "name": "Minecraft Classic",
        "id": "minecraftclassic"
    },
    {
        "name": "Pong Advanced",
        "id": "pongadvanced"
    },
    {
        "name": "Slope",
        "id": "slope"
    },
    {
        "name": "There Is No Game",
        "id": "thereisnogame"
    },
    {
        "name": "Worlds Hardest Game ",
        "id": "worldshardest"
    },
    {
        "name": "Worlds Hardest Game 2",
        "id": "worldshardest2"
    },
    {
        "name": "Worlds Hardest Game 3",
        "id": "worldshardest3"
    }
];

function populateList() {
    let sidebar = document.getElementById('sidebar');
    for (var i = 0; i < games.length; i++) {
        let option = document.createElement("a");
        option.id = "gameButton";
        option.innerHTML = games[i].name;
        option.href = "player.html?game=" + games[i].id;
        sidebar.appendChild(option);
    }
}

document.getElementById('logo').onclick = function() {
    window.location.href = "index.html";
};

populateList();