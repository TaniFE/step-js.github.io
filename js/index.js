"use strict";

const DATA = [
  {
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./img/trainers/trainer-m1.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "8 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./img/trainers/trainer-f1.png",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./img/trainers/trainer-m2.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    "first name": "Тетяна",
    "last name": "Мороз",
    photo: "./img/trainers/trainer-f2.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
  },
  {
    "first name": "Сергій",
    "last name": "Коваленко",
    photo: "./img/trainers/trainer-m3.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
  },
  {
    "first name": "Олена",
    "last name": "Лисенко",
    photo: "./img/trainers/trainer-f3.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
  },
  {
    "first name": "Андрій",
    "last name": "Волков",
    photo: "./img/trainers/trainer-m4.jpg",
    specialization: "Бійцівський клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
  },
  {
    "first name": "Наталія",
    "last name": "Романенко",
    photo: "./img/trainers/trainer-f4.jpg",
    specialization: "Дитячий клуб",
    category: "спеціаліст",
    experience: "3 роки",
    description:
      "Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
  },
  {
    "first name": "Віталій",
    "last name": "Козлов",
    photo: "./img/trainers/trainer-m5.jpg",
    specialization: "Тренажерний зал",
    category: "майстер",
    experience: "10 років",
    description:
      "Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
  },
  {
    "first name": "Юлія",
    "last name": "Кравченко",
    photo: "./img/trainers/trainer-f5.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
  },
  {
    "first name": "Олег",
    "last name": "Мельник",
    photo: "./img/trainers/trainer-m6.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "12 років",
    description:
      "Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
  },
  {
    "first name": "Лідія",
    "last name": "Попова",
    photo: "./img/trainers/trainer-f6.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
  },
  {
    "first name": "Роман",
    "last name": "Семенов",
    photo: "./img/trainers/trainer-m7.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
  },
  {
    "first name": "Анастасія",
    "last name": "Гончарова",
    photo: "./img/trainers/trainer-f7.jpg",
    specialization: "Басейн",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
  },
  {
    "first name": "Валентин",
    "last name": "Ткаченко",
    photo: "./img/trainers/trainer-m8.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
  },
  {
    "first name": "Лариса",
    "last name": "Петренко",
    photo: "./img/trainers/trainer-f8.jpg",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "7 років",
    description:
      "Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
  },
  {
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./img/trainers/trainer-m9.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "11 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./img/trainers/trainer-f9.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./img/trainers/trainer-m10.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    "first name": "Наталія",
    "last name": "Бондаренко",
    photo: "./img/trainers/trainer-f10.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "8 років",
    description:
      "Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
  },
  {
    "first name": "Андрій",
    "last name": "Семенов",
    photo: "./img/trainers/trainer-m11.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
  },
  {
    "first name": "Софія",
    "last name": "Мельник",
    photo: "./img/trainers/trainer-f11.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "6 років",
    description:
      "Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
  },
  {
    "first name": "Дмитро",
    "last name": "Ковальчук",
    photo: "./img/trainers/trainer-m12.png",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
  },
  {
    "first name": "Олена",
    "last name": "Ткаченко",
    photo: "./img/trainers/trainer-f12.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "5 років",
    description:
      "Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
  },
];

///-------------Show elements

const trainersList = document.querySelector(".trainers-cards__container");
const trainerCard = document.querySelector("#trainer-card");

const fragment = document.createDocumentFragment();
let arg;
function getTrainerCard(arr) {
  arr.forEach((e) => {
    let elem = trainerCard.content.cloneNode(true);

    const trainerImg = elem.querySelector(".trainer__img");
    const trainerName = elem.querySelector(".trainer__name");
    trainerImg.src = e.photo;
    trainerName.textContent = `${e["last name"]} ${e["first name"]}`;

    fragment.append(elem);
  });
  trainersList.innerHTML = "";
  trainersList.append(fragment);
  const trainer = [...trainersList.querySelectorAll(".trainer")];
  let num = 0;
  trainer.forEach((e) => {
    e.count = num;
    num++;
  });
  arg = arguments[0];
  createModal(arg);
}
getTrainerCard(DATA);

const sort = document.querySelector(".sorting");
sort.removeAttribute("hidden");
const aside = document.querySelector(".sidebar");
aside.removeAttribute("hidden");

///---------Modal window

const modal = document.querySelector("#modal-template");
const cloneDATA = [];
DATA.forEach((e) => {
  let el = Object.assign({}, e);
  cloneDATA.push(el);
});

function createModal(obj) {
  trainersList.addEventListener("click", (e) => {
    if (e.target.classList.contains("trainer__show-more")) {
      trainersList.querySelectorAll(".modal").forEach((e) => {
        e.remove();
      });
      const parentLi = e.target.closest("li");

      let modalObj = obj[parentLi.count];

      let elemModal = modal.content.cloneNode(true);

      const trainerImg = elemModal.querySelector(".modal__img");
      const trainerName = elemModal.querySelector(".modal__name");
      const trainerCategory = elemModal.querySelector(
        ".modal__point--category"
      );
      const trainerExperience = elemModal.querySelector(
        ".modal__point--experience"
      );
      const trainerSpecialization = elemModal.querySelector(
        ".modal__point--specialization"
      );
      const trainerDescription = elemModal.querySelector(".modal__text");
      trainerImg.src = modalObj.photo;
      trainerName.textContent = `${modalObj["last name"]} ${modalObj["first name"]}`;
      trainerCategory.textContent = `Категорія: ${modalObj.category}`;
      trainerExperience.textContent = `Досвід: ${modalObj.experience}`;
      trainerSpecialization.textContent = `Напрям тренера: ${modalObj.specialization}`;
      trainerDescription.textContent = modalObj.description;
      trainersList.append(elemModal);
      document.body.style.overflow = "hidden";
      const modalWindow = trainersList.querySelector(".modal");
      const modalButton = modalWindow.querySelector(".modal__close");
      modalButton.addEventListener("click", (e) => {
        modalWindow.remove();
        document.body.style.overflow = "";
      });
    }
  });
}

///---------Sorting

const sorting = document.querySelector(".sorting");
const btn = [...sorting.querySelectorAll(".sorting__btn")];
function sortName(arr) {
  arr.sort((a, b) => {
    return a["last name"].localeCompare(b["last name"]);
  });
}
function sortExperience(arr) {
  arr.sort((a, b) => {
    return parseInt(b.experience) - parseInt(a.experience);
  });
}

sorting.addEventListener("click", (e) => {
  if (e.target.classList.contains("sorting__btn")) {
    btn.forEach((el) => {
      if (el.classList.contains("sorting__btn--active")) {
        el.classList.remove("sorting__btn--active");
      }
    });
    e.target.classList.add("sorting__btn--active");
  }
  const inputDirCheckedId = sidebarFilters.querySelector(
    `input[name="direction"]:checked`
  ).id;
  const inputCatCheckedId = sidebarFilters.querySelector(
    `input[name="category"]:checked`
  ).id;
  if (e.target.textContent.trim() === "ЗА замовчуванням") {
    getTrainerCard(DATA);
    sessionStorage.setItem("sorting", "by default");

    if (inputDirCheckedId !== "all-direction") {
      filterDirection(DATA, inputDirCheckedId);
    }
    if (inputCatCheckedId !== "all-category") {
      filterCategory(DATA, inputCatCheckedId);
    }
  }

  if (e.target.textContent.trim() === "ЗА ПРІЗВИЩЕМ") {
    sortName(cloneDATA);
    getTrainerCard(cloneDATA);
    sessionStorage.setItem("sorting", "by last name");

    if (inputDirCheckedId !== "all-direction") {
      filterDirection(cloneDATA, inputDirCheckedId);
    }
    if (inputCatCheckedId !== "all-category") {
      filterCategory(cloneDATA, inputCatCheckedId);
    }
  }
  if (e.target.textContent.trim() === "ЗА ДОСВІДОМ") {
    sortExperience(cloneDATA);
    getTrainerCard(cloneDATA);
    sessionStorage.setItem("sorting", "by experience");

    if (inputDirCheckedId !== "all-direction") {
      filterDirection(cloneDATA, inputDirCheckedId);
    }
    if (inputCatCheckedId !== "all-category") {
      filterCategory(cloneDATA, inputCatCheckedId);
    }
  }
});

///----------Filtering

function filterDirection(arr, type) {
  const directionArr = [];
  switch (type) {
    case "gym":
      arr.forEach((e) => {
        if (e.specialization === "Тренажерний зал") {
          directionArr.push(arr.indexOf(e));
        }
      });
      break;
    case "fight-club":
      arr.forEach((e) => {
        if (e.specialization === "Бійцівський клуб") {
          directionArr.push(arr.indexOf(e));
        }
      });
      break;
    case "kids-club":
      arr.forEach((e) => {
        if (e.specialization === "Дитячий клуб") {
          directionArr.push(arr.indexOf(e));
        }
      });
      break;
    case "swimming-pool":
      arr.forEach((e) => {
        if (e.specialization === "Басейн") {
          directionArr.push(arr.indexOf(e));
        }
      });
      break;
    case "all-direction":
      arr.forEach((e) => {
        directionArr.push(arr.indexOf(e));
      });
      break;
  }
  const trainer = [...trainersList.querySelectorAll(".trainer")];
  trainer.forEach((e) => {
    if (!directionArr.includes(+e.count)) {
      e.setAttribute("hidden", true);
    }
  });
}
function filterCategory(arr, type) {
  const categoryArr = [];
  switch (type) {
    case "master":
      arr.forEach((e) => {
        if (e.category === "майстер") {
          categoryArr.push(arr.indexOf(e));
        }
      });
      break;

    case "specialist":
      arr.forEach((e) => {
        if (e.category === "спеціаліст") {
          categoryArr.push(arr.indexOf(e));
        }
      });
      break;
    case "instructor":
      arr.forEach((e) => {
        if (e.category === "інструктор") {
          categoryArr.push(arr.indexOf(e));
        }
      });
      break;
    case "all-category":
      arr.forEach((e) => {
        categoryArr.push(arr.indexOf(e));
      });
      break;
  }
  const trainer = [...trainersList.querySelectorAll(".trainer")];
  trainer.forEach((e) => {
    if (!categoryArr.includes(+e.count)) {
      e.setAttribute("hidden", true);
    }
  });
}
const sidebarFilters = document.querySelector(".sidebar__filters");
const submitBtn = sidebarFilters.querySelector(".filters__submit");
function filter() {
  const btnActive = sorting.querySelector(".sorting__btn--active");
  const trainer = [...trainersList.querySelectorAll(".trainer")];
  trainer.forEach((e) => {
    if (e.hasAttribute("hidden")) {
      e.removeAttribute("hidden");
    }
  });
  const inputDirCheckedId = sidebarFilters.querySelector(
    `input[name="direction"]:checked`
  ).id;
  const inputCatCheckedId = sidebarFilters.querySelector(
    `input[name="category"]:checked`
  ).id;
  if (btnActive.textContent.trim() === "ЗА замовчуванням") {
    filterDirection(DATA, inputDirCheckedId);

    filterCategory(DATA, inputCatCheckedId);
  } else {
    filterDirection(cloneDATA, inputDirCheckedId);

    filterCategory(cloneDATA, inputCatCheckedId);
  }
  sessionStorage.setItem("direction", inputDirCheckedId);
  sessionStorage.setItem("category", inputCatCheckedId);
}
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  filter();
});

///------- SessionStorage

if (sessionStorage.getItem("sorting") === "by default") {
  btn.forEach((el) => {
    if (
      el.classList.contains("sorting__btn--active") &&
      el.textContent.trim() !== "ЗА замовчуванням"
    ) {
      el.classList.remove("sorting__btn--active");
    }
    if (el.textContent.trim() === "ЗА замовчуванням") {
      el.classList.add("sorting__btn--active");
    }
  });
  getTrainerCard(DATA);
}
if (sessionStorage.getItem("sorting") === "by last name") {
  btn.forEach((el) => {
    if (
      el.classList.contains("sorting__btn--active") &&
      el.textContent.trim() !== "ЗА ПРІЗВИЩЕМ"
    ) {
      el.classList.remove("sorting__btn--active");
    }
    if (el.textContent.trim() === "ЗА ПРІЗВИЩЕМ") {
      el.classList.add("sorting__btn--active");
    }
  });
  sortName(cloneDATA);
  getTrainerCard(cloneDATA);
}
if (sessionStorage.getItem("sorting") === "by experience") {
  btn.forEach((el) => {
    if (
      el.classList.contains("sorting__btn--active") &&
      el.textContent.trim() !== "ЗА ДОСВІДОМ"
    ) {
      el.classList.remove("sorting__btn--active");
    }
    if (el.textContent.trim() === "ЗА ДОСВІДОМ") {
      el.classList.add("sorting__btn--active");
    }
  });
  sortExperience(cloneDATA);
  getTrainerCard(cloneDATA);
}

if (sessionStorage.getItem("sorting") === null) {
  sessionStorage.setItem("sorting", "by default");
}
if (sessionStorage.getItem("direction") === null) {
  sessionStorage.setItem("direction", "all-direction");
}
if (sessionStorage.getItem("category") === null) {
  sessionStorage.setItem("category", "all-category");
}
const checkedElemDir = document.getElementById(
  sessionStorage.getItem("direction")
);
checkedElemDir.setAttribute("checked", true);
const checkedElemCat = document.getElementById(
  sessionStorage.getItem("category")
);
checkedElemCat.setAttribute("checked", true);
if (
  sessionStorage.getItem("direction") !== null &&
  sessionStorage.getItem("category") !== null
) {
  filter();
}

///------Loader

const loaderContainer = document.createElement("div");
loaderContainer.className = "loader__container";
loaderContainer.innerHTML =
  "<div class='circle'><div class='inner'></div></div>";
const body = document.querySelector("body");
body.prepend(loaderContainer);
window.addEventListener("load", () => {
  loaderContainer.remove();
});
