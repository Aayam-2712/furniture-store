var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, , authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

var port= process.env.PORT||2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

var furnitures = [
    {
        // 1
        prodCode: "DS2S245",
        category: "Dining",
        desc: [
        "Two seater Dining Set",
        "Built from High quality wood",
        "1 year warranty",
        ],
        img:"https://hometown.gumlet.io/media/product/61/9353/47156/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
        ingredients: [
        { ingName: "Dining Table", qty: 1 },
        { ingName: "Chair", qty: 2 },
        ],
        title: "Two seater Dining Set",
    },
    {
        // 2
        prodCode: "DS6S761",
        category: "Dining",
        desc: [
        "Six Seater Dining Set in Antique Cherry Colour",
        "Assembly by Skilled Carpenters",
        "Made from Teak wood",
        ],
        img:
        "https://hometown.gumlet.io/media/product/03/9453/94498/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
        ingredients: [
        { ingName: "Dining Table", qty: 1 },
        { ingName: "Chair", qty: 4 },
        { ingName: "Bench", qty: 1 },
        ],
        title: "Six Seater Dining Set",
    },
    {
        // 3
        prodCode: "DS4S177",
        category: "Dining",
        desc: [
        "Mild Steel Four Seater Dining Set in Black Colour",
        "Knock-down construction for easy transportation",
        ],
        img:
        "https://hometown.gumlet.io/media/product/15/4063/19467/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
        ingredients: [
        { ingName: "Dining Table", qty: 1 },
        { ingName: "Chair", qty: 4 },
        ],
        title: "Mild Steel Dining Set",
    },
    {
        // 4
        prodCode: "DC2S705",
        category: "Dining",
        desc: [
        "Solid Wood Dining Chair Set of Two in Dark Walnut Colour",
        "Beautiful design carved on dining chair",
        "Dining chair seat upholstered in dark brown Fabric",
        ],
        img:
        "https://hometown.gumlet.io/media/product/87/9453/34067/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
        ingredients: [{ ingName: "Chair", qty: 2 }],
        title: "Dining Chair Set",
    },
    {
        // 5
        prodCode: "BN1S388",
        category: "Dining",
        desc: [
        "Solid Wood Dining Bench in Dark Walnut Colour",
        "Comfortable bench for a relaxed dinner",
        ],
        img:
        "https://hometown.gumlet.io/media/product/79/2673/93994/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
        ingredients: [{ ingName: "Bench", qty: 1 }],
        title: "Dining Bench",
    },
    {
        // 6
        prodCode: "SF2S532",
        category: "Drawing",
        desc: [
        "Characteristic Rising Track Arm Rest Design",
        "Premium High Gloss Leatherette Upholstery",
        "Independent Headrest And Lumber Support",
        ],
        img:
        "https://hometown.gumlet.io/media/product/21/3253/45722/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
        ingredients: [{ ingName: "Sofa", qty: 1 }],
        title: "Two Seater Sofa",
    },
    {
        // 7
        prodCode: "SF2S206",
        category: "Drawing",
        desc: ["Two Seater Sofa in Blue Colour", "Assembly by Skilled Carpenters"],
        img:
        "https://hometown.gumlet.io/media/product/93/2463/65420/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
        ingredients: [{ ingName: "Sofa", qty: 1 }],
        title: "Two Seater Sofa",
    },
    {
        // 8
        prodCode: "SFBD311",
        category: "Drawing",
        desc: [
        "Sofa Cum bed in Brown Colour",
        "Ply-wood construction with hand polished finish",
        "Removable fabric cover on best quality foam mattress",
        "Throw cushions and bolsters come with the product",
        ],
        img:
        "https://hometown.gumlet.io/media/product/58/2073/91601/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
        ingredients: [
        { ingName: "Sofa", qty: 1 },
        { ingName: "Cushions", qty: 2 },
        ],
        title: "Sofa cum Bed",
    },
    {
        // 9
        prodCode: "BDQS381",
        category: "Bedroom",
        desc: [
        "Wood Box Storage King Size Bed in Wenge Colour ",
        "Box Storage included for Maximum space utilization",
        "Mattress is included",
        ],
        img:
        "https://hometown.gumlet.io/media/product/43/8153/54285/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
        ingredients: [
        { ingName: "Bed", qty: 1 },
        { ingName: "Mattress", qty: 2 },
        ],
        title: "King size Bed",
    },
    {
        // 10
        prodCode: "BDQS229",
        category: "Bedroom",
        desc: [
        "Wood Hydraulic Storage Queen Size Bed",
        "Half hydraulic storage",
        "Superior E2 grade MDF used with melamine finish",
        ],
        img:
        "https://hometown.gumlet.io/media/product/79/8363/20458/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
        ingredients: [{ ingName: "Bed", qty: 1 }],
        title: "Queen size Bed",
    },
    {
        // 11
        prodCode: "ST1T425",
        category: "Study",
        desc: [
        "Wood Study Table in Walnut Colour",
        "Assembly by Skilled Carpenters",
        "Built from High Quality Wood",
        ],
        img:
        "https://hometown.gumlet.io/media/product/02/9153/44662/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
        ingredients: [{ ingName: "Study Table", qty: 1 }],
        title: "Study Table",
    },
    {
        // 12
        prodCode: "ST1T588",
        category: "Study",
        desc: [
        " Wood Study Table in Highgloss White & Blue Colour",
        "Study table comes with bookshelf on top, 5 drawers & 1 open shelf",
        "Superior quality MDF with stain resistant melamine finish",
        ],
        img:
        "https://hometown.gumlet.io/media/product/60/9573/25337/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
        ingredients: [{ ingName: "Study Table", qty: 1 }],
        title: "Study Table",
    },
];
var users = [
    {
        email: "admin@gmail.com",
        password: "admin123",
        role: "admin",
        name: "Admin",
    },
    {
        email: "david@gmail.com",
        password: "david123",
        role: "customer",
        name: "David",
    },
    {
        email: "bob@gmail.com",
        password: "bob123",
        role: "customer",
        name: "Bob",
    }
];
var carts = [];

app.post("/login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let find = users.find(
        (obj) => obj.email === email && obj.password === password
    );
    if (find) res.send(find); 
    else res.status(404).send("User not found, Please Check email and Password");
});

app.get("/products/:category", (req, res) => {
    let category = req.params.category;
    console.log(category);
    let copyArr = furnitures;
    copyArr = copyArr.filter((obj) => obj.category === category);
    res.send(copyArr);
});

app.get("/products", (req, res) => {
    res.send(furnitures);
});

app.post("/cart/:name", (req, res) => {
    let name = req.params.name;
    let prod = req.body;
    console.log("post", prod);
    let index = carts.findIndex((obj) => obj.name === name);
    if (index !== -1) {
        let ind = carts[index].cart.findIndex((obj) => obj.prod.prodCode === prod.prodCode);
        if (ind >= 0) {
            carts[index].cart[ind].qty++;
        } 
        else {
            let json = {};
            json.prod = prod;
            json.qty = 1;
            carts[index].cart.push(json);
        }
    } 
    else {
        let cart = [];
        let cartJson = {};
        cartJson.prod = prod;
        cartJson.qty = 1;
        cart.push(cartJson);
        let json = {};
        json.name = name;
        json.cart = cart;
        console.log("Json", json);
        carts.push(json);
        console.log("carts", carts);
    }
    res.send("Add To Cart");
});

app.get("/cart", (req, res) => {
    res.send(carts);
});

app.get("/getProduct/:name", (req, res) => {
    let name = req.params.name;
    let find = carts.find((obj) => obj.name === name);
    res.send(find);
});

app.get("/product/:code", (req, res) => {
    let code = req.params.code;
    let find = furnitures.find((obj) => obj.prodCode === code);
    res.send(find);
});

app.post("/updateCart", (req, res) => {
    console.log(req.body);
    let index = carts.findIndex((obj) => obj.name === req.body.name);
    console.log(index);
    let ind = carts[index].cart.findIndex(
        (obj) => obj.prod.prodCode === req.body.code
    );
    console.log(ind);
    console.log("Update", carts[index].cart[ind]);
    carts[index].cart[ind].qty = carts[index].cart[ind].qty + req.body.qty;
    if (carts[index].cart[ind].qty === 0) carts[index].cart.splice(ind, 1);
    console.log("After Update", carts[index].cart[ind]);
    res.send("update");
});

app.delete("/deleteProd/:code", (req, res) => {
    let code = req.params.code;
    let index = furnitures.findIndex((obj) => obj.prodCode === code);
    if (index > -1) {
        furnitures.splice(index, 1);
        res.send("Deleted");
    }
    else res.status(404).send("Product Not Found");
});

app.put("/editProduct", (req, res) => {
    let body = req.body;
    let index = furnitures.findIndex((obj) => obj.prodCode === body.prodCode);
    furnitures[index] = body;
    res.send("Updated");
});

app.post("/addProduct", (req, res) => {
    let body = req.body;
    furnitures.push(body);
    res.send("Products added Succesfully");
});
