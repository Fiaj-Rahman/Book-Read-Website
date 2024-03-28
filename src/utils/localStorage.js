
export const saveToLocalStorage = (data, type) => {
    const savedData = JSON.parse(localStorage.getItem("donation") || "[]");

    const existedData = savedData.find((item) => item.bookId === data.bookId);

    if (!existedData) {
        data.type = type; // Adding a type property to the data object
        savedData.push(data);
        localStorage.setItem("donation", JSON.stringify(savedData));
        alert("Added to Book", +type);
    } else {
        alert("Already exists");
    }
};


export const getFromLocalStorage = () =>{
    const data = JSON.parse(localStorage.getItem("donation") || "[]");
    return data;
};