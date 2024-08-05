window.onload = function() {
  const icons = document.querySelectorAll(".icons");
  const numberToShow = document.querySelector(".numberToShow");
  const button = document.querySelector("#button");
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
  icons.forEach(i => {
    i.className += ` ${
      symbols[Math.floor(Nramdon * symbols.length)].clase
    } fs-1`;
    i.textContent = ` ${symbols[Math.floor(Nramdon * symbols.length)].icon}`;
  });
  numberToShow.textContent = numbers[Math.floor(Nramdon * numbers.length)];
};
