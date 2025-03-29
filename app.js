// app.js - Interactivity and Animations for Venkat's Portfolio

document.addEventListener("DOMContentLoaded", () => {
  // Add skill dynamically
  window.addSkill = function () {
    const input = document.getElementById("new-skill");
    const skill = input.value.trim();
    if (skill) {
      const li = document.createElement("li");
      li.textContent = skill;
      li.style.opacity = 0;
      document.getElementById("skills-list").appendChild(li);
      fadeIn(li);
      input.value = "";
    }
  };

  // Fade-in animation
  function fadeIn(element) {
    let opacity = 0;
    element.style.display = "block";
    const interval = setInterval(() => {
      if (opacity >= 1) clearInterval(interval);
      element.style.opacity = opacity;
      opacity += 0.05;
    }, 30);
  }

  // Animate hero text on load
  const heroText = document.querySelector(".hero h1");
  if (heroText) {
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(20px)";
    setTimeout(() => {
      heroText.style.transition = "all 1s ease";
      heroText.style.opacity = 1;
      heroText.style.transform = "translateY(0)";
    }, 300);
  }

  // Button hover effect
  const buttons = document.querySelectorAll(".btn, button");
  buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
      btn.style.transform = "scale(1.05)";
      btn.style.transition = "transform 0.2s ease";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.transform = "scale(1)";
    });
  });
}
