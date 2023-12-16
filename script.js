// 1: Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.


const delayedGreeting = (msg) =>{
  setTimeout(()=>{
    console.log(msg);
  }, 2000)
}
// delayedGreeting("Namste React")

// 2: Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout.

const delayedAddition = (num1, num2) => {
  setTimeout(() => {
      console.log(num1 + num2);
  }, 4000);
}

// delayedAddition(2,4)

// 3: Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout

const delyaedAlert = (msg, delayTime) =>{
  setTimeout(() => {
      window.alert(msg + " " +delayTime)
  }, delayTime);
}

// delyaedAlert("Hello World", 5000)
// 4: Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second each, using a for-loop and setTimeout.

const delayedLoop = (num) =>{
  
    
  for (i=1; i<=num; i++){
    let index = i
    setTimeout(() => {
        console.log(`Hello ${index}`);
    }, ((1 * i) * 2000));
  }
  
}
// delayedLoop(4)

// 5:Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server. A fake fetch has been provided
const fakeFetch1 = (msg, shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve(`message from server: ${msg}`);
      }
      reject(`error from server: ${msg}`);
    }, 3000);
  });
};

  const fetchMessage = (msg, shouldSucceed) =>{
    fakeFetch1(msg, shouldSucceed)
    .then(response => console.log(response))
    .catch(response=>console.log(response.error))
  }

  // fetchMessage("Hello", true)

  // 6:Use this URL - https://example.com/api/itemlist to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server.
  const fakeFetch6 = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/itemlist") {
          reject({
            status: 404,
          message: "Items list not found."
        });
      } else {
          resolve({
            status: 200,
          data: {
              message: "Success",
            data: [
                { itemName: "Bread", price: 30 },
              { itemName: "Water Bottle", price: 50 },
              { itemName: "Dairy Milk", price: 20 }
            ]
          }
        });
      }
    }, 2000);
  });
}

// document.addEventListener("DOMContentLoaded", function () {
//   const displayOutput = document.querySelector("#output");

//   fakeFetch6("https://example.com/api/itemlist")
//       .then(response => console.log(response))
//       .catch((error) => {
//           if (error && error.status === 404) {
//               displayOutput.innerHTML = "The data you are looking for does not exist";
//           } else {
//               console.error("Error:", error);
//           }
//       });
// });

document.addEventListener("DOMContentLoaded", function() {
  const displayOutput = document.querySelector("#output");

  fakeFetch6("https://example.com/api/itemlist")
      .then(response => console.log(response))
      .catch((error) => {
          if (error.status === 404) {
              displayOutput.innerHTML = "The data you are looking for does not exist";
          }
      });
});


// 7:Use this URL - https://example.com/api/chat to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server.
const fakeFetch7 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/chat") {
        reject({
          status: 503,
        message: "Service Unavailable"
      });
    } else {
        resolve({
          status: 200,
        data: {
            message: "Success"
        }
      });
    }
  }, 2000);
});
};

document.addEventListener('DOMContentLoaded', function(){
  const output2 = document.querySelector("#output2")

fakeFetch7("https://example.com/api/chat")
.then(response => console.log(response))
.catch ((error)=>{
  if(error && error.status === 503){
    output2.textContent  = 'We are facing high demand at the moment. Please check back later in sometime'
  }
})
})

// Your Code here

// Output on the DOM should be: 
// We are facing high demand at the moment. Please check back later in sometime.4

// 8:Use this URL - https://example.com/api/itemlist to make a fake fetch call and list out all the items as an ordered list on the DOM.
const fakeFetch8 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Bread", price: 30, quantity: 10 },
            { itemName: "Water Bottle", price: 50, quantity: 50 },
            { itemName: "Dairy Milk", price: 20, quantity: 30 }
          ]
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found."
        });
      }
    }, 2000);
  });
};

// Your Code here

document.addEventListener('DOMContentLoaded', function(){
  const listOutput = this.documentElement.querySelector("#output3")

  fakeFetch8("https://example.com/api/itemlist")
  .then((response) =>{
    const data = response.data
    listOutput.innerHTML = createItemList(data);
  } )
  .catch((error)=> console.log(error))
})

const createItemList = (item) =>{
  let itemList = "<ol>";
  item.forEach((item,index)=>{
      itemList += `<li> ${item.itemName}, ${item.price}, ${item.quantity}</li>`
  });
  itemList += '</ol>'
  return itemList
}

// Output on the DOM should be in the format, {itemName} -- INR {price} -- {quantity}:
// 1. Bread -- INR 30 -- 10
// 2. Water Bottle -- INR 50 -- 50
// 3. Dairy Milk -- INR 20 -- 30

// 9:Use this URL - https://example.com/api/data to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server
const fakeFetch9 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/data") {
        reject({
          status: 500,
        message: "Internal Server Error"
      });
    } else {
        resolve({
          status: 200,
        data: {
            message: "Success"
        }
      });
    }
  }, 2000);
});
};

document.addEventListener('DOMContentLoaded', function(){
  const output9 = document.querySelector('#output4');

  fakeFetch9("https://example.com/api/data")
  .then((response)=>{
    console.log(response);
  })
  .catch(error=>console.log(error),output9.textContent = "Internal Server Error! The server crashed. Please try again in some time")
})

// Your Code here

// Output on the DOM should be: 
// Internal Server Error! The server crashed. Please try again in some time.

// 10:Use this URL - https://example.com/api/profile to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server.
const fakeFetch10 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile") {
        reject({
          status: 401,
          message: "Unauthorized Access"
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success"
          }
        });
      }
    }, 2000);
  });
};

// Your Code here

document.addEventListener('DOMContentLoaded', function(){
  const output5 = document.querySelector('#output4');

  fakeFetch10("https://example.com/api/profile")
  .then((response)=>{
    console.log(response);
  })
  .catch(error=>console.log(error),output5.textContent = "Unauthorized Access! Looks like you are not logged in. Please login to see your profile data")
})
// Output on the DOM should be: 
// Unauthorized Access! Looks like you are not logged in. Please login to see your profile data.

// 10: Use this URL - https://example.com/api/profile/NC002 in which we are passing the id of a user to make a fake fetch call and display a welcome message to the user on the DOM
const fakeFetch11 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile/NC002") {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: { id: "NC002", name: "Roshan", institute: "neoG Camp" }
          }
        });
      } else {
        reject({
          status: 404,
          message: "Resource not found"
        });
      }
    }, 2000);
  });
};

document.addEventListener("DOMContentLoaded", function(){
  const output6 = document.querySelector('#output6');

  fakeFetch11("https://example.com/api/profile/NC002")
  .then(response=>{
    const data = response.data.data;
    output6.innerHTML = `Welcome! ${data.name} from ${data.institute}`
  } )
  .catch(error=> console.log(error))
})

// Your Code here
// Output on the DOM should be: Welcome!, Roshan from neoG Camp