const toastButton = document.querySelectorAll("[data-button]")[0];

const toastArray = [];

const renderToast = () => {
  toastArray.forEach((el, idx) => {
    el.style.top = `calc(100vh - ${idx * 150 + 150}px)`;
    el.style.display = "flex";
    document.body.appendChild(el);
  });
};

toastButton.addEventListener("click", () => {
  const toast = document.createElement("div");
  toast.className = "toast-wrapper";
  toast.innerText = "Infoshare Academy";
  toastArray.push(toast);
  setTimeout(() => {
    const teostToRemove = toastArray.pop();
    document.body.removeChild(teostToRemove);
    renderToast();
  }, 2000);
  renderToast();
});
