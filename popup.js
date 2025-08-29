document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".link-box").forEach(item => {
    item.addEventListener("click", () => {
      const link = item.getAttribute("data-link");
      navigator.clipboard.writeText(link).then(() => {
        // Feedback
        item.textContent = item.textContent + " Copied";
        setTimeout(() => {
          item.textContent = item.textContent.replace(" Copied", "");
        }, 1000);
      });
    });
  });
});
