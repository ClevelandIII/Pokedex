let charmander = {
    "abilities": [
        {
            "name": "blaze"
        },
        {
            "name": "solar-power"
        }
    ],
    "base_experience": 62,
    "height": 6,
    "id": 4,
    "is_default": true,
    "name": "charmander",
    "order": 5,
    "stats": [
        {
            "base_stat": 39,
            "effort": 0,
            "stat": {
                "name": "hp"
            }
        },
        {
            "base_stat": 52,
            "effort": 0,
            "stat": {
                "name": "attack"
            }
        },
        {
            "base_stat": 43,
            "effort": 0,
            "stat": {
                "name": "defense"
            }
        },
        {
            "base_stat": 60,
            "effort": 0,
            "stat": {
                "name": "special-attack"
            }
        },
        {
            "base_stat": 50,
            "effort": 0,
            "stat": {
                "name": "special-defense"
            }
        },
        {
            "base_stat": 65,
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
    "weight": 85
}

let header = document.getElementById("header");
let section = document.getElementById("section");

let superObj = JSON.parse(charmander);

createHeader(superObj);
createSection(superObj);

function createHeader(obj) {
    const H1 = document.createElement("h1");
    H1.textContent = obj.name
    header.appendChild(H1);

    const PARA = document.createElement("p")
    PARA.textContent = `base Exprience: ${obj["base_experience"]} || height: ${obj["height"]} || id: ${obj["id"]} is_default ${obj["is_default"]} ordeer: ${obj["order"]}`
    header.appendChild(PARA);
}