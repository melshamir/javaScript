//  שאלה 10
// const categories = ["Electronics", "Fashion", "Books", "Home"];
// console.log(categories[0]);
// console.log(categories[categories.length-1]);
// console.log(categories.includes("Books"));
// console.log(categories.indexOf("Fashion"));
// console.log(categories.indexOf("Sports"));
// // כשערך שלא קיים במערך האינדקס יוחזר -1
// categories.push("Sports");
// const popped = categories.pop();
// const change = categories.splice(1,1 ,"Games");
// console.log(categories);
// const AddBack = categories.splice(1,1,"Fashion");
// console.log(categories);

// pop , push , splice


// שאלה 11
// const stockAmount = [4, 0 , 7 , 3, 0];
// let total = 0;
// function calculateTotalStock(arry) {

//     for (const amount of stockAmount) {
//         total+=amount;
//     }
//    return total;
// };
// console.log(calculateTotalStock(stockAmount));


// function countOutOfStock(arry)
// {
//     let count = 0;
//     for( const c of stockAmount)
//     {
//         if (c===0)
//         {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countOutOfStock(stockAmount));

// function calculateTotalStock(array) {
//     let total = 0;

//     for (let i = 0; i < array.length; i++) {
//         total += array[i];
//     }

//     return total;
// }

// console.log(calculateTotalStock(stockAmount)); 
// נצטרך להשתמש בלולאה של אינדקס כשנרצה להשתמש באינדקס
// וכשלא נצטרך את האינדקס הלולאה הרגילה תהיה פשוטה יותר לשימוש

// שאלה 12
// const user= {
//     id: 1,
//     firstName: "Dana",
//     lastName : "Levi",
//     age:17
    
// };
// console.log(user["firstName"]);
// console.log(user["age"]);
// user.age=18;
// user.email= "DanaLevi@gmail.com";
// console.log(user.email);
// console.log(`My name is ${user.firstName} ${user.lastName}, I am  ${user.age} years old.`);
// הקוד לא יחזיר את השם משתמש כי לא רשום את השם משתנה באותה דרך כמו בקוד
// console.log(user.firstName); 
// תיקון

// שאלה 13

// const post = {
// id: 101,
// conent: "JavaScript practice day",
// author: {
// id: 7,
// name:  "Noa",
// username: "@noa_dev"
// },
// comments: [ 
    
//     {id:1 , user: "@amit", text:"Good Luck!"} , 
//     {id:2, user:"@lior" , text: "Nice Post"}
// ]
// };
// console.log(post.author.name);
// console.log(post.author.username);
// console.log(post.comments[0].text);
// console.log(post.comments.length);
// post.comments.push({id:3 , user: "@liel" , text: "Cool!"});
// console.log(post.comments[2]);
// Noa
// @lior

// שאלה 14
// const products = [
//   { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
//   { id: 2, name: "Phone", price: 699, category: "Electronics", inStock: false },
//   { id: 3, name: "Shoes", price: 120, category: "Fashion", inStock: true },
//   { id: 4, name: "Backpack", price: 80, category: "Fashion", inStock: true }
// ];
// let c=0;
// for(const id of products)
// {
//     console.log(products[c].id);
//     console.log(products[c].name);
//     console.log(products[c].price);
//     c++;
// };

// let count =0;
// let StockCount=0;
// function countAvailableProducts (products)
// {
//     for(const Stock of products)
//     {
//      if (products[count].inStock) 
//      {
//         StockCount++;
//      }
//      count++;
//     }
//     return StockCount;
// }
// console.log(countAvailableProducts(products));


// function getProductNameById(products , id)
// {for (const product of products)
// {
//    if(product.id === id)
//    {
//     return product.name;
//    }
// }

//     return "product not found";
// }
// console.log(getProductNameById(products , 3));
// console.log(getProductNameById(products , 99))
// id מזהה את הפריט
// name  מתאר את הפריט
