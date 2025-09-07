const categoryContainer = document.getElementById("categoryContainer");

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
        <li class="cursor-pointer w-full hover:bg-[#2ea754] p-2 rounded-md hover:transition duration-500 hover:text-white ">
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
    }
  });
};

loadCategory();
