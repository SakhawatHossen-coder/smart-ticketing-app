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
  });
}

//append Paragraph
function appendParagraph(mainElement, text) {
  const p = document.createElement("p");
  p.innerText = text;
  mainElement.appendChild(p);
}
