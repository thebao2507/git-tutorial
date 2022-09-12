const sum = (a, b, c) => {
    return a + b - c;
};

alert("hello world");

const waifus = [
    {
        name: "zero two",
    },
    {
        name: "yukinoshita",
    },
    {
        name: "akane",
    },
];

const handleSubmit = () => {
    waifus.map((waifu) => console.log(waifu.name));
};

handleSubmit();
