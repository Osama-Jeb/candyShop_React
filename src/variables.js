import drinkHero from "./assets/images/drinks/drink1.jpg";
import chipHero from "./assets/images/chips/chips1.jpg";
import barHero from "./assets/images/bars/bar1.jpg";
import candyHero from "./assets/images/candy/candy1.jpg";

import drink1 from "./assets/images/drinks/drink1.jpg";
import drink2 from "./assets/images/drinks/drink2.jpg";
import drink3 from "./assets/images/drinks/drink3.jpg";
import drink4 from "./assets/images/drinks/drink4.jpg";
import drink5 from "./assets/images/drinks/drink5.jpg";
import drink6 from "./assets/images/drinks/drink6.jpg";
import drink7 from "./assets/images/drinks/drink7.jpg";
import drink8 from "./assets/images/drinks/drink8.jpg";

import chip1 from "./assets/images/chips/chips1.jpg"
import chip2 from "./assets/images/chips/chips2.jpg"
import chip3 from "./assets/images/chips/chips3.png"
import chip4 from "./assets/images/chips/chips4.jpg"
import chip5 from "./assets/images/chips/chips5.jpg"
import chip6 from "./assets/images/chips/chips6.jpg"
import chip7 from "./assets/images/chips/chips7.jpg"
import chip8 from "./assets/images/chips/chips8.jpg"

import bar1 from "./assets/images/bars/bar1.jpg"
import bar2 from "./assets/images/bars/bar2.jpg"
import bar3 from "./assets/images/bars/bar3.jpg"
import bar4 from "./assets/images/bars/bar4.jpg"
import bar5 from "./assets/images/bars/bar5.jpg"
import bar6 from "./assets/images/bars/bar6.jpg"
import bar7 from "./assets/images/bars/bar7.jpg"
import bar8 from "./assets/images/bars/bar8.jpg"

import candy1 from "./assets/images/candy/candy1.jpg"
import candy2 from "./assets/images/candy/candy2.jpg"
import candy3 from "./assets/images/candy/candy3.jpg"
import candy4 from "./assets/images/candy/candy4.jpg"
import candy5 from "./assets/images/candy/candy5.jpg"
import candy6 from "./assets/images/candy/candy6.jpeg"
import candy7 from "./assets/images/candy/candy7.jpg"
import candy8 from "./assets/images/candy/candy8.png"

class Products {
    constructor(name, type, id, price, stock, src) {
        this.name = name;
        this.type = type;
        this.id = id;
        this.price = price;
        this.stock = stock;
        this.src = src;
    }
}

let drink_1 = new Products("pepsi", "drinks", 1, 5, 10, drink1);
let drink_2 = new Products("schweppes", "drinks", 2, 7, 10, drink2);
let drink_3 = new Products("coca cola", "drinks", 3, 2, 10, drink3);
let drink_4 = new Products("monster", "drinks", 4, 8, 10, drink4);
let drink_5 = new Products("thumbs up", "drinks", 5, 6, 10, drink5);
let drink_6 = new Products("fanta", "drinks", 6, 4, 10, drink6);
let drink_7 = new Products("mundel", "drinks", 7, 5, 10, drink7);
let drink_8 = new Products("zoik", "drinks", 8, 1, 10, drink8);

let drinkList = [drink_1, drink_2, drink_3, drink_4, drink_5, drink_6, drink_7, drink_8]

let chip_1 = new Products("doritos", "chips", 1, 5, 10, chip1);
let chip_2 = new Products("cheetos", "chips", 2, 7, 10, chip2);
let chip_3 = new Products("pringles", "chips", 3, 2, 10, chip3);
let chip_4 = new Products("fritos", "chips", 4, 8, 10, chip4);
let chip_5 = new Products("lays", "chips", 5, 6, 10, chip5);
let chip_6 = new Products("ruffles", "chips", 6, 4, 10, chip6);
let chip_7 = new Products("cape cod", "chips", 7, 5, 10, chip7);
let chip_8 = new Products("funyuns", "chips", 8, 1, 10, chip8);

let chipList = [chip_1, chip_2, chip_3, chip_4, chip_5, chip_6, chip_7, chip_8]


let bar_1 = new Products("butterfinger", "bars", 1, 5, 10, bar1);
let bar_2 = new Products("mound", "bars", 2, 7, 10, bar2);
let bar_3 = new Products("kitkat", "bars", 3, 2, 10, bar3);
let bar_4 = new Products("m&m", "bars", 4, 8, 10, bar4);
let bar_5 = new Products("almond joy", "bars", 5, 6, 10, bar5);
let bar_6 = new Products("hershey's", "bars", 6, 4, 10, bar6);
let bar_7 = new Products("wonka", "bars", 7, 5, 10, bar7);
let bar_8 = new Products("snickers", "bars", 8, 1, 10, bar8);

let barList = [bar_1, bar_2, bar_3, bar_4, bar_5, bar_6, bar_7, bar_8]


let candy_1 = new Products("skittles", "candy", 1, 5, 10, candy1);
let candy_2 = new Products("pop rocks", "candy", 2, 7, 10, candy2);
let candy_3 = new Products("joban", "candy", 3, 2, 10, candy3);
let candy_4 = new Products("emporium", "candy", 4, 8, 10, candy4);
let candy_5 = new Products("gum", "candy", 5, 6, 10, candy5);
let candy_6 = new Products("rainbow", "candy", 6, 4, 10, candy6);
let candy_7 = new Products("coca candy", "candy", 7, 5, 10, candy7);
let candy_8 = new Products("lucky", "candy", 8, 1, 10, candy8);

let candyList = [candy_1, candy_2, candy_3, candy_4, candy_5, candy_6, candy_7, candy_8]


export const productInfo = [{
    name: "drinks",
    hero: drinkHero,
    items: drinkList,
},
{
    name: "chips",
    hero: chipHero,
    items: chipList,
},
{
    name: "bars",
    hero: barHero,
    items: barList,
},
{
    name: "candy",
    hero: candyHero,
    items: candyList,
},
]