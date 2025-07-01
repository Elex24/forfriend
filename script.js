// document.getElementById("clickMe").addEventListener("click", () => {
//   const output = document.getElementById("output");
//   const image = document.getElementById("outputImg");

//   output.textContent = "🎉 Сюрприз! Для Тебя Подарок пупсик!";
//   output.classList.remove("hidden");

//   image.src = "https://i.pinimg.com/736x/50/53/eb/5053eb5bafb72c307403f9a5c94109c4.jpg";
//   image.classList.remove("hidden");
//   image.style.maxWidth = "100%";
//   image.style.borderRadius = "12px";
//   image.style.marginTop = "1rem";
//   image.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
// });

document.getElementById("clickMe").addEventListener("click", () => {
  const output = document.getElementById("output");
  const image = document.getElementById("outputImg");

  const isVisible = !output.classList.contains("hidden");

  if (isVisible) {
    // Скрываем
    output.classList.add("hidden");
    image.classList.add("hidden");
  } else {
    // Показываем
    output.textContent = "🎉 Сюрприз! Для Тебя Подарочек, Пупсик!";
    output.classList.remove("hidden");

    image.src = "https://i.pinimg.com/736x/50/53/eb/5053eb5bafb72c307403f9a5c94109c4.jpg";
    image.classList.remove("hidden");
  }
});