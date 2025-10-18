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

debugger
function removeFromCart(){
 if (cart.length ===0){
    alert("your cart is empty");
    displayMenu();
};
    debugger
    let emptyList = "";
    for (let i = 0; i < cart.length; i++){
        emptyList += (i + 1) + " " + cart[i] + "\n"; 
    }

    let item = prompt('The items in the cart:\n' + emptyList + "(0) Back" + "\nEnter input");
    
    if (item === null || item.trim() === ""){       
        
        alert(`Nothing was selected`);
        removeFromCart();
        return;
    }
    item = item.trim();

    if(item === "0"){
        return displayMenu()
    }

    if(!isNaN(item)){
        let index = parseInt(item) - 1;

        if(index < 0 || index >= cart.length){
            alert("Invalid Item Number");
            removeFromCart();
            return;
        }

        let removedItem = cart.splice(index, 1)
        alert(removedItem[0] + " has been removed from the cart");
        removeFromCart();
        return;
    }
    
    let indexByName = -1;
    for (let i = 0; i < cart.length; i++){
        if(cart[i].toLowerCase() === item.toLowerCase()){
            indexByName = i;
            break;
        }
    }

    if(indexByName === -1){
        alert("Item not Found");
        removeFromCart()
    } else {
        let itemToRemove = cart.splice(indexByName, 1)
        alert(itemToRemove[0] + " has been removed");
        
    }

    

    displayMenu();
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

