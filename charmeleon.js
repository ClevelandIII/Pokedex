let charmeleon = {
    "abilities": [
        {
            "name": "blaze"
        },
        {
            "name": "solar-power"
        }
    ],
    "base_experience": 142,
    "height": 11,
    "id": 5,
    "is_default": true,
    "name": "charmeleon",
    "order": 6,
    "stats": [
        {
            "base_stat": 58,
            "effort": 0,
            "stat": {
                "name": "hp"
            }
        },
        {
            "base_stat": 64,
            "effort": 0,
            "stat": {
                "name": "attack"
            }
        },
        {
            "base_stat": 58,
            "effort": 0,
            "stat": {
                "name": "defense"
            }
        },
        {
            "base_stat": 80,
            "effort": 1,
            "stat": {
                "name": "special-attack"
            }
        },
        {
            "base_stat": 65,
            "effort": 0,
            "stat": {
                "name": "special-defense"
            }
        },
        {
            "base_stat": 80,
            "effort": 1,
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
        }
    ],
    "weight": 190
}
let header = document.getElementById("header");
let section = document.getElementById("section");
let charObj = charmeleon


createHeader(charObj)
createSection(charObj)


function createHeader(charObj){
    const H1 = document.createElement("h1")
    H1.textContent = charObj.name
    header.appendChild(H1);
}


//subheader



function createSection(charObj){
    const CHAR = charObj["char"]
    for(char in CHAR){
        const ARTICLE = document.createElement("article")
        const P1 = document.createElement("p")
        const P2 = document.createElement("p")
        const P3 = document.createElement("p")
        const P4 = document.createElement("p")
        const P5 = document.createElement("p")
        const P6 = document.createElement("p")
        const LIST = document.createElement("ul")


        P1.textContent = `base_experience: ${CHAR[char]["base_experience"]}`
        P2.textContent = `height: ${CHAR[char]["height"]}`
        P3.textContent = `id: ${CHAR[char]["id"]}`
        P4.textContent = `is_default: ${CHAR[char]["is_default"]}`
        P5.textContent = `order: ${CHAR[char]["order"]}`
        P6.textContent = `stats:`

        const STATS = CHAR[char]["stats"]
        for ( stats in STATS){
            const P7 = document.createElement("P7");
            const P8 = document.createElement("P8");
            const P9 = document.createElement("P9");
            const ITEM = document.createElement("li");

            P7.textContent = STATS[stats]["base_stat"]
            P8.textContent = STATS[stats]["effort"]
            P9.textContent = STATS[stats]["stat"]
            ITEM.appendChild(P7)
            ITEM.appendChild(P8)
            ITEM.appendChild(P9)

            LIST.appendChild(ITEM)

        }

        ARTICLE.appendChild(P1)
        ARTICLE.appendChild(P2)
        ARTICLE.appendChild(P3)
        ARTICLE.appendChild(P4)
        ARTICLE.appendChild(P5)
        ARTICLE.appendChild(P6)

        section.appendChild(ARTICLE)
        

    }
}