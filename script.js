const currentDate = new Date();
const root = document.getElementById("root");
const cardCount = document.getElementById("totalCount");

const delivery = document.getElementById("delivery");
const alpha = document.getElementById("alphabet");
const price = document.getElementById("price");

const ranks = document.getElementsByClassName("ranks");

 
const productData = [
  {
    shoeName:  "Shoe01",
    shoePrice: 2999,
    starRating: 3.0,
    deliveryTime: new Date("22 Nov 2022"),
    shoeImg: "../IMAGES/shoe1.png",
  },
  {
    shoeName:  "Shoe02",
    shoePrice: 4999,
    starRating: 2.0,
    deliveryTime: new Date("1 April 2022"),
    shoeImg: "../IMAGES/shoe2.png",
  },
  {
    shoeName:  "Shoe03",
    shoePrice: 8999,
    starRating: 5.0,
    deliveryTime: new Date("16 Nov 2022"),
    shoeImg: "../IMAGES/shoe3.png",
  },
  {
    shoeName:  "Shoe04",
    shoePrice: 9999,
    starRating: 4.0,
    deliveryTime: new Date("17 Jan 2022"),
    shoeImg: "../IMAGES/shoe1.png",
  },
  {
    shoeName:  "Shoe05",
    shoePrice:7999,
    starRating: 5.0,
    deliveryTime: new Date("25 June 2022"),
    shoeImg: "../IMAGES/shoe2.png",
  },
  {
    shoeName:  "Shoe06",
    shoePrice: 5999,
    starRating: 3.0,
    deliveryTime: new Date("27 Oct 2022"),
    shoeImg: "../IMAGES/shoe3.png",
  },
  {
    shoeName: "Shoe07",
    shoePrice: 1999,
    starRating: 1.0,
    deliveryTime: new Date("26 Sept 2022"),
    shoeImg: "../IMAGES/shoe1.png",
  },
  {
    shoeName:  "Shoe08",
    shoePrice: 3999,
    starRating: 1.0,
    deliveryTime: new Date("17 Jan 2022"),
    shoeImg: "../IMAGES/shoe2.png",
  },
  {
    shoeName:  "Shoe09",
    shoePrice: 6999,
    starRating: 2.0,
    deliveryTime: new Date("18 Jan 2022"),
    shoeImg: "../IMAGES/shoe3.png",
  },
];

// function for generating card to show product
const cardGenerator = (element) => {
  return `
  <div class="card m-5 mx-4 p-1" style="width: 19rem;">
  <img src="../IMAGES/${
    element.shoeImg
  }" class="card-img-top" alt="shoe image" height="220px">
  <hr class="solidLine">
  <div class="card-body">

      <div class="d-flex justify-content-between align-items-center"> 
      <h5 class="card-title fw-bolder">${element.shoeName}</h5>
            
      <span id="star" class="d-flex justify-content-center align-items-center rounded p-1 px-2">
      <img src="../IMAGES/star.png" alt="star image" class="mx-1" height="15"> <span id="star-rating" class="fw-bold">
      ${
        element.starRating
      }</span>
  </span>
          
      </div>
   
      <h4 class="fs-1 fw-bold">&#8377;${element.shoePrice}</h4>
    <p id="nameDelivery" class="card-text">Delivery by: ${element.deliveryTime.toDateString()}</p>
  </div>

</div>`;
};

// Name Sorting
alpha.addEventListener("click", () => {
  console.log("click on alpha");
  root.innerHTML = "";
  const alphaSort = (first, second) => {
    if (first.shoeName > second.shoeName) {
      return 1;
    } else if (first.shoeName < second.shoeName) {
      return -1;
    } else {
      return 0;
    }
  };

  cardCount.innerHTML = 9;
  productData.sort(alphaSort).forEach((element) => {
    root.innerHTML += cardGenerator(element);
  });
});

//price Sorting
price.addEventListener("click", () => {
  console.log("click on price");
  root.innerHTML = "";
  const priceSort = (first, second) => {
    if (parseInt(first.shoePrice) > parseInt(second.shoePrice)) {
      return -1;
    } else if (parseInt(first.shoePrice) < parseInt(second.shoePrice)) {
      return 1;
    } else {
      return 0;
    }
  };

  cardCount.innerHTML = 9;
  productData.sort(priceSort).forEach((element) => {
    root.innerHTML += cardGenerator(element);
  });
});

//Delivery Time
delivery.addEventListener("click", () => {
  root.innerHTML = "";

  const deliveryTimeSort = (first, second) => {
    if (first.deliveryTime - currentDate > second.deliveryTime - currentDate) {
      return 1;
    } else if (
      first.deliveryTime - currentDate <
      second.deliveryTime - currentDate
    ) {
      return -1;
    } else {
      return 0;
    }
  };

  cardCount.innerHTML = 9;
  productData.sort(deliveryTimeSort).forEach((element) => {
    root.innerHTML += cardGenerator(element);
  });
});

// filter Rating
Array.from(ranks).forEach((element) => {
  element.addEventListener("click", (e) => {
    root.innerHTML = "";
    let i = 0;
    const targetRank = parseInt(e.target.innerHTML.split("")[0]);

    productData.forEach((element) => {
      if (parseInt(element.starRating) == targetRank) {
        root.innerHTML += cardGenerator(element);
        i += 1;
      }
    });

    cardCount.innerHTML = i;
  });
});

productData.forEach((element) => {
  root.innerHTML += cardGenerator(element);
});