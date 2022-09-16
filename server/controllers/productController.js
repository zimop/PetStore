

const getAllProducts = (req, res) => {
    let placeholderObject = {
        productId: 0,
        productImage: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=640",
        productName: "Dog food",
        price: 7.99
    }
    let placeholderData = Array(10).fill(placeholderObject);
    res.json(placeholderData);
}

module.exports = {
    getAllProducts,
}