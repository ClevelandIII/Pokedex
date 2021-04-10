let charizard = {
    "abilities": [
        {
            "name": "blaze"
        },
        {
            "name": "solar-power"
        }
    ],
    "base_experience": 240,
    "height": 17,
    "id": 6,
    "is_default": true,
    "name": "charizard",
    "order": 7,
    "stats": [
        {
            "base_stat": 78,
            "effort": 0,
            "stat": {
                "name": "hp"
            }
        },
        {
            "base_stat": 84,
            "effort": 0,
            "stat": {
                "name": "attack"
            }
        },
        {
            "base_stat": 78,
            "effort": 0,
            "stat": {
                "name": "defense"
            }
        },
        {
            "base_stat": 109,
            "effort": 3,
            "stat": {
                "name": "special-attack"
            }
        },
        {
            "base_stat": 85,
            "effort": 0,
            "stat": {
                "name": "special-defense"
            }
        },
        {
            "base_stat": 100,
            "effort": 0,
            "stat": {
                "name": "speed"
            }
        }
    ],
    "types": [
        {
            "slot": 1,
            "type": {
                "name": "fire"
            }
        },
        {
            "slot": 2,
            "type": {
                "name": "flying"
            }
        }
    ],
    "weight": 905
}

let header = document.getElementById("header");
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");

let superObj = charizard;

createHeader(superObj);
createSection1(superObj);
createSection2(superObj);
createSection3(superObj);

function createHeader(obj) {
    const H1 = document.createElement("h1");
    H1.textContent = obj.name
    header.appendChild(H1);

    const PARA = document.createElement("p")
    PARA.textContent = `base exprience: ${obj["base_experience"]} || height: ${obj["height"]} || id: ${obj["id"]} is_default ${obj["is_default"]} order: ${obj["order"]} weight: ${obj["weight"]}`
    header.appendChild(PARA);
}

function createSection1(obj) {
    const ABILITIES = obj["abilities"];

    for (ability in ABILITIES) {
        const ARTICLE = document.createElement("article")
        const H2 = document.createElement("h2")
        const P1 = document.createElement("p")
        const LIST = document.createElement("ul")

        H2.textContent = ABILITIES[ability]["abilities"];
        P1.textContent = `abilities: ${ABILITIES[ability]["name"]}`

        ARTICLE.appendChild(H2)
        ARTICLE.appendChild(P1)
        ARTICLE.appendChild(LIST)

        section1.appendChild(ARTICLE)
    }
}

function createSection2(obj) {
    const STATS = obj["stats"];

    for (stat in STATS) {
        const ARTICLE = document.createElement("article")
        const P1 = document.createElement("p")
        const P2 = document.createElement("p")
        const P3 = document.createElement("p")
        const LIST = document.createElement("ul")

        P1.textContent = `base stat: ${STATS[stat]["base_stat"]}`
        P2.textContent = `effort: ${STATS[stat]["effort"]}`
        P3.textContent = `stat:`

        const ESTATS = STATS[stat]["stat"];
        for (estat in ESTATS) {
            const ITEM = document.createElement("li");
            ITEM.textContent = `name: ${ESTATS[estat]["name"]}`
            LIST.appendChild(ITEM);
        }

        ARTICLE.appendChild(P1)
        ARTICLE.appendChild(P2)
        ARTICLE.appendChild(P3)
        ARTICLE.appendChild(LIST)

        section2.appendChild(ARTICLE)
    }
}

function createSection3(obj) {
    const TYPES = obj["types"];

    for (type in TYPES) {
        const ARTICLE = document.createElement("article")
        const P1 = document.createElement("p")
        const P2 = document.createElement("p")
        const P3 = document.createElement("p")
        const LIST = document.createElement("ul")

        P1.textContent = `slot: ${TYPES[type]["slot"]}`
        P2.textContent = `type: ${TYPES[type]["type"]}`
        P3.textContent = `name:`

        const NAME = TYPES[type]["stat"];
        for (type in NAME) {
            const ITEM = document.createElement("li");
            ITEM.textContent = `name: ${NAME[type]["name"]}`
            LIST.appendChild(ITEM);
        }

        ARTICLE.appendChild(P1)
        ARTICLE.appendChild(P2)
        ARTICLE.appendChild(P3)
        ARTICLE.appendChild(LIST)

        section3.appendChild(ARTICLE)
    }
}