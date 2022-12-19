
const hoodies = ["assets/closes/hoodie/hoodie-black-minilogo.jpg", "assets/closes/hoodie/hoodie-blue-minilogo.jpg", "assets/closes/hoodie/hoodie-white-minilogo.jpg"]
let idx = 0;

function addToCard () {
    const buttons = document.getElementsByTagName("input");
    let product_name = document.getElementById("product-name").innerHTML;
    let price = document.getElementsByTagName("cost")[0].innerHTML;
    let href = document.getElementById("p-img").src;
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

    console.log("Product-name: " + product_name + " \nPrice: " + price + " \nSize: " + size + " \nColor: " + color + " \nhref: " + href);

    fetch('/api/insert.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `type=${product_name}&cost=${prize}&size=${size}&color=${color}&href=${href}`
    })
        .then(response => response.json())
        .then(data => console.log(data));

    idx++;
}

function changeColor (e) {
    let idx = e.value;

    document.getElementById("p-img").src = hoodies[idx];
}