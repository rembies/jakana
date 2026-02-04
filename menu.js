//Generowanie elementów! Można na bieżąco dodawać itd.
const menuItems = [
  { name: "HITORI", price: 59, path: "Post_nr_2_zestawy/2.png" },
  { name: "FUTARI", price: 109, path: "Post_nr_2_zestawy/3.png" },
  { name: "FUTARI YAKITORI", price: 115, path: "Post_nr_2_zestawy/4.png" },
  { name: "FUTARI MIDORI 🍃", price: 95, path: "Post_nr_2_zestawy/5.png" },
  { name: "KIZUNA", price: 149, path: "Post_nr_2_zestawy/6.png" },
  { name: "KAZOKU", price: 219, path: "Post_nr_2_zestawy/7.png" },
  { name: "JAKANA PARTY", price: 269, path: "Post_nr_2_zestawy/8.png" },
  { name: "TAKUSAN", price: 349, path: "Post_nr_2_zestawy/9.png" }
];

const menuContainer = document.getElementById("menu-container");

menuItems.forEach(item => {
  const div = document.createElement("div");
  div.className = `
    group
    w-[90%] sm:w-[80%] md:w-[48%] lg:w-[45%] xl:w-[40%] 2xl:w-[35%]
    bg-white rounded-2xl p-5 border border-gray-200 shadow-md
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
    cursor-pointer
  `;
  div.innerHTML = `
    <img src="images/${item.path}" alt="${item.name}" class="mb-4 rounded-xl w-full object-cover transition-transform duration-300 group-hover:scale-105">
    <h4 class="text-xl font-semibold text-gray-800 text-center">${item.name}</h4>
    <p class="text-red-600 font-bold text-lg text-center mt-1">${item.price} zł</p>
  `;
  menuContainer.appendChild(div);
});

const lunches = [
  { name: "Klasyczny", price: 39, description: "Futomak Sake Philadelphia, Nigiri Sake, Sajgonki 2 szt., Goma Wakame.", images: ["images/Lunch_zdjecia/1.jpg"] },
  { name: "Pieczony", price: 39, description: "Futomak Sake Kabayaki, Nigiri Sake Yaki, Sajgonki 2 szt., Goma Wakame.", images: ["images/Lunch_zdjecia/2.jpg"] },
  { name: "Wegetariański", price: 39, description: "Futomak Sweet Veggie, Nigiri Awokado, Sajgonki 2 szt., Goma Wakame.", images: ["images/Lunch_zdjecia/3.jpg"] }
];

const lunchContainer = document.getElementById("lunch-container");

lunches.forEach(lunch => {
  const card = document.createElement("div");
  card.className = `
    group bg-white rounded-2xl shadow-md border border-gray-200
    p-6 w-[90%] max-w-[520px] flex flex-col items-center
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
  `;
  card.innerHTML = `
    <h3 class="text-2xl font-bold text-center text-gray-800">${lunch.name} – ${lunch.price} zł</h3>
    <p class="text-center text-gray-600 text-sm mt-3 leading-relaxed">${lunch.description}</p>
    <img src="${lunch.images[0]}" alt="${lunch.name}" class="mt-6 rounded-xl w-full object-cover transition-transform duration-300 group-hover:scale-105">
  `;
  lunchContainer.appendChild(card);
});

const appetizers = [
  {
    name: "Sajgonki z warzywami",
    details: "6 szt.",
    price: "15 zł",
    veggie: true,
    image: "images/Przystawki_zdjecia/1.jpg"
  },
  {
    name: "Pierożki Gyoza",
    details: "6 szt. – warzywa",
    price: "15 zł",
    veggie: true,
    image: "images/Przystawki_zdjecia/x.jpg"
  },
  {
    name: "Pierożki Gyoza",
    details: "6 szt. – wieprzowina",
    price: "20 zł",
    veggie: false,
    image: "images/Przystawki_zdjecia/2.jpg"
  },
  {
    name: "Krewetki w panko",
    details: "6 szt. / 10 szt.",
    price: "30 zł / 55 zł",
    veggie: false,
    image: "images/Przystawki_zdjecia/3.jpg"
  },
  {
    name: "Warzywa w tempurze",
    details: "10 szt.",
    price: "15 zł",
    veggie: true,
    image: "images/Przystawki_zdjecia/4.jpg"
  },
  {
    name: "Tatar z łososia",
    details: "150 g",
    price: "36 zł",
    veggie: false,
    image: "images/Przystawki_zdjecia/5.jpg"
  },
  {
    name: "Edamame fasolki",
    details: "200 g",
    price: "15 zł",
    veggie: true,
    image: "images/Przystawki_zdjecia/6.jpg"
  },
  {
    name: "Goma Wakame",
    details: "150 g",
    price: "10 zł",
    veggie: true,
    image: "images/Przystawki_zdjecia/7.jpg"
  }
];


const appetizersContainer = document.getElementById("appetizers-container");

appetizers.forEach(item => {
  const card = document.createElement("div");

  card.className = `
    bg-white rounded-2xl border border-gray-200 shadow-md
    overflow-hidden
    w-[90%] max-w-[420px] text-center
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
  `;

  card.innerHTML = `
    <img
      src="${item.image}"
      alt="${item.name}"
      loading="lazy"
      class="w-full h-72 sm:h-80 md:h-96 object-cover object-center"
    >

    <div class="p-5">
      <h3 class="text-xl font-semibold">
        ${item.name} ${item.veggie ? "🍃" : ""}
      </h3>
      <p class="text-gray-500 text-sm mt-1">${item.details}</p>
      <p class="text-red-600 font-bold text-lg mt-2">${item.price}</p>
    </div>
  `;

  appetizersContainer.appendChild(card);
});

const sashimi = [
  {
    name: "Sashimi Sake",
    details: "Łosoś – 6 szt.",
    price: "35 zł",
    image: "images/Sashimi_zdjecia/1.jpg"
  },
  {
    name: "Sashimi Maguro",
    details: "Tuńczyk – 6 szt.",
    price: "40 zł",
    image: "images/Sashimi_zdjecia/2.jpg"
  },
  {
    name: "Sashimi Deluxe",
    details: "Szef poleca – 15 szt.",
    price: "75 zł",
    image: "images/Sashimi_zdjecia/3.jpg"
  }
];


const sashimiContainer = document.getElementById("sashimi-container");

sashimi.forEach(item => {
  const card = document.createElement("div");

  card.className = `
    bg-white rounded-2xl border border-gray-200 shadow-md
    overflow-hidden
    w-[90%] max-w-[420px] text-center
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
  `;

  card.innerHTML = `
    <img 
      src="${item.image}" 
      alt="${item.name}"
      loading="lazy"
      class="
        w-full
        h-172
        object-center
        object-cover
      "
    >

    <div class="p-5">
      <h3 class="text-xl font-semibold">${item.name}</h3>
      <p class="text-gray-500 text-sm mt-1">${item.details}</p>
      <p class="text-red-600 font-bold text-lg mt-2">${item.price}</p>
    </div>
  `;

  sashimiContainer.appendChild(card);
});

const futomaki = [
  { name: "Sake Philadelphia", description: "łosoś, ogórek, awokado, sałata, serek", price: "30 zł", image: "images/Futomaki_zdjecia/1.png" },
  { name: "Sake Kabayaki", description: "łosoś pieczony, ogórek, awokado, sałata, marynowana tykwa, serek - sos kabayaki", price: "30 zł", image: "images/Futomaki_zdjecia/2.png" },
  { name: "Sake Ten", description: "łosoś w tempurze, ogórek, awokado, mango, groszek cukrowy, spicy mayo – pulpa mango", price: "31 zł", image: "images/Futomaki_zdjecia/3.png" },
  { name: "Maguro Philadelphia", description: "tuńczyk, ogórek, awokado, sałata, oshinko, serek", price: "34 zł", image: "images/Futomaki_zdjecia/4.png" },
  { name: "Maguro Ten", description: "tuńczyk w panko, ogórek, awokado, oshinko, groszek cukrowy, spicy mayo – sos kabayaki", price: "35 zł", image: "images/Futomaki_zdjecia/5.png" },
  { name: "Spicy Maguro 🌶️", description: "tuńczyk, ogórek, awokado, sałata, oshinko, chilli, serek wasabi – kizami wasabi", price: "35 zł", image: "images/Futomaki_zdjecia/6.png" },
  { name: "Ebi Panko", description: "krewetka w panko, ogórek, awokado, mango, tobiko, spicy mayo – pulpa mango", price: "35 zł", image: "images/Futomaki_zdjecia/7.png" },
  { name: "Ebi Sake", description: "krewetka w panko, łosoś, ogórek, awokado, sałata, szczypiorkowy mayo – szczypiorek", price: "38 zł", image: "images/Futomaki_zdjecia/8.png" },
  { name: "Sake Tatar", description: "tatar z łososia, ogórek, awokado, serek wasabi – szczypiorek", price: "32 zł", image: "images/Futomaki_zdjecia/9.png" },
  { name: "Tara Ten", description: "dorsz w panko, ogórek, awokado, sałata, oshinko, serek wasabi", price: "30 zł", image: "images/Futomaki_zdjecia/10.png" },
  { name: "Sparkling Tuna", description: "tatar z tuńczyka, ogórek, oshinko, spicy mayo – biały sezam", price: "36 zł", image: "images/Futomaki_zdjecia/11.png" },
  { name: "Chicken Kaarage 🐔", description: "kurczak w panko, ogórek, awokado, sałata, orzechowy mayo – orzechy ziemne", price: "29 zł", image: "images/Futomaki_zdjecia/12.png" },
  { name: "Jakana Dill", description: "łosoś z sojowo-koperkowej zalewy, ogórek, awokado, marynowana czerwona cebula, shitake, serek – koperek", price: "32 zł", image: "images/Futomaki_zdjecia/13.png" },
  { name: "Sweet Veggie 🍃", description: "batat, ogórek, awokado, sałata, oshinko, marynowana tykwa, marynowana czerwona cebula, serek – sos kabayaki", price: "26 zł", image: "images/Futomaki_zdjecia/14.png" },
  { name: "Midori Ten 🍃", description: "szparag w tempurze, ogórek, awokado, sałata, groszek cukrowy, szczypiorkowy mayo – szczypiorek", price: "26 zł", image: "images/Futomaki_zdjecia/15.png" }
];

const futomakiContainer = document.getElementById("futomaki-container");

futomaki.forEach(item => {
  const card = document.createElement("div");
  card.className = `
    group bg-white rounded-2xl border border-gray-200 shadow-md
    p-5 w-[90%] max-w-[420px] text-center
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
  `;
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="mb-4 rounded-xl w-full object-cover transition-transform duration-300 group-hover:scale-105">
    <h3 class="text-xl font-semibold">${item.name}</h3>
    <p class="text-gray-500 text-sm mt-1 leading-relaxed">${item.description}</p>
    <p class="text-red-600 font-bold text-lg mt-2">${item.price}</p>
  `;
  futomakiContainer.appendChild(card);
});

const kaburamaki = [
  {
    name: "EBI Sake Tatar",
    description: "krewetka w panko, ogórek, awokado, spicy mayo – tatar z łososia, szczypiorek",
    price: "47 zł",
    image: "images/Kaburamaki_zdjecia/1.png"
  },
  {
    name: "EBI Mango Roll",
    description: "krewetka w panko, ogórek, awokado, spicy mayo - salsa mango, pistacje, pulpa mango",
    price: "47 zł",
    image: "images/Kaburamaki_zdjecia/2.png"
  },
  {
    name: "Rainbow Roll",
    description: "krewetka w panko, ogórek, awokado, szczypiorkowy mayo - łosoś, tuńczyk, krewetka, awokado",
    price: "49 zł",
    image: "images/Kaburamaki_zdjecia/3.png"
  },
  {
    name: "Awokado Special Roll",
    description: "krewetka w panko, ogórek, awokado, spicy mayo - awokado, sos kabayaki, mix sezam",
    price: "45 zł",
    image: "images/Kaburamaki_zdjecia/4.png"
  },
  {
    name: "Sake Special Roll",
    description: "ogórek, awokado, szparag w tempurze, serek szczypiorkowy - łosoś opalany, czosnek",
    price: "45 zł",
    image: "images/Kaburamaki_zdjecia/5.png"
  },
  {
    name: "Double Tuna Roll 🌶️",
    description: "tuńczyk, ogórek, awokado, spicy mayo - tuńczyk, kizami wasabi",
    price: "51 zł",
    image: "images/Kaburamaki_zdjecia/6.png"
  },
  {
    name: "Jakana Special Roll",
    description: "ogórek, awokado, groszek cukrowy, serek – łosoś z sojowo-koperkowej zalewy, marynowana czerwona cebula, shitake, koperek",
    price: "45 zł",
    image: "images/Kaburamaki_zdjecia/7.png"
  }
];

const kaburamakiContainer = document.getElementById("kaburamaki-container");

kaburamaki.forEach(item => {
  const card = document.createElement("div");
  card.className = `
    group bg-white rounded-2xl border border-gray-200 shadow-md
    p-5 w-[90%] max-w-[420px] text-center
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
  `;
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="mb-4 rounded-xl w-full object-cover transition-transform duration-300 group-hover:scale-105">
    <h3 class="text-xl font-semibold">${item.name}</h3>
    <p class="text-gray-500 text-sm mt-1 leading-relaxed">${item.description}</p>
    <p class="text-red-600 font-bold text-lg mt-2">${item.price}</p>
  `;
  kaburamakiContainer.appendChild(card);
});

const nigiri = [
  {
    name: "SAKE",
    description: "łosoś",
    price: "12 zł",
    image: "images/Nigiri_zdjecia/2.png"
  },
  {
    name: "SAKE YAKI",
    description: "łosoś opalany",
    price: "12 zł",
    image: "images/Nigiri_zdjecia/1.png"
  },
  {
    name: "MAGURO",
    description: "tuńczyk",
    price: "13 zł",
    image: "images/Nigiri_zdjecia/3.png"
  },
  {
    name: "EBI",
    description: "krewetka",
    price: "14 zł",
    image: "images/Nigiri_zdjecia/4.png"
  },
  {
    name: "AWOKADO🍃",
    description: "awokado",
    price: "11 zł",
    image: "images/Nigiri_zdjecia/5.png"
  },
];

const nigiriContainer = document.getElementById("nigiri-container");

nigiri.forEach(item => {
  const card = document.createElement("div");
  card.className = `
    group bg-white rounded-2xl border border-gray-200 shadow-md
    p-5 w-[90%] max-w-[420px] text-center
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
  `;
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="mb-4 rounded-xl w-full object-cover transition-transform duration-300 group-hover:scale-105">
    <h3 class="text-xl font-semibold">${item.name}</h3>
    <p class="text-gray-500 text-sm mt-1 leading-relaxed">${item.description}</p>
    <p class="text-red-600 font-bold text-lg mt-2">${item.price}</p>
  `;
  nigiriContainer.appendChild(card);
});

const uramaki = [
  {
    name: "SAKE ROLL",
    description: "łosoś, ogórek, awokado, sałata, serek – biały sezam",
    price: "32 zł",
    image: "images/Uramaki_zdjecia/1.png"
  },
  {
    name: "SAKE YAKI ROLL",
    description: "łosoś pieczony, ogórek, awokado, marynowana tykwa, szczypiorkowy mayo – szczypiorek",
    price: "32 zł",
    image: "images/Uramaki_zdjecia/2.png"
  },
  {
    name: "MAGURO ROLL",
    description: "tuńczyk, ogórek, oshinko, spicy mayo – kimchi sezam",
    price: "36 zł",
    image: "images/Uramaki_zdjecia/3.png"
  },
  {
    name: "CRISPY EBI",
    description: "krewetka w panko, ogórek, awokado, spicy mayo – mix sezam",
    price: "37 zł",
    image: "images/Uramaki_zdjecia/4.png"
  },
  {
    name: "EBI NUTTY",
    description: "krewetka w panko, ogórek, awokado, orzechowy mayo – orzeszki ziemne",
    price: "36 zł",
    image: "images/Uramaki_zdjecia/5.png"
  },
  {
    name: "SAKE NUTTY",
    description: "łosoś w tempurze, ogórek, awokado, serek – pistacje",
    price: "35 zł",
    image: "images/Uramaki_zdjecia/6.png"
  },
  {
    name: "CRUNCHY MAGURO",
    description: "tuńczyk w panko, ogórek, oshinko, spicy mayo – kataifii, sos kabayaki",
    price: "37 zł",
    image: "images/Uramaki_zdjecia/7.png"
  },
  {
    name: "YASAI ROLL🍃",
    description: "szparag w tempurze, ogórek, awokado, marynowana tykwa, marynowana czerwona cebula - szczypiorek i biały sezam",
    price: "28 zł",
    image: "images/Uramaki_zdjecia/8.png"
  },
  {
    name: "CRUNCHY CHICKEN🌶️",
    description: "kurczak w panko, ogórek, awokado, spicy mayo – kataifii, crunchy chilli",
    price: "31 zł",
    image: "images/Uramaki_zdjecia/9.png"
  },
  {
    name: "CALIFORNIA ROLL",
    description: "krewetka gotowana, ogórek, awokado, groszek cukrowy, serek wasabi - tobiko pomarańczowe, mix sezam",
    price: "38 zł",
    image: "images/Uramaki_zdjecia/10.png"
  },
  {
    name: "TARA ROLL",
    description: "dorsz w panko, ogórek, oshinko, serek szczypiorkowy – sezam czarny",
    price: "32 zł",
    image: "images/Uramaki_zdjecia/11.png"
  },
];

const uramakiContainer = document.getElementById("uramaki-container");

uramaki.forEach(item => {
  const card = document.createElement("div");
  card.className = `
    group bg-white rounded-2xl border border-gray-200 shadow-md
    p-5 w-[90%] max-w-[420px] text-center
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
  `;
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="mb-4 rounded-xl w-full object-cover transition-transform duration-300 group-hover:scale-105">
    <h3 class="text-xl font-semibold">${item.name}</h3>
    <p class="text-gray-500 text-sm mt-1 leading-relaxed">${item.description}</p>
    <p class="text-red-600 font-bold text-lg mt-2">${item.price}</p>
  `;
  uramakiContainer.appendChild(card);
});

const hosomaki = [
  {
    name: "SAKE MAKI",
    description: "łosoś",
    price: "17 zł",
    image: "images/Hosomaki_zdjecia/7.png"
  },
  {
    name: "EBI MAKI",
    description: "krewetka",
    price: "19 zł",
    image: "images/Hosomaki_zdjecia/6.png"
  },
  {
    name: "NEGI MAGURO MAKI",
    description: "tuńczyk",
    price: "19 zł",
    image: "images/Hosomaki_zdjecia/5.png"
  },
  {
    name: "VEGE MAKI – OGÓREK🍃",
    description: "ogórek",
    price: "15 zł",
    image: "images/Hosomaki_zdjecia/1.png"
  },
  {
    name: "VEGE MAKI – AWOKADO🍃",
    description: "awokado",
    price: "15 zł",
    image: "images/Hosomaki_zdjecia/4.png"
  },
  {
    name: "VEGE MAKI – TYKWA🍃",
    description: "tykwa",
    price: "15 zł",
    image: "images/Hosomaki_zdjecia/2.png"
  },
  {
    name: "VEGE MAKI – OSHINKO🍃",
    description: "oshinko",
    price: "15 zł",
    image: "images/Hosomaki_zdjecia/3.png"
  }
];

const hosomakiContainer = document.getElementById("hosomaki-container");

hosomaki.forEach(item => {
  const card = document.createElement("div");
  card.className = `
    group bg-white rounded-2xl border border-gray-200 shadow-md
    p-5 w-[90%] max-w-[420px] text-center
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
  `;
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="mb-4 rounded-xl w-full object-cover transition-transform duration-300 group-hover:scale-105">
    <h3 class="text-xl font-semibold">${item.name}</h3>
    <p class="text-gray-500 text-sm mt-1 leading-relaxed">${item.description}</p>
    <p class="text-red-600 font-bold text-lg mt-2">${item.price}</p>
  `;
  hosomakiContainer.appendChild(card);
});

const desserts = [
  { name: "Sernik Yuzu", description: "japoński sernik na zimno", price: "15 zł", image: "images/Desery_zdjecia/1.jpg" }
];

const dessertsContainer = document.getElementById("desserts-container");

desserts.forEach(item => {
  const card = document.createElement("div");
  card.className = `
    group bg-white rounded-2xl border border-gray-200 shadow-md
    p-5 w-[90%] max-w-[420px] text-center
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
  `;
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="mb-4 rounded-xl h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105">
    <h3 class="text-xl font-semibold">${item.name}</h3>
    <p class="text-gray-500 text-sm mt-1 leading-relaxed">${item.description}</p>
    <p class="text-red-600 font-bold text-lg mt-2">${item.price}</p>
  `;
  dessertsContainer.appendChild(card);
});

const sauces = [
  { name: "Sos kabayaki", price: "2 zł" },
  { name: "Sos spice mayo", price: "2 zł" },
  { name: "Sos szczypiorkowy mayo", price: "2 zł" },
  { name: "Sos sweet chili", price: "2 zł" },
  { name: "Sos kyoto", price: "2 zł" },
  { name: "Sos sriracha", price: "3 zł" },
  { name: "Pulpa mango", price: "2 zł" },
  { name: "Tobiko", price: "8 zł" },
  { name: "Kizami wasabi", price: "10 zł" }
];

const saucesContainer = document.getElementById("sauces-container");

sauces.forEach(item => {
  const card = document.createElement("div");
  card.className = `
    bg-white rounded-2xl border border-gray-200 shadow-md
    p-5 w-[90%] max-w-[420px] text-center
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
  `;
  card.innerHTML = `
    <h3 class="text-xl font-semibold">${item.name}</h3>
    <p class="text-red-600 font-bold text-lg mt-2">${item.price}</p>
  `;
  saucesContainer.appendChild(card);
});

const galleryTrack = document.getElementById("gallery-track");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

// Lista zdjęć
const galleryImages = [
  "images/Galeria_zdjecia/1.png",
  "images/Galeria_zdjecia/2.jpg",
  "images/Galeria_zdjecia/2.png",
  "images/Galeria_zdjecia/3.png",
  "images/Galeria_zdjecia/5.jpg",
  "images/Galeria_zdjecia/6.jpeg",
  "images/Galeria_zdjecia/6.jpg",
  "images/Galeria_zdjecia/7.jpeg",
  "images/Galeria_zdjecia/8.jpeg",
  "images/Galeria_zdjecia/11.jpeg",
  "images/Galeria_zdjecia/11.jpg",
  "images/Galeria_zdjecia/12.jpeg",
  "images/Galeria_zdjecia/12.jpg",
  "images/Galeria_zdjecia/13.jpeg",
  "images/Galeria_zdjecia/14.jpeg",
  "images/Galeria_zdjecia/14.jpg",
  "images/Galeria_zdjecia/15.jpeg",
  "images/Galeria_zdjecia/15.jpg",
  "images/Galeria_zdjecia/16.jpg",
  "images/Galeria_zdjecia/18.jpeg",
  "images/Galeria_zdjecia/19.jpg",
  "images/Galeria_zdjecia/19.jpeg",
  "images/Galeria_zdjecia/21.jpg",
  "images/Galeria_zdjecia/21.jpeg",
  "images/Galeria_zdjecia/22.jpg",
  "images/Galeria_zdjecia/23.jpeg",
  "images/Galeria_zdjecia/24.jpeg",
  "images/Galeria_zdjecia/27.jpeg",
  "images/Galeria_zdjecia/28.jpeg",
  "images/Galeria_zdjecia/29.jpeg",
  "images/Galeria_zdjecia/30.jpeg",
  "images/Galeria_zdjecia/31.jpeg",
  "images/Galeria_zdjecia/32.jpg",
  "images/Galeria_zdjecia/33.jpg",
];

// Wczytywanie zdjęć
galleryImages.forEach(src => {
  const slide = document.createElement("div");
  slide.className = "min-w-full sm:min-w-[50%] md:min-w-[33.333%] px-2";
  slide.innerHTML = `
    <img src="${src}" loading="lazy"
      class="
        w-full
        aspect-[3/4] md:aspect-[2/3]
        object-contain sm:object-cover
        rounded-2xl shadow-lg
        bg-gray-100
      ">
  `;
  galleryTrack.appendChild(slide);
});

let currentIndex = 0;

// Ile slajdów widać naraz
function getVisibleSlides() {
  if (window.innerWidth >= 768) return 3;   // md
  if (window.innerWidth >= 640) return 2;   // sm
  return 1;                                 // mobile
}

function updateSlider() {
  const slideWidth = galleryTrack.children[0].offsetWidth;
  galleryTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  const visibleSlides = getVisibleSlides();
  const maxIndex = galleryTrack.children.length - visibleSlides;

  // Blokady strzałek
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= maxIndex;
}

// Kliknięcia
nextBtn.addEventListener("click", () => {
  const maxIndex = galleryTrack.children.length - getVisibleSlides();
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Responsywność
window.addEventListener("resize", () => {
  currentIndex = Math.min(currentIndex, galleryTrack.children.length - getVisibleSlides());
  updateSlider();
});

// Start
updateSlider();

//Wyjechanie do góry strzałka
const scrollTopBtn = document.getElementById("scrollTopBtn");

scrollTopBtn.addEventListener("click", () => {
  smoothScrollToTop(2500);
});

function smoothScrollToTop(duration) {
  const start = window.scrollY;
  const startTime = performance.now();
  const floatPx = 20; // delikatny float (px)

  function scroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // cinematic ultra-soft easing
    const ease = progress < 0.5
      ? 8 * Math.pow(progress, 4)
      : 1 - Math.pow(-2 * progress + 2, 4) / 2;

    // pozycja bazowa
    let position = start * (1 - ease);

    // floating finish (ostatnie 15%)
    if (progress > 0.85) {
      const floatProgress = (progress - 0.85) / 0.15;
      position -= Math.sin(floatProgress * Math.PI) * floatPx;
    }

    window.scrollTo(0, Math.max(position, 0));

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}

// WYBOR MENU
const menuSelect = document.getElementById("menuSelect");

function smoothScrollTo(target, duration = 1000) {
  const start = window.pageYOffset;
  const end = target.getBoundingClientRect().top + start - 80; 
  const distance = end - start;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

menuSelect.addEventListener("change", () => {
  const targetId = menuSelect.value;
  if (!targetId) return;

  const targetSection = document.getElementById(targetId);
  if (!targetSection) return;

  smoothScrollTo(targetSection, 1200); 
});





