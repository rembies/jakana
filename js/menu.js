// Generowanie zestawów
const zestawyItems = [
  { name: "HITORI", price: 61, path: "Post_nr_2_zestawy/hitori.jpg" },
  { name: "FUTARI", price: 112, path: "Post_nr_2_zestawy/futari.jpg" },
  { name: "FUTARI YAKITORI", price: 119, path: "Post_nr_2_zestawy/futari yakatori.jpg" },
  { name: "FUTARI MIDORI", price: 98, path: "Post_nr_2_zestawy/futari midori.jpg" },
  { name: "KIZUNA", price: 154, path: "Post_nr_2_zestawy/kizuna.jpg" },
  { name: "URAMAKI TRIO", price: 119, path: "Post_nr_2_zestawy/uramaki trio.jpg" },
  { name: "URAMAKI TRIO PREMIUM", price: 159, path: "Post_nr_2_zestawy/uramaki trio premium.jpg" },
  { name: "KAZOKU", price: 229, path: "Post_nr_2_zestawy/kazoku.jpg" },
  { name: "JAKANA PARTY", price: 279, path: "Post_nr_2_zestawy/jakana party.jpg" },
  { name: "TAKUSAN", price: 369, path: "Post_nr_2_zestawy/takusan.jpg" }
];

const zestawyContainer = document.getElementById("zestawy-container");

zestawyItems.forEach(item => {

  const div = document.createElement("div");

  div.className = `
    group
    w-[92%] sm:w-[50%] md:w-[45%] lg:w-[36%]
    max-w-[430px]
    bg-white rounded-2xl p-6 border border-gray-200 shadow-md
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
    cursor-pointer
  `;

  div.innerHTML = `
    <div class="w-full overflow-hidden rounded-xl">
      <img
        src="images/${item.path}"
        alt="${item.name}"
        class="
          w-full
          h-64
          object-contain
          transition-transform duration-300
          group-hover:scale-105
        "
      >
    </div>

    <h4 class="text-2xl font-semibold text-gray-800 text-center mt-4">
      ${item.name}
    </h4>

    <p class="text-red-600 font-bold text-2xl text-center mt-2">
      ${item.price} zł
    </p>
  `;

  zestawyContainer.appendChild(div);

});

const lunches = [
  { name: "Klasyczny", price: 45, description: "Futomak Sake Philadelphia, Nigiri Sake, Sajgonki XL 2 szt., Goma Wakame.", images: ["images/Lunch_zdjecia/1.jpg"] },
  { name: "Pieczony", price: 45, description: "Futomak Sake Kabayaki, Nigiri Sake Yaki, Sajgonki XL 2 szt., Goma Wakame.", images: ["images/Lunch_zdjecia/2.jpg"] },
  { name: "Wegetariański", price: 45, description: "Futomak Sweet Veggie, Nigiri Awokado, Sajgonki XL 2 szt., Goma Wakame.", images: ["images/Lunch_zdjecia/3.jpg"] }
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
    price: "16 zł",
    veggie: true,
    image: "images/Przystawki_zdjecia/1.jpg"
  },
  {
    name: "Pierożki Gyoza",
    details: "6 szt. – warzywa",
    price: "16 zł",
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
    details: "6 szt",
    price: "35 zł",
    veggie: false,
    image: "images/Przystawki_zdjecia/3.jpg"
  },
  {
    name: "Kani Maru - kuleczki krabowe",
    details: "6 szt",
    price: "30 zł",
    veggie: false,
    image: "images/Przystawki_zdjecia/kuleczki.jpg"
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

const pokeBowls = [
  { 
    name: "Fish Bowl", 
    price: "45 zł", 
    image: "images/Bowl_zdjecia/fish bowl 45zl.jpg" 
  },
  { 
    name: "Shrimp Bowl", 
    price: "49 zł", 
    image: "images/Bowl_zdjecia/shrimp bowl 49zl.jpg" 
  },
  { 
    name: "Chicken Bowl", 
    price: "43 zł", 
    image: "images/Bowl_zdjecia/chicken bowl 43zl.jpg" 
  }
];

const pokeContainer = document.getElementById("poke-container");

pokeBowls.forEach(item => {
  const card = document.createElement("div");

  card.className = `
    group bg-white rounded-2xl border border-gray-200 shadow-md
    p-6
    w-[92%] sm:w-[50%] md:w-[45%] lg:w-[36%]
    max-w-[430px]
    text-center
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
  `;

  card.innerHTML = `
    <div class="w-full overflow-hidden rounded-xl">
      <img 
        src="${item.image}" 
        alt="${item.name}" 
        class="
          w-full
          h-64
          object-contain
          transition-transform duration-300
          group-hover:scale-105
        "
      >
    </div>

    <h3 class="text-2xl font-semibold text-gray-800 mt-4">
      ${item.name}
    </h3>

    <p class="text-red-600 font-bold text-2xl mt-2">
      ${item.price}
    </p>
  `;

  pokeContainer.appendChild(card);
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
  { name: "Sake Philadelphia", description: "łosoś, ogórek, awokado, sałata, serek", price: "32 zł", image: "images/Futomaki_zdjecia/1.jpg" },
  { name: "Sake Kabayaki", description: "łosoś pieczony, ogórek, awokado, sałata, marynowana tykwa, serek - sos kabayaki", price: "32 zł", image: "images/Futomaki_zdjecia/2.jpg" },
  { name: "Sake Ten", description: "łosoś w tempurze, ogórek, awokado, mango, spicy mayo – pulpa mango", price: "33 zł", image: "images/Futomaki_zdjecia/3.jpg" },
  { name: "Maguro Philadelphia", description: "tuńczyk, ogórek, awokado, sałata, oshinko, serek", price: "36 zł", image: "images/Futomaki_zdjecia/4.jpg" },
  { name: "Maguro Ten", description: "tuńczyk w panko, ogórek, awokado, oshinko, spicy mayo – sos kabayaki", price: "37 zł", image: "images/Futomaki_zdjecia/5.jpg" },
  { name: "Spicy Maguro 🌶️", description: "tuńczyk, ogórek, awokado, sałata, oshinko, chilli, serek wasabi – kizami wasabi", price: "37 zł", image: "images/Futomaki_zdjecia/6.jpg" },
  { name: "Ebi Panko", description: "krewetka w panko, ogórek, awokado, mango, tobiko, spicy mayo – pulpa mango", price: "37 zł", image: "images/Futomaki_zdjecia/7.jpg" },
  { name: "Ebi Sake", description: "krewetka w panko, łosoś, ogórek, awokado, sałata, szczypiorkowy mayo – szczypiorek", price: "40 zł", image: "images/Futomaki_zdjecia/8.jpg" },
  { name: "Sake Tatar", description: "tatar z łososia, ogórek, awokado, serek wasabi – szczypiorek", price: "34 zł", image: "images/Futomaki_zdjecia/9.jpg" },
  { name: "Tara Ten", description: "dorsz w panko, ogórek, awokado, sałata, oshinko, serek wasabi", price: "32 zł", image: "images/Futomaki_zdjecia/10.jpg" },
  { name: "Unagi Kabayaki", description: "węgorz, ogórek, awokado, sałata, marynowana czerwona cebula, serek - sos kabayaki", price: "38 zł", image: "images/Futomaki_zdjecia/kabayaki.jpg" },
  { name: "Chicken Kaarage 🐔", description: "kurczak w panko, ogórek, awokado, sałata, orzechowy mayo – orzechy ziemne", price: "31 zł", image: "images/Futomaki_zdjecia/12.jpg" },
  { name: "Jakana Dill", description: "łosoś z sojowo-koperkowej zalewy, ogórek, awokado, marynowana czerwona cebula, shitake, serek – koperek", price: "34 zł", image: "images/Futomaki_zdjecia/13.jpg" },
  { name: "Sweet Veggie 🍃", description: "batat, ogórek, awokado, sałata, oshinko, marynowana tykwa, marynowana czerwona cebula, serek – sos kabayaki", price: "28 zł", image: "images/Futomaki_zdjecia/14.jpg" },
  { name: "Midori Ten 🍃", description: "szparag w tempurze, ogórek, awokado, sałata, marynowane grzyby shitake, szczypiorkowe mayo - szczypiorek", price: "28 zł", image: "images/Futomaki_zdjecia/15.jpg" },
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
    <img src="${item.image}" alt="${item.name}" class="mb-4 rounded-xl h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105">
    <h3 class="text-xl font-semibold">${item.name}</h3>
    <p class="text-gray-500 text-sm mt-1 leading-relaxed">${item.description}</p>
    <p class="text-red-600 font-bold text-lg mt-2">${item.price}</p>
  `;
  futomakiContainer.appendChild(card);
});

const kaburamaki = [
  {
    name: "Ebi Sake Tatar",
    description: "krewetka w panko, ogórek, awokado, spicy mayo – tatar z łososia, szczypiorek",
    price: "49 zł",
    image: "images/Kaburamaki_zdjecia/1.jpg"
  },
  {
    name: "Ebi Mango Roll",
    description: "krewetka w panko, ogórek, awokado, spicy mayo - salsa mango, pistacje, pulpa mango",
    price: "49 zł",
    image: "images/Kaburamaki_zdjecia/2.jpg"
  },
  {
    name: "Rainbow Roll",
    description: "krewetka w panko, ogórek, awokado, szczypiorkowy mayo - łosoś, tuńczyk, krewetka, awokado",
    price: "51 zł",
    image: "images/Kaburamaki_zdjecia/3.jpg"
  },
  {
    name: "Awokado Special Roll",
    description: "krewetka w panko, ogórek, awokado, spicy mayo - awokado, sos kabayaki, mix sezam",
    price: "47 zł",
    image: "images/Kaburamaki_zdjecia/awokado_special.jpg"
  },
  {
    name: "Sake Special Roll",
    description: "szparag w tempurze, ogórek, awokado, szczypiorkowe mayo - łosoś opalany, szczypiorek",
    price: "47 zł",
    image: "images/Kaburamaki_zdjecia/sake_special.jpg"
  },
  {
    name: "Unagi Maguro Roll",
    description: "węgorz, ogórek, awokado, serek wasabi - tuńczyk opalany, sos kabayaki, spice mayo, zielona cebulkai",
    price: "51 zł",
    image: "images/Kaburamaki_zdjecia/unagi.jpg"
  },
  {
    name: "Jakana Special Roll",
    description: "górek, awokado, marynowana czerwona cebulka, shitake, serek - losoś z sojowo- koperkowej zalewy, koperek ",
    price: "47 zł",
    image: "images/Kaburamaki_zdjecia/7.jpg"
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
    <img
      src="${item.image}"
      alt="${item.name}"
      class="mb-4 w-full h-80 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
    >

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
    image: "images/Nigiri_zdjecia/2.jpg"
  },
  {
    name: "SAKE YAKI",
    description: "łosoś opalany",
    price: "12 zł",
    image: "images/Nigiri_zdjecia/1.jpg"
  },
  {
    name: "MAGURO",
    description: "tuńczyk",
    price: "13 zł",
    image: "images/Nigiri_zdjecia/3.jpg"
  },
  {
    name: "EBI",
    description: "krewetka",
    price: "14 zł",
    image: "images/Nigiri_zdjecia/4.jpg"
  },
  {
    name: "AWOKADO 🍃",
    description: "awokado",
    price: "11 zł",
    image: "images/Nigiri_zdjecia/5.jpg"
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
    <img src="${item.image}" alt="${item.name}" class="mb-4 h-80 rounded-xl w-full object-cover transition-transform duration-300 group-hover:scale-105">
    <h3 class="text-xl font-semibold">${item.name}</h3>
    <p class="text-gray-500 text-sm mt-1 leading-relaxed">${item.description}</p>
    <p class="text-red-600 font-bold text-lg mt-2">${item.price}</p>
  `;
  nigiriContainer.appendChild(card);
});

const uramaki = [
  {
    name: "SAKE ROLL",
    description: "łosoś, ogórek, awokado, serek – biały sezam",
    price: "34 zł",
    image: "images/Uramaki_zdjecia/1.jpg"
  },
  {
    name: "SAKE YAKI ROLL",
    description: "łosoś pieczony, ogórek, awokado, marynowana tykwa, szczypiorkowy mayo – szczypiorek",
    price: "34 zł",
    image: "images/Uramaki_zdjecia/2.jpg"
  },
  {
    name: "MAGURO ROLL",
    description: "tuńczyk, ogórek, oshinko, spice mayo - szczypiorek, czarny sezam ",
    price: "38 zł",
    image: "images/Uramaki_zdjecia/maguro roll.jpg"
  },
  {
    name: "CRISPY EBI",
    description: "krewetka w panko, ogórek, awokado, spicy mayo – mix sezam",
    price: "38 zł",
    image: "images/Uramaki_zdjecia/4.jpg"
  },
  {
    name: "EBI NUTTY",
    description: "krewetka w panko, ogórek, awokado, orzechowy mayo – orzeszki ziemne",
    price: "38 zł",
    image: "images/Uramaki_zdjecia/5.jpg"
  },
  {
    name: "SAKE NUTTY",
    description: "łosoś w tempurze, ogórek, awokado, serek – pistacje",
    price: "37 zł",
    image: "images/Uramaki_zdjecia/6.jpg"
  },
  {
    name: "CRUNCHY MAGURO",
    description: "tuńczyk w panko, ogórek, oshinko, spicy mayo – kataifii, sos kabayaki",
    price: "39 zł",
    image: "images/Uramaki_zdjecia/7.jpg"
  },
  {
    name: "YASAI ROLL 🍃",
    description: "szparag w tempurze, ogórek, awokado, marynowana tykwa, marynowana czerwona cebula, szczypiorkowe mayo - szczypiorek, biały sezam",
    price: "30 zł",
    image: "images/Uramaki_zdjecia/8.jpg"
  },
  {
    name: "CRUNCHY CHICKEN 🌶️",
    description: "kurczak w panko, ogórek, awokado, spicy mayo – kataifii, crunchy chilli",
    price: "33 zł",
    image: "images/Uramaki_zdjecia/9.jpg"
  },
  {
    name: "CALIFORNIA ROLL",
    description: "krewetka gotowana, ogórek, awokado, serek wasabi - tobiko pomarańczowe, mix sezam",
    price: "40 zł",
    image: "images/Uramaki_zdjecia/10.jpg"
  },
  {
    name: "TARA ROLL",
    description: "dorsz w panko, ogórek, oshinko, serek wasabi – sezam czarny",
    price: "34 zł",
    image: "images/Uramaki_zdjecia/11.jpg"
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
    <img
      src="${item.image}"
      alt="${item.name}"
      class="mb-4 w-full h-80 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
    >

    <h3 class="text-xl font-semibold">${item.name}</h3>
    <p class="text-gray-500 text-sm mt-1 leading-relaxed">${item.description}</p>
    <p class="text-red-600 font-bold text-lg mt-2">${item.price}</p>
  `;

  uramakiContainer.appendChild(card);
});

const hosomaki = [
  {
    name: "VEGE MAKI – OGÓREK 🍃",
    description: "ogórek",
    price: "15 zł",
    image: "images/Hosomaki_zdjecia/1.jpg"
  },
  {
    name: "VEGE MAKI – AWOKADO 🍃",
    description: "awokado",
    price: "15 zł",
    image: "images/Hosomaki_zdjecia/4.jpg"
  },
  {
    name: "VEGE MAKI – TYKWA 🍃",
    description: "tykwa",
    price: "15 zł",
    image: "images/Hosomaki_zdjecia/2.jpg"
  },
  {
    name: "VEGE MAKI – OSHINKO 🍃",
    description: "oshinko",
    price: "15 zł",
    image: "images/Hosomaki_zdjecia/3.jpg"
  },
  {
    name: "SAKE MAKI",
    description: "łosoś",
    price: "17 zł",
    image: "images/Hosomaki_zdjecia/7.jpg"
  },
  {
    name: "EBI MAKI",
    description: "krewetka",
    price: "19 zł",
    image: "images/Hosomaki_zdjecia/6.jpg"
  },
  {
    name: "NEGI MAGURO MAKI",
    description: "tuńczyk",
    price: "19 zł",
    image: "images/Hosomaki_zdjecia/5.jpg"
  },
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

const sauces = [
  { name: "Sos kabayaki, sos sojowy", price: "2 zł" },
  { name: "Sos spice mayo", price: "3 zł" },
  { name: "Sos szczypiorkowy mayo", price: "3 zł" },
  { name: "Sos sweet chili", price: "3 zł" },
  { name: "Sos kani maru", price: "3 zł" },
  { name: "Sos orzechowy mayo", price: "3 zł" },
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
  "images/Galeria_zdjecia/1.jpg",
  "images/Galeria_zdjecia/3.jpg",
  "images/Galeria_zdjecia/4.jpg",
  "images/Galeria_zdjecia/5.jpg",
  "images/Galeria_zdjecia/6.jpg",
  "images/Galeria_zdjecia/7.jpg",
  "images/Galeria_zdjecia/8.jpg",
  "images/Galeria_zdjecia/9.jpg",
  "images/Galeria_zdjecia/10.jpg",
  "images/Galeria_zdjecia/11.jpg",
  "images/Galeria_zdjecia/12.jpg",
  "images/Galeria_zdjecia/13.jpg",
  "images/Galeria_zdjecia/14.jpg",
  "images/Galeria_zdjecia/15.jpg",
  "images/Galeria_zdjecia/16.jpg",
  "images/Galeria_zdjecia/17.jpg",
  "images/Galeria_zdjecia/18.jpg",
  "images/Galeria_zdjecia/19.jpg",
  "images/Galeria_zdjecia/20.jpg",
  "images/Galeria_zdjecia/21.jpg",
  "images/Galeria_zdjecia/22.jpg",
  "images/Galeria_zdjecia/23.jpg",
  "images/Galeria_zdjecia/24.jpg",
  "images/Galeria_zdjecia/25.jpg",
  "images/Galeria_zdjecia/26.jpg",
  "images/Galeria_zdjecia/27.jpg",
  "images/Galeria_zdjecia/28.jpg",
  "images/Galeria_zdjecia/29.jpg",
  "images/Galeria_zdjecia/30.jpg",
  "images/Galeria_zdjecia/31.jpg",
  "images/Galeria_zdjecia/32.jpg",
  "images/Galeria_zdjecia/33.jpg",
  "images/Galeria_zdjecia/34.jpg",
  "images/Galeria_zdjecia/35.jpg",
  "images/Galeria_zdjecia/36.jpg",
  "images/Galeria_zdjecia/37.jpg",
  "images/Galeria_zdjecia/38.jpg",
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





