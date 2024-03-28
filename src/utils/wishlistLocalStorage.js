export const saveToWishlistLocalStorage = (data, type) => {
    const savedData = JSON.parse(localStorage.getItem("Wishlist") || "[]");

    const existedData = savedData.find((item) => item.bookId === data.bookId);

    if (!existedData) {
        const newData = { ...data, type }; // Adding a type property to the data object
        savedData.push(newData);
        localStorage.setItem("Wishlist", JSON.stringify(savedData)); // Corrected localStorage key
        alert("Added to Wishlist: " + type); // Corrected concatenation
    } else {
        alert("Already exists");
    }
};

export const getFromWishlistLocalStorage = () =>{
    const data = JSON.parse(localStorage.getItem("Wishlist") || "[]");
    return data;
};
