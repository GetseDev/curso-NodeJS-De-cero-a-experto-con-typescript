
const heroes = [
    {
        id: 1,
        name: "Wonder Woman",
        owner: "DC"
    },
    {
        id: 2,
        name: "Super Girl",
        owner: "DC"
    },
    {
        id:3,
        name: "Black Widow",
        owner: "Marvel"
    },
    {
        id:4,
        name: "Mystique",
        owner: "Marvel"
    }
]

const findHeroById = (id: number) => heroes.find(hero => hero.id === id);

const hero = findHeroById(3);

console.log(hero?.name ?? 'Hero not found')
