document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(
    ".process-card, .stats article, .features article, .revenue"
  );

  items.forEach((item, index) => {

    item.style.opacity = "0";

    item.style.transform =
      "translateY(12px)";

    setTimeout(() => {

      item.style.transition =
        "opacity .55s ease, transform .55s ease";

      item.style.opacity = "1";

      item.style.transform =
        "translateY(0)";

    }, 80 + index * 55);

  });

});
