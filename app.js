const seatButtons = document.querySelectorAll(".btn-seat");
let count = 0;
let total = 0;

for (let btn of seatButtons) {
  btn.addEventListener("click", function (e) {
    //     console.log("btn clicked");
    let indicator = document.querySelector("#indicator");
    let seatNumber = document.querySelector("#seat-number");
    let seatClass = document.querySelector("#seat-class");
    let seatPrice = document.querySelector("#seat-price");

    const seatRemain =
      parseInt(document.querySelector("#seat-count").innerText) - 1;
    document.querySelector("#seat-count").innerText = seatRemain;
    console.log(seatRemain);
    //     let indicatorValue = parseInt(indicator);
    count += 1;
    //     console.log(indicatorValue);
    indicator.innerText = count;
    //     console.log(indicatorValue++);
    //seat- update
    const seatUpdate = document.querySelector(".seat-update");

    appendParagraph(seatNumber, e.target.innerText);
    appendParagraph(seatClass, "Economy");
    appendParagraph(seatPrice, "550");
    //     console.log(e.target.style);
    e.target.classList.toggle("bg-green-500");
    e.target.classList.toggle("cursor-not-allowed");
    e.target.classList.toggle("pointer-events-none");

    //     e.target.classList.toggle("btn-disabled");

    //Price update
    //     let totalPrice = parseInt(document.querySelector("#total-price").innerText);
    // //     console.log(totalPrice)
    //    let totalPriceValue = parseInt(seatPrice.innerText);
    //     console.log(totalPriceValue);
    let totalPrice = parseInt(document.querySelector("#total-price").innerText);
    console.log(totalPrice);
    total = totalPrice + parseInt(550);
    document.querySelector("#total-price").innerText = total;
    //     console.log(parseInt(p3.innerText));
    //     let totalPriceCost = total + parseInt(p3.innerText);
    //     console.log(totalPriceCost)
    //     totalPrice.innerText = totalPriceCost++;

    //grand total;
    document.querySelector("#grand-total-price").innerText = total;

    //discounted Price
    ///

    e.target.classList.toggle("clicked-btn");

    ///

    //form
    const phoneNumber = document.querySelector("#phone-number");
    const nextBtn = document.querySelector("#next-btn");
    phoneNumber.addEventListener("keyup", (e) => {
      if (e.target.value > 0) {
        nextBtn.classList.remove("btn-disabled");
      } else {
        nextBtn.classList.add("btn-disabled");
      }
      console.log(e.target.value > 0);
    });
    phoneNumber.value = "";
    //     console.log(phoneNumber.value.length > 0);
  });
}

//append Paragraph
function appendParagraph(mainElement, text) {
  const p = document.createElement("p");
  p.innerText = text;
  mainElement.appendChild(p);
}

document.querySelector("#next-btn").addEventListener("click", function () {
  document.querySelector("footer").classList.remove("hidden");
  document.querySelector("main").classList.add("hidden");
  document.querySelector("nav").classList.add("hidden");
});
//

//discount Button
// show {}
const applyInput = document.querySelector("#apply-input");
const discountBtn = document.querySelector("#apply-btn");
const discountInput = document.querySelector("#discount-input");
let DISCOUNT = 0;
applyInput.addEventListener("keyup", function (e) {
  if (e.target.value === "NEW15") {
    DISCOUNT = total * 0.15;
discountBtn.addEventListener("click", function () {
     document.querySelector("#grand-total-price").innerText = total - DISCOUNT;
})

    discountBtn.classList.remove("btn-disabled");
    
  } else if (e.target.value === "Couple 20") {
    DISCOUNT = total * 0.2;
    discountBtn.addEventListener("click", function () {
         document.querySelector("#grand-total-price").innerText = total - DISCOUNT;
    })
    discountBtn.classList.remove("btn-disabled");
  } else {
    discountBtn.classList.add("btn-disabled");
  }
  //btn
});
let totalDis = 0;
discountBtn.addEventListener("click", function () {
  const discountDiv = document.querySelector("#discount-div");

  discountDiv.innerHTML = `
<h1>Discounted Price</h1>
<h1>BDT-${DISCOUNT}</h1>
`;

  discountInput.classList.add("hidden");
});
