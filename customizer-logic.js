
const hoodies = ["assets/closes/black-hoodie.png", "assets/closes/blueHoodie.png", "assets/closes/white-hoodie.png"]
function addToCard () {
    const buttons = document.getElementsByTagName("input");
    let product_name = document.getElementById("product-name").innerHTML;
    let price = document.getElementsByTagName("cost")[0].innerHTML;
    let size;
    let color;

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].type === "radio" && buttons[i].name === "size") {
            if (buttons[i].checked) {
                size = buttons[i].value;
            }
        } else if (buttons[i].type === "radio" && buttons[i].name === "color") {
            if (buttons[i].checked) {
                color = buttons[i].value;
            }
        }
    }

    console.log("Product-name: " + product_name + " \nPrice: " + price + " \nSize: " + size + " \nColor: " + color);
}

function changeColor (e) {
    let idx = e.value;

    document.getElementById("p-img").src = hoodies[idx];
}