let path = window.location.pathname
console.log(path)
let page;
path = path.split("/")
console.log(path)
for (i in path) {
    page = path[path.length - 1]
}
let loop = 1;
let loop2 = 1;
let loop3 = 1;

//////////////////////////////////////////////////////////////////////CHARMANDER

if (page == "charmander.html") {
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

    const { name: n, stats: newS, abilities: abl, types: t, base_experience: b, height: h, id, is_default: is, order, weight} = charmander;

    let header = document.getElementById("headerCMD");
    let section1 = document.getElementById("section1CMD");
    let section2 = document.getElementById("section2CMD");
    let section3 = document.getElementById("section3CMD");

    let superObj = charmander;

    createHeader(superObj);
    createSection1(superObj);
    createSection2(superObj);
    createSection3(superObj);

    function createHeader() {
        const H1 = document.createElement("h1");
        H1.textContent = n;
        header.appendChild(H1);
        const PARA = document.createElement("p")
        PARA.textContent = JSON.stringify(`Base Experience: ${b}, Height: ${h}, Id: ${id}, Is Default: ${is}, Order ${order}, Weight ${weight}`)
        header.appendChild(PARA);
    }

    function createSection1(obj) {
        const ABILITIES = obj["abilities"];

        for (ability in ABILITIES) {
            const ARTICLE = document.createElement("article")
            const P1 = document.createElement("p")
            const P2 = document.createElement("p")

            P2.textContent = `ABILITY ${loop}`
            loop++;

            const ITEM = document.createElement("p");
            ITEM.textContent = `name: ${ABILITIES[ability]["name"]}`
            P2.appendChild(ITEM);

            ARTICLE.appendChild(P1)
            ARTICLE.appendChild(P2)
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
            const BR = document.createElement("br")

            P1.textContent = `Stat ${loop2}`
            P2.textContent = `Base Stat: ${STATS[stat]["base_stat"]}, Effort: ${STATS[stat]["effort"]}`
            loop2++;

            const ESTATS = STATS[stat]["stat"];

            const ITEM = document.createElement("p");
            ITEM.textContent = `Stat: ${ESTATS["name"]}`
            P3.appendChild(ITEM);

            ARTICLE.appendChild(P1)
            ARTICLE.appendChild(P2)
            ARTICLE.appendChild(P3)
            ARTICLE.appendChild(BR)

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

            P1.textContent = `Type 1`
            P2.textContent = `slot: ${TYPES[type]["slot"]}`

            const NAME = TYPES[type]["type"];

            const ITEM = document.createElement("p");
            ITEM.textContent = `type: ${NAME["name"]}`
            P3.appendChild(ITEM);

            ARTICLE.appendChild(P1)
            ARTICLE.appendChild(P2)
            ARTICLE.appendChild(P3)

            section3.appendChild(ARTICLE)
        }
    }
}

//////////////////////////////////////////////////////////////////////CHARMELEON

if (page == "charmeleon.html") {
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

    const { name: n, stats: newS, abilities: abl, types: t, base_experience: b, height: h, id, is_default: is, order, weight} = charmeleon;

    let header = document.getElementById("headerCMO");
    let section1 = document.getElementById("section1CMO");
    let section2 = document.getElementById("section2CMO");
    let section3 = document.getElementById("section3CMO");

    let superObj = charmeleon;

    createHeader(superObj);
    createSection1(superObj);
    createSection2(superObj);
    createSection3(superObj);

    function createHeader() {
        const H1 = document.createElement("h1");
        H1.textContent = n;
        header.appendChild(H1);
        const PARA = document.createElement("p")
        PARA.textContent = JSON.stringify(`Base Experience: ${b}, Height: ${h}, Id: ${id}, Is Default: ${is}, Order ${order}, Weight ${weight}`)
        header.appendChild(PARA);
    }

    function createSection1(obj) {
        const ABILITIES = obj["abilities"];

        for (ability in ABILITIES) {
            const ARTICLE = document.createElement("article")
            const P1 = document.createElement("p")
            const P2 = document.createElement("p")

            P2.textContent = `ABILITY ${loop}`
            loop++;

            const ITEM = document.createElement("p");
            ITEM.textContent = `name: ${ABILITIES[ability]["name"]}`
            P2.appendChild(ITEM);

            ARTICLE.appendChild(P1)
            ARTICLE.appendChild(P2)
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
            const BR = document.createElement("br")

            P1.textContent = `Stat ${loop2}`
            P2.textContent = `Base Stat: ${STATS[stat]["base_stat"]}, Effort: ${STATS[stat]["effort"]}`
            loop2++;

            const ESTATS = STATS[stat]["stat"];

            const ITEM = document.createElement("p");
            ITEM.textContent = `Stat: ${ESTATS["name"]}`
            P3.appendChild(ITEM);

            ARTICLE.appendChild(P1)
            ARTICLE.appendChild(P2)
            ARTICLE.appendChild(P3)
            ARTICLE.appendChild(BR)

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

            P1.textContent = `Type 1`
            P2.textContent = `slot: ${TYPES[type]["slot"]}`

            const NAME = TYPES[type]["type"];

            const ITEM = document.createElement("p");
            ITEM.textContent = `type: ${NAME["name"]}`
            P3.appendChild(ITEM);

            ARTICLE.appendChild(P1)
            ARTICLE.appendChild(P2)
            ARTICLE.appendChild(P3)

            section3.appendChild(ARTICLE)
        }
    }
}

//////////////////////////////////////////////////////////////////////CHARIZARD

if (page == "charizard.html") {
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

    const { name: n, stats: newS, abilities: abl, types: t, base_experience: b, height: h, id, is_default: is, order, weight} = charizard;

    let header = document.getElementById("headerCIZ");
    let section1 = document.getElementById("section1CIZ");
    let section2 = document.getElementById("section2CIZ");
    let section3 = document.getElementById("section3CIZ");

    let superObj = charizard;

    createHeader(superObj);
    createSection1(superObj);
    createSection2(superObj);
    createSection3(superObj);

    function createHeader() {
        const H1 = document.createElement("h1");
        H1.textContent = n;
        header.appendChild(H1);
        const PARA = document.createElement("p")
        PARA.textContent = JSON.stringify(`Base Experience: ${b}, Height: ${h}, Id: ${id}, Is Default: ${is}, Order ${order}, Weight ${weight}`)
        header.appendChild(PARA);
    }

    function createSection1(obj) {
        const ABILITIES = obj["abilities"];

        for (ability in ABILITIES) {
            const ARTICLE = document.createElement("article")
            const P1 = document.createElement("p")
            const P2 = document.createElement("p")

            P2.textContent = `ABILITY ${loop}`
            loop++;

            const ITEM = document.createElement("p");
            ITEM.textContent = `name: ${ABILITIES[ability]["name"]}`
            P2.appendChild(ITEM);

            ARTICLE.appendChild(P1)
            ARTICLE.appendChild(P2)
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
            const BR = document.createElement("br")

            P1.textContent = `Stat ${loop2}`
            P2.textContent = `Base Stat: ${STATS[stat]["base_stat"]}, Effort: ${STATS[stat]["effort"]}`
            loop2++;

            const ESTATS = STATS[stat]["stat"];

            const ITEM = document.createElement("p");
            ITEM.textContent = `Stat: ${ESTATS["name"]}`
            P3.appendChild(ITEM);

            ARTICLE.appendChild(P1)
            ARTICLE.appendChild(P2)
            ARTICLE.appendChild(P3)
            ARTICLE.appendChild(BR)

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

            P1.textContent = `Type ${loop3}`
            P2.textContent = `slot: ${TYPES[type]["slot"]}`
            loop3++;

            const NAME = TYPES[type]["type"];

            const ITEM = document.createElement("p");
            ITEM.textContent = `type: ${NAME["name"]}`
            P3.appendChild(ITEM);

            ARTICLE.appendChild(P1)
            ARTICLE.appendChild(P2)
            ARTICLE.appendChild(P3)

            section3.appendChild(ARTICLE)
        }
    }
}