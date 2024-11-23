const obj = {
    name: "ez",
    age: 21,
    address: {
        city: "beijing",
        country: "china",
    },
};

const changeName = name => {
    return name.split("").reverse().join("-");
}
