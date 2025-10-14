let cart = [];

function displayMenu() {
    let choice = prompt(`Main Menu:
    1. Add to cart
    2. Remove from cart
    3. View cart
    4. Exit
    Please enter the number of your choice:`);
    if (choice ==="1"){return addToCart();}
    else if (choice ==="2"){return removeFromCart();}
    else if (choice ==="3"){return viewCart();}
    else if (choice ==="4"){return exitProgram();}
    else {alert("Invalid choice. Please try again."); return displayMenu();}
}

function addToCart(){
    let item = prompt ( "add item")
    cart.push(item);
    displayMenu();
}

function removeFromCart(){
 if (cart.length ===0){
    alert("your cart is empty");
    displayMenu();
};
    // debugger
    let item = prompt('Enter the removed items');
    let index = cart.indexOf(Number(item))
    cart.splice(index, 1);
    alert(`${item}has been removed from the cart`);
    displayMenu()
}

function viewCart(){
    let back = prompt (`${cart} \n "1" Back \n "2" Exit`)
    if (back === "1"){
        return displayMenu()
    }

    else if (back === "2"){
        return exitProgram()
    }
    // alert(cart)
    // displayMenu()
}

function exitProgram(){
    
}

displayMenu()
// React

// Reply

