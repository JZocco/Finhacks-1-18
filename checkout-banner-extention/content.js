// Create the banner element
const banner = document.createElement("div");
banner.style.position = "fixed";
banner.style.top = "0";
banner.style.left = "0";
banner.style.width = "100%";
banner.style.background = "yellow";
banner.style.padding = "16px";
banner.style.textAlign = "center";
banner.style.zIndex = "1000";
banner.innerHTML = `
  <p>
    Complete your checkout now and save 10%! 🎉
    <button id="close-banner" style="margin-left: 20px; background: red; color: white; border: none; padding: 8px 12px; cursor: pointer;">
      Close
    </button>
  </p>
`;

// Add the banner to the page
document.body.appendChild(banner);

// Add functionality to close the banner
document.getElementById("close-banner").addEventListener("click", () => {
  banner.remove();
});
