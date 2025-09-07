const categoryContainer = document.getElementById("categoryContainer");
const planContainer = document.getElementById("planContainer");
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      const categories = data.categories;
      showCategory(categories);
    })
    .catch((err) => {
      console.log(err);
    });
};
const showCategory = (categories) => {
  categories.forEach((cat) => {
    categoryContainer.innerHTML += `
        <li id="${cat.id}" class="cursor-pointer w-full hover:bg-[#2ea754] p-2 rounded-md hover:transition duration-500 hover:text-white ">
                ${cat.category_name}
              </li>
        `;
  });

  categoryContainer.addEventListener("click", (e) => {
    const allLi = document.querySelectorAll("li");

    allLi.forEach((li) => {
      li.classList.remove("bg-green-700");
      li.classList.remove("text-white");
    });

    if (e.target.localName === "li") {
      e.target.classList.add("bg-green-700");
      e.target.classList.add("text-white");
      plantsByCategory(e.target.id);
    }
  });
};

const plantsByCategory = (plantId) => {
  fetch(`https://openapi.programming-hero.com/api/category/${plantId}`)
    .then((res) => res.json())
    .then((data) => {
      showPlantByCategory(data.plants);
    });
};

const showPlantByCategory = (plants) => {
  planContainer.innerHTML = "";
  plants.forEach((plant) => {
    planContainer.innerHTML += `
    <div class="bg-white shadow-lg hover:transition hover:translate-2 duration-300  space-y-3 p-4 rounded-lg h-[530px]">
    <img class="rounded-lg h-[250px] w-full" src="${plant.image}">
      <h1 class="font-semibold text-lg cursor-pointer">${plant.name}</h1>
      <p class="text-gray-600">${plant.description}</p>
      <div class="flex justify-between">
        <button class="btn bg-[#DCFCE7] rounded-full text-[#15803D]">${plant.category}</button>
        <p><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</p>
      </div>
    <button class="btn w-full rounded-full text-white bg-green-700 p-2">Add to Cart</button>
    </div>

    `;
  });
};

loadCategory();

const loadAllCategorys = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      const cardAll = data.plants;
      showAllCategor(cardAll);
    });
};
const showAllCategor = (cardAll) => {
  console.log(cardAll);

  cardAll.forEach((card) => {
    planContainer.innerHTML += `
       <div class="bg-white shadow-lg hover:transition hover:translate-2 duration-300  space-y-3 p-4 rounded-lg h-[530px]">
    <img class="rounded-lg h-[250px] w-full" src="${card.image}">
      <h1 class="font-semibold text-lg cursor-pointer">${card.name}</h1>
      <p class="text-gray-600">${card.description}</p>
      <div class="flex justify-between">
        <button class="btn bg-[#DCFCE7] rounded-full text-[#15803D]">${card.category}</button>
        <p><i class="fa-solid fa-bangladeshi-taka-sign"></i>${card.price}</p>
      </div>
    <button class="btn w-full rounded-full text-white bg-green-700 p-2">Add to Cart</button>
    </div>
        `;
  });
};
loadAllCategorys();


