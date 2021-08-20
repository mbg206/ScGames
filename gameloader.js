var games = {
    "worldshardest3": {
        "name": "The World's Hardest Game 3",
        "type": "iframe",
        "file": "index.html",
        "credit": "Stephen Critoph"
    },
    "worldshardest": {
        "name": "The World's Hardest Game",
        "type": "iframe",
        "file": "index.html",
        "credit": "Stephen Critoph"
    },
    "worldshardest2": {
        "name": "The World's Hardest Game 2",
        "type": "iframe",
        "file": "index.html",
        "credit": "Stephen Critoph"
    },
    "archeryworldtour": {
        "name": "Archery World Tour",
        "type": "iframe",
        "file": "index.html",
        "credit": "Kiz10 and TapTap (?)"
    },
    "minecraftclassic": {
        "name": "Minecraft Classic",
        "type": "iframe",
        "file": "index.html",
        "credit": "Mojang"
    },
    "pongadvanced": {
        "name": "Pong Advanced",
        "type": "iframe",
        "file": "index.html",
        "credit": "Deccir"
    },
    "blockthepig": {
        "name": "Block",
        "type": "iframe",
        "file": "index.html",
        "credit": "Suntemple"
    },
    "slope": {
        "name": "Slope",
        "type": "iframe",
        "file": "index.html",
        "credit": "Rob Kay"
    },
    "2048": {
        "name": "2048",
        "type": "iframe",
        "file": "index.html",
        "credit": "Gabriele Cirulli"
    },
    "bcubed": {
        "name": "B-Cubed",
        "type": "iframe",
        "file": "index.html",
        "credit": "Coolmath"
    },
    "circloo": {
        "name": "CircloO",
        "type": "iframe",
        "file": "index.html",
        "credit": "Florian van Strien"
    },
    "circloo2": {
        "name": "CircloO 2",
        "type": "iframe",
        "file": "index.html",
        "credit": "Florian van Strien"
    },
    "thereisnogame": {
        "name": "There Is No Game",
        "type": "iframe",
        "file": "index.html",
        "credit": "KaMiZoTo"
    },
    "jellytruck": {
        "name": "Jelly Truck",
        "type": "iframe",
        "file": "index.html",
        "credit": "Kiz10 (?)"
    },
    "cardrawinggame": {
        "name": "Car Drawing Game",
        "type": "iframe",
        "file": "index.html",
        "credit": "Modular Mindset"
    },
    "bloxorz": {
        "name": "Bloxorz",
        "type": "iframe",
        "file": "index.html",
        "credit": "Damien Clarke"
    },
    "candyjump": {
        "name": "Candy Jump",
        "type": "iframe",
        "file": "index.html",
        "credit": "Unknown"
    },
    "madalinstuntcars2": {
        "name": "Madalin Stunt Cars 2",
        "type": "iframe",
        "file": "index.html",
        "credit": "Madalin Games"
    },
    "cannonbasketball": {
        "name": "Cannon Basketball",
        "type": "iframe",
        "file": "index.html",
        "credit": "Oleg Kuzyk"
    },
    "1v1lol": {
        "name": "1v1.lol",
        "type": "iframe",
        "file": "index.html",
        "credit": "Lior Alterman"
    }
};

function loadGame() {
    const urlParams = new URLSearchParams(window.location.search);
    let gameId = urlParams.get("game");
    if (gameId == undefined || games[gameId] == undefined) {
        window.location.href = "index.html";
        return;
    }

    let gameArea = document.getElementById('mainArea');

    if (games[gameId].type == "iframe") {
        let game = document.createElement('iframe');
        game.id = "game";
        game.src = "games/" + gameId + "/" + games[gameId].file;
        gameArea.appendChild(game);


        document.title = games[gameId].name;
    }

    let credit = document.createElement('span');
    credit.innerHTML = "Credit: " + games[gameId].credit;
    credit.id = "credits";
    gameArea.appendChild(credit);
}

loadGame();