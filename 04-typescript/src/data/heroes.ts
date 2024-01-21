interface Hero {
    id: number;
    name: string;
    owner: string;
}

const heroes:Hero[] = [
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

export default heroes;