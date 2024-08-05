window.onload = function() {
  const icons = document.querySelectorAll(".icons");
  const numberToShow = document.querySelector(".numberToShow");
  const button = document.querySelector("#button");
  const altura = document.getElementById("altura");
  const ancho = document.getElementById("ancho");
  const main = document.getElementById("main");
  const Nramdon = Math.random();
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const symbols = [
    { clase: "heart text-danger", icon: "♥" },
    { clase: "diamond", icon: "♦" },
    { clase: "club", icon: "♣" },
    { clase: "spade", icon: "♠" }
  ];
  function loadCard(numeroAleatorio) {
    icons.forEach(i => {
      i.className = `icons ${
        symbols[Math.floor(numeroAleatorio * symbols.length)].clase
      } fs-1`;
      i.textContent = ` ${
        symbols[Math.floor(numeroAleatorio * symbols.length)].icon
      }`;
      console.log(i.className, i.textContent);
    });
    numberToShow.textContent =
      numbers[Math.floor(numeroAleatorio * numbers.length)];
  }
  const changeCard = () => {
    const rNumber = Math.random();
    loadCard(rNumber);
  };

  const handleInputAncho = e => {
    main.style.width = `${e.target.value}px`;
  };

  const handleInputAltura = e => {
    main.classList.remove("w-75");
    main.style.height = `${e.target.value}px`;
  };

  ancho.addEventListener("input", handleInputAncho);
  altura.addEventListener("input", handleInputAltura);

  const changeCardTenSeconds = setInterval(changeCard, 10000);

  loadCard(Nramdon);

  button.addEventListener("click", changeCard);
};
