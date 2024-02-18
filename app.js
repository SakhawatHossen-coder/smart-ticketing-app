const seatButtons = document.querySelectorAll(".btn-seat");
let count = 0;

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
    const p = document.createElement("p");
    p.innerText = e.target.innerText;
    seatNumber.appendChild(p);
    const p2 = document.createElement("p");
    p2.innerText = "Economy";
    seatClass.appendChild(p2);
    const p3 = document.createElement("p");
    p3.innerText = "550";
    seatPrice.appendChild(p3);
    console.log(e.target.style);
    e.target.classList.add("bg-green-500");
  });
}
