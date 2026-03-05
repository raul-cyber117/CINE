"use strict";

// Datos base de funciones de cine. Cada película tiene precio en GTQ y poster por enlace.
const movies = [
  {
    id: "dune2",
    title: "Dune: Parte Dos",
    schedule: "18:30",
    priceGtq: 55,
    poster: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg"
  },
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    schedule: "20:00",
    priceGtq: 48,
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg"
  },
  {
    id: "insideout2",
    title: "IntensaMente 2",
    schedule: "16:45",
    priceGtq: 42,
    poster: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg"
  },
  {
    id: "spiderverse",
    title: "Spider-Man: Across the Spider-Verse",
    schedule: "19:15",
    priceGtq: 52,
    poster: "https://upload.wikimedia.org/wikipedia/en/f/f3/Spider-Man_Across_the_Spider-Verse_poster.jpg"
  },
  // Catalogo ampliado: +20 peliculas para ofrecer mas variedad de horarios y precios.
  {
    id: "avatar2",
    title: "Avatar: The Way of Water",
    schedule: "15:50",
    priceGtq: 54,
    poster: "https://upload.wikimedia.org/wikipedia/en/9/9a/Avatar_The_Way_of_Water_poster.jpg"
  },
  {
    id: "thebatman",
    title: "The Batman",
    schedule: "21:10",
    priceGtq: 50,
    poster: "https://upload.wikimedia.org/wikipedia/en/8/87/The_Batman_%28film%29_poster.jpg"
  },
  {
    id: "topgunm",
    title: "Top Gun: Maverick",
    schedule: "17:20",
    priceGtq: 49,
    poster: "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg"
  },
  {
    id: "barbie",
    title: "Barbie",
    schedule: "14:40",
    priceGtq: 44,
    poster: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg"
  },
  {
    id: "mario",
    title: "Super Mario Bros. La Pelicula",
    schedule: "13:30",
    priceGtq: 41,
    poster: "https://upload.wikimedia.org/wikipedia/en/4/44/The_Super_Mario_Bros._Movie_poster.jpg"
  },
  {
    id: "jw4",
    title: "John Wick 4",
    schedule: "22:00",
    priceGtq: 53,
    poster: "https://upload.wikimedia.org/wikipedia/en/d/dc/John_Wick_Chapter_4.jpg"
  },
  {
    id: "mi7",
    title: "Mision Imposible: Sentencia Mortal",
    schedule: "18:05",
    priceGtq: 51,
    poster: "https://upload.wikimedia.org/wikipedia/en/2/2b/Mission_Impossible_-_Dead_Reckoning_Part_One_Poster.jpg"
  },
  {
    id: "gotg3",
    title: "Guardianes de la Galaxia Vol. 3",
    schedule: "20:40",
    priceGtq: 50,
    poster: "https://upload.wikimedia.org/wikipedia/en/7/74/Guardians_of_the_Galaxy_Vol._3_poster.jpg"
  },
  {
    id: "wonka",
    title: "Wonka",
    schedule: "16:10",
    priceGtq: 43,
    poster: "https://upload.wikimedia.org/wikipedia/en/4/42/Wonka_film_poster.jpg"
  },
  {
    id: "hungergames",
    title: "Balada de Pajaros Cantores y Serpientes",
    schedule: "19:45",
    priceGtq: 48,
    poster: "https://upload.wikimedia.org/wikipedia/en/7/76/The_Hunger_Games_The_Ballad_of_Songbirds_%26_Snakes_poster.jpg"
  },
  {
    id: "deadpoolw",
    title: "Deadpool & Wolverine",
    schedule: "21:35",
    priceGtq: 56,
    poster: "https://upload.wikimedia.org/wikipedia/en/9/90/Deadpool_%26_Wolverine_poster.jpg"
  },
  {
    id: "godzillaxkong",
    title: "Godzilla x Kong: The New Empire",
    schedule: "18:55",
    priceGtq: 52,
    poster: "https://upload.wikimedia.org/wikipedia/en/b/be/Godzilla_x_Kong_The_New_Empire_poster.jpg"
  },
  {
    id: "planetapes",
    title: "Kingdom of the Planet of the Apes",
    schedule: "17:55",
    priceGtq: 50,
    poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Kingdom_of_the_Planet_of_the_Apes_poster.jpg"
  },
  {
    id: "quietplace",
    title: "A Quiet Place: Day One",
    schedule: "20:20",
    priceGtq: 47,
    poster: "https://upload.wikimedia.org/wikipedia/en/1/16/A_Quiet_Place_Day_One_poster.jpg"
  },
  {
    id: "furiosa",
    title: "Furiosa: A Mad Max Saga",
    schedule: "22:20",
    priceGtq: 55,
    poster: "https://upload.wikimedia.org/wikipedia/en/3/34/Furiosa_A_Mad_Max_Saga_poster.jpg"
  },
  {
    id: "thefallguy",
    title: "The Fall Guy",
    schedule: "19:00",
    priceGtq: 46,
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4b/The_Fall_Guy_%28film%29_poster.jpg"
  },
  {
    id: "kungfu4",
    title: "Kung Fu Panda 4",
    schedule: "15:15",
    priceGtq: 42,
    poster: "https://upload.wikimedia.org/wikipedia/en/7/7f/Kung_Fu_Panda_4_poster.jpg"
  },
  {
    id: "joker2",
    title: "Joker: Folie a Deux",
    schedule: "21:00",
    priceGtq: 54,
    poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/Joker_Folie_%C3%A0_Deux_poster.jpg"
  },
  {
    id: "gladiator2",
    title: "Gladiator II",
    schedule: "20:55",
    priceGtq: 56,
    poster: "https://upload.wikimedia.org/wikipedia/en/9/94/Gladiator_II_poster.jpg"
  },
  {
    id: "wicked",
    title: "Wicked",
    schedule: "17:35",
    priceGtq: 45,
    poster: "https://upload.wikimedia.org/wikipedia/en/3/3d/Wicked_%282024_film%29_poster.jpg"
  },
  {
    id: "mufasa",
    title: "Mufasa: The Lion King",
    schedule: "16:30",
    priceGtq: 49,
    poster: "https://upload.wikimedia.org/wikipedia/en/f/f6/Mufasa_The_Lion_King_poster.jpg"
  },
  {
    id: "sonic3",
    title: "Sonic the Hedgehog 3",
    schedule: "18:15",
    priceGtq: 47,
    poster: "https://upload.wikimedia.org/wikipedia/en/9/9d/Sonic_the_Hedgehog_3_poster.jpg"
  },
  {
    id: "captainamerica4",
    title: "Captain America: Brave New World",
    schedule: "19:25",
    priceGtq: 53,
    poster: "https://upload.wikimedia.org/wikipedia/en/9/9e/Captain_America_Brave_New_World_poster.jpg"
  },
  {
    id: "f1movie",
    title: "F1",
    schedule: "21:45",
    priceGtq: 52,
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c4/F1_%282025_film%29_poster.jpg"
  }
];

// Asientos ocupados por defecto para simular sala parcialmente vendida.
const baseOccupiedSeats = {
  dune2: ["A3", "A4", "B5", "D7"],
  oppenheimer: ["A1", "C4", "D6", "F2", "F3"],
  insideout2: ["B2", "B3", "C3", "E8"],
  spiderverse: ["A9", "B8", "C7", "D4", "E4"]
};

const EXCHANGE_RATE = 7.8; // 1 USD = 7.8 GTQ (tipo de cambio fijo para demo).
const ROWS = ["A", "B", "C", "D", "E", "F", "G"];
const COLUMNS = 10;
const STORAGE_KEY = "cine_reservas_v1";
const THEME_KEY = "cine_theme_v1";

const formatGtq = new Intl.NumberFormat("es-GT", { style: "currency", currency: "GTQ" });
const formatUsd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

// Estado de la aplicación en memoria.
const state = {
  selectedMovieId: movies[0]?.id ?? null,
  selectedSeats: [],
  reservations: loadReservations(),
  occupiedByMovie: {}
};

const ui = {
  movieGrid: document.getElementById("movieGrid"),
  seatMap: document.getElementById("seatMap"),
  selectedPoster: document.getElementById("selectedPoster"),
  selectedTitle: document.getElementById("selectedTitle"),
  selectedSchedule: document.getElementById("selectedSchedule"),
  selectedPrice: document.getElementById("selectedPrice"),
  seatList: document.getElementById("seatList"),
  ticketCount: document.getElementById("ticketCount"),
  totalGtq: document.getElementById("totalGtq"),
  totalUsd: document.getElementById("totalUsd"),
  exchangeRateText: document.getElementById("exchangeRateText"),
  startPaymentBtn: document.getElementById("startPaymentBtn"),
  clearSelectionBtn: document.getElementById("clearSelectionBtn"),
  paymentForm: document.getElementById("paymentForm"),
  paymentMethod: document.getElementById("paymentMethod"),
  cardFields: document.getElementById("cardFields"),
  cardNumber: document.getElementById("cardNumber"),
  cardExpiry: document.getElementById("cardExpiry"),
  cardCvv: document.getElementById("cardCvv"),
  systemMessage: document.getElementById("systemMessage"),
  reservationList: document.getElementById("reservationList"),
  themeToggle: document.getElementById("themeToggle"),
  customerName: document.getElementById("customerName"),
  customerEmail: document.getElementById("customerEmail")
};

bootstrap();

function bootstrap() {
  applyTheme(loadTheme());
  buildOccupiedMap();
  bindEvents();
  renderMovies();
  renderSeatMap();
  renderSummary();
  renderReservations();
  ui.exchangeRateText.textContent = `Q${EXCHANGE_RATE.toFixed(2)} = $1.00`;
}

function bindEvents() {
  ui.movieGrid.addEventListener("click", onMovieGridClick);
  ui.seatMap.addEventListener("click", onSeatClick);
  ui.startPaymentBtn.addEventListener("click", () => ui.customerName.focus());
  ui.clearSelectionBtn.addEventListener("click", clearCurrentSelection);
  ui.paymentForm.addEventListener("submit", onSubmitPayment);
  ui.paymentMethod.addEventListener("change", toggleCardFieldsByMethod);
  ui.cardNumber.addEventListener("input", formatCardNumber);
  ui.cardExpiry.addEventListener("input", formatExpiry);
  ui.reservationList.addEventListener("click", onReservationAction);
  ui.themeToggle.addEventListener("click", toggleTheme);
}

function renderMovies() {
  const html = movies
    .map((movie) => {
      const isActive = movie.id === state.selectedMovieId;
      const priceUsd = movie.priceGtq / EXCHANGE_RATE;
      return `
        <article class="movie-card ${isActive ? "active" : ""}">
          <img src="${movie.poster}" alt="Poster de ${movie.title}">
          <div class="movie-content">
            <strong>${movie.title}</strong>
            <span>Horario: ${movie.schedule}</span>
            <span>${formatGtq.format(movie.priceGtq)} / ${formatUsd.format(priceUsd)}</span>
            <button class="ghost-btn" type="button" data-movie-id="${movie.id}">
              ${isActive ? "Seleccionada" : "Seleccionar"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  ui.movieGrid.innerHTML = html;
}

function renderSeatMap() {
  const movieId = state.selectedMovieId;
  if (!movieId) {
    ui.seatMap.innerHTML = '<p class="empty-state">No hay películas disponibles.</p>';
    return;
  }

  const occupied = state.occupiedByMovie[movieId] ?? new Set();
  const rowsMarkup = ROWS.map((row) => {
    const seatsMarkup = [];
    for (let col = 1; col <= COLUMNS; col += 1) {
      const code = `${row}${col}`;
      const isOccupied = occupied.has(code);
      const isSelected = state.selectedSeats.includes(code);
      const classes = ["seat"];
      if (isOccupied) classes.push("occupied");
      if (isSelected) classes.push("selected");

      seatsMarkup.push(`
        <button
          type="button"
          class="${classes.join(" ")}"
          data-seat="${code}"
          title="Asiento ${code}"
          aria-label="Asiento ${code}"
          ${isOccupied ? "disabled" : ""}
        ></button>
      `);
    }

    return `
      <div class="seat-row">
        <span class="row-label">${row}</span>
        ${seatsMarkup.join("")}
      </div>
    `;
  }).join("");

  ui.seatMap.innerHTML = rowsMarkup;
}

function renderSummary() {
  const movie = getSelectedMovie();
  const seatCount = state.selectedSeats.length;

  if (!movie) {
    ui.selectedPoster.src = "";
    ui.selectedTitle.textContent = "Selecciona una película";
    ui.selectedSchedule.textContent = "Horario: --:--";
    ui.selectedPrice.textContent = "Precio: Q0.00 / $0.00";
    ui.seatList.textContent = "Ninguno";
    ui.ticketCount.textContent = "0";
    ui.totalGtq.textContent = "Q0.00";
    ui.totalUsd.textContent = "$0.00";
    ui.startPaymentBtn.disabled = true;
    return;
  }

  const totalGtq = movie.priceGtq * seatCount;
  const totalUsd = totalGtq / EXCHANGE_RATE;

  ui.selectedPoster.src = movie.poster;
  ui.selectedPoster.alt = `Poster de ${movie.title}`;
  ui.selectedTitle.textContent = movie.title;
  ui.selectedSchedule.textContent = `Horario: ${movie.schedule}`;
  ui.selectedPrice.textContent = `Precio: ${formatGtq.format(movie.priceGtq)} / ${formatUsd.format(movie.priceGtq / EXCHANGE_RATE)}`;
  ui.seatList.textContent = seatCount ? state.selectedSeats.join(", ") : "Ninguno";
  ui.ticketCount.textContent = String(seatCount);
  ui.totalGtq.textContent = formatGtq.format(totalGtq);
  ui.totalUsd.textContent = formatUsd.format(totalUsd);
  ui.startPaymentBtn.disabled = seatCount === 0;
}

function renderReservations() {
  if (!state.reservations.length) {
    ui.reservationList.innerHTML = '<p class="empty-state">Aún no hay reservas registradas.</p>';
    return;
  }

  const items = state.reservations
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map((reservation) => {
      const statusClass = reservation.status === "Activa" ? "active" : "canceled";
      const actionButtons = reservation.status === "Activa"
        ? `
            <button class="ghost-btn" type="button" data-action="pdf" data-id="${reservation.id}">PDF</button>
            <button class="ghost-btn" type="button" data-action="cancel" data-id="${reservation.id}">Cancelar</button>
          `
        : `
            <button class="ghost-btn" type="button" data-action="pdf" data-id="${reservation.id}">PDF</button>
          `;

      return `
        <article class="reservation-item">
          <div class="reservation-head">
            <span class="reservation-id">${reservation.id}</span>
            <span class="badge ${statusClass}">${reservation.status}</span>
          </div>
          <div>
            <strong>${reservation.movieTitle}</strong>
            <p>Horario: ${reservation.schedule} | Asientos: ${reservation.seats.join(", ")}</p>
            <p>Total: ${formatGtq.format(reservation.totalGtq)} / ${formatUsd.format(reservation.totalUsd)}</p>
            <p>Pago: ${reservation.paymentMethod} | Cliente: ${reservation.customerName}</p>
          </div>
          <div class="reservation-actions">${actionButtons}</div>
        </article>
      `;
    })
    .join("");

  ui.reservationList.innerHTML = items;
}

function onMovieGridClick(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const movieId = target.getAttribute("data-movie-id");
  if (!movieId || movieId === state.selectedMovieId) return;

  state.selectedMovieId = movieId;
  state.selectedSeats = [];
  renderMovies();
  renderSeatMap();
  renderSummary();
  setMessage(`Película seleccionada: ${getSelectedMovie()?.title ?? ""}.`, "success");
}

function onSeatClick(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const seatCode = target.getAttribute("data-seat");
  if (!seatCode) return;

  const occupied = state.occupiedByMovie[state.selectedMovieId] ?? new Set();
  if (occupied.has(seatCode)) return;

  const isSelected = state.selectedSeats.includes(seatCode);
  state.selectedSeats = isSelected
    ? state.selectedSeats.filter((seat) => seat !== seatCode)
    : [...state.selectedSeats, seatCode];

  state.selectedSeats = sortSeats(state.selectedSeats);
  renderSeatMap();
  renderSummary();
}

function clearCurrentSelection() {
  state.selectedSeats = [];
  renderSeatMap();
  renderSummary();
  setMessage("Selección de asientos limpiada.", "success");
}

function onSubmitPayment(event) {
  event.preventDefault();
  const movie = getSelectedMovie();

  if (!movie || state.selectedSeats.length === 0) {
    setMessage("Debes elegir película y asientos antes de pagar.", "error");
    return;
  }

  const validationError = validatePaymentForm();
  if (validationError) {
    setMessage(validationError, "error");
    return;
  }

  const totalGtq = movie.priceGtq * state.selectedSeats.length;
  const totalUsd = Number((totalGtq / EXCHANGE_RATE).toFixed(2));
  const reservation = {
    id: `RES-${Date.now().toString().slice(-6)}`,
    movieId: movie.id,
    movieTitle: movie.title,
    schedule: movie.schedule,
    seats: [...state.selectedSeats],
    tickets: state.selectedSeats.length,
    totalGtq,
    totalUsd,
    paymentMethod: paymentMethodLabel(ui.paymentMethod.value),
    customerName: ui.customerName.value.trim(),
    customerEmail: ui.customerEmail.value.trim(),
    status: "Activa",
    createdAt: new Date().toISOString()
  };

  state.reservations.push(reservation);
  markSeatsAsOccupied(movie.id, reservation.seats);
  saveReservations();

  state.selectedSeats = [];
  ui.paymentForm.reset();
  toggleCardFieldsByMethod();

  renderSeatMap();
  renderSummary();
  renderReservations();
  setMessage(`Reserva confirmada (${reservation.id}). Ya puedes descargar tu PDF.`, "success");
}

function validatePaymentForm() {
  const name = ui.customerName.value.trim();
  const email = ui.customerEmail.value.trim();
  const method = ui.paymentMethod.value;

  if (name.length < 4) return "Ingresa un nombre válido (mínimo 4 caracteres).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Ingresa un correo válido.";

  if (method !== "paypal") {
    const digits = ui.cardNumber.value.replace(/\D/g, "");
    const expiry = ui.cardExpiry.value.trim();
    const cvv = ui.cardCvv.value.trim();

    if (digits.length < 16) return "El número de tarjeta debe tener 16 dígitos.";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) return "La fecha de expiración debe tener formato MM/AA.";
    if (!/^\d{3,4}$/.test(cvv)) return "El CVV debe tener 3 o 4 dígitos.";
  }

  return "";
}

function onReservationAction(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const action = target.getAttribute("data-action");
  const reservationId = target.getAttribute("data-id");
  if (!action || !reservationId) return;

  const reservation = state.reservations.find((item) => item.id === reservationId);
  if (!reservation) return;

  if (action === "cancel") {
    cancelReservation(reservation);
    return;
  }

  if (action === "pdf") {
    downloadReservationPdf(reservation);
  }
}

function cancelReservation(reservation) {
  if (reservation.status !== "Activa") {
    setMessage("Esa reserva ya estaba cancelada.", "error");
    return;
  }

  const occupied = state.occupiedByMovie[reservation.movieId] ?? new Set();
  reservation.seats.forEach((seat) => occupied.delete(seat));
  reservation.status = "Cancelada";

  saveReservations();
  renderSeatMap();
  renderReservations();
  setMessage(`Reserva ${reservation.id} cancelada correctamente.`, "success");
}

function downloadReservationPdf(reservation) {
  const jspdfApi = window.jspdf;
  if (!jspdfApi || !jspdfApi.jsPDF) {
    setMessage("No se pudo cargar la librería PDF en este navegador.", "error");
    return;
  }

  const { jsPDF } = jspdfApi;
  const doc = new jsPDF();
  const when = new Date(reservation.createdAt).toLocaleString("es-GT");

  // Estructura de boleto en PDF con datos clave de la compra.
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Boleto de Cine", 14, 20);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`Reserva: ${reservation.id}`, 14, 34);
  doc.text(`Estado: ${reservation.status}`, 14, 42);
  doc.text(`Pelicula: ${reservation.movieTitle}`, 14, 50);
  doc.text(`Horario: ${reservation.schedule}`, 14, 58);
  doc.text(`Asientos: ${reservation.seats.join(", ")}`, 14, 66);
  doc.text(`Boletos: ${reservation.tickets}`, 14, 74);
  doc.text(`Total GTQ: ${formatGtq.format(reservation.totalGtq)}`, 14, 82);
  doc.text(`Total USD: ${formatUsd.format(reservation.totalUsd)}`, 14, 90);
  doc.text(`Metodo de pago: ${reservation.paymentMethod}`, 14, 98);
  doc.text(`Cliente: ${reservation.customerName}`, 14, 106);
  doc.text(`Correo: ${reservation.customerEmail}`, 14, 114);
  doc.text(`Fecha: ${when}`, 14, 122);

  doc.setFontSize(10);
  doc.text("Presenta este boleto en taquilla digital antes de ingresar a la sala.", 14, 138);
  doc.save(`${reservation.id}.pdf`);
}

function toggleCardFieldsByMethod() {
  const isPaypal = ui.paymentMethod.value === "paypal";
  ui.cardFields.style.display = isPaypal ? "none" : "grid";
  ui.cardNumber.required = !isPaypal;
  ui.cardExpiry.required = !isPaypal;
  ui.cardCvv.required = !isPaypal;
}

function formatCardNumber() {
  const raw = ui.cardNumber.value.replace(/\D/g, "").slice(0, 16);
  ui.cardNumber.value = raw.replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatExpiry() {
  const raw = ui.cardExpiry.value.replace(/\D/g, "").slice(0, 4);
  if (raw.length < 3) {
    ui.cardExpiry.value = raw;
    return;
  }
  ui.cardExpiry.value = `${raw.slice(0, 2)}/${raw.slice(2)}`;
}

function paymentMethodLabel(value) {
  switch (value) {
    case "credito":
      return "Tarjeta de crédito";
    case "debito":
      return "Tarjeta de débito";
    case "paypal":
      return "PayPal";
    default:
      return "Método no definido";
  }
}

function buildOccupiedMap() {
  const map = {};
  movies.forEach((movie) => {
    map[movie.id] = new Set(baseOccupiedSeats[movie.id] ?? []);
  });

  state.reservations.forEach((reservation) => {
    if (reservation.status !== "Activa") return;
    if (!map[reservation.movieId]) map[reservation.movieId] = new Set();
    reservation.seats.forEach((seat) => map[reservation.movieId].add(seat));
  });

  state.occupiedByMovie = map;
}

function markSeatsAsOccupied(movieId, seats) {
  if (!state.occupiedByMovie[movieId]) {
    state.occupiedByMovie[movieId] = new Set();
  }
  seats.forEach((seat) => state.occupiedByMovie[movieId].add(seat));
}

function getSelectedMovie() {
  return movies.find((movie) => movie.id === state.selectedMovieId) ?? null;
}

function sortSeats(seats) {
  return seats.slice().sort((a, b) => {
    const rowDiff = a.charCodeAt(0) - b.charCodeAt(0);
    if (rowDiff !== 0) return rowDiff;
    return Number(a.slice(1)) - Number(b.slice(1));
  });
}

function setMessage(message, type = "") {
  ui.systemMessage.textContent = message;
  ui.systemMessage.classList.remove("success", "error");
  if (type) ui.systemMessage.classList.add(type);
}

function loadReservations() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("No se pudo leer reservas del storage:", error);
    return [];
  }
}

function saveReservations() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.reservations));
}

function toggleTheme() {
  const current = document.body.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(current);
  localStorage.setItem(THEME_KEY, current);
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  ui.themeToggle.textContent = theme === "dark" ? "Modo claro" : "Modo oscuro";
}

function loadTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return "dark";
}
