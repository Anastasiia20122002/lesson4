const createPizza=(name, size, type)=>{
    let price;
    switch(name){
    case "Pepperoni":
        price=130;
        break;
    case "Hawaii":
        price=115;
        break;
    case "Five cheese":
        price=121;
        break;
    case "Carbonara":
        price=135;
        break;
    case "Toscana":
        price=118;
        break;
    default:
        price=0;
        console.log("Wrong name of pizza! Try again");
    }
    switch(size){
        case "small":
        break;
        case "middle":
             price+=price*0.3;
        break;
        case "big":
             price+=price*0.4;
        break;
        default:
            console.log("Wrong size of pizza! Try again")
    }
return({name, size, price, type});
}
const pizza_first=createPizza("Pepperoni", "small", "thin");
const pizza_second=createPizza("Hawaii", "middle", "thick");
const pizza_third=createPizza("Five cheese", "big", "thin")
const pizza_fourth=createPizza("Carbonara", "small", "thick");
const pizza_fifth=createPizza("Toscana", "small", "thin");
const pizza_sixth=createPizza("Hawaii", "big", "thick");
const cart={
    pizzas: [pizza_first, pizza_second, pizza_third], 
    sum: pizza_first.price+pizza_second.price+pizza_third.price, 
    address: "Horodotska"
 };
const addPizza=(pizza)=>{
    cart.pizzas.push(pizza);
    cart.sum+=pizza.price;
}
addPizza(pizza_fourth);
addPizza(pizza_fifth);
addPizza(pizza_sixth);
console.log(cart);
