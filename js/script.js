/* Modal */
function openCard(card) {
  const modal = document.getElementById("modal");
  const name = card.querySelector("h3").innerText;
  const price = card.querySelector("span").innerText;
  const img = card.querySelector("img").src;

  document.getElementById("modal-content").innerHTML = `
    <span class="close-btn" onclick="closeCard(event)">✕</span>
    <img src="${img}">
    <h3>${name}</h3>
    <p>${price}</p>
    <a class="btn-wsp-fixed" 
       style="position:static;display:inline-block;margin-top:10px"
       href="https://wa.me/573155422131?text=Hola%20quiero%20el%20granizado%20de%20${encodeURIComponent(name)}"
       target="_blank">
       Pedir este sabor 🍧
    </a>
  `;
  modal.style.display = "flex";
}

function closeCard(e) {
  e.stopPropagation();
  document.getElementById("modal").style.display = "none";
}

/* Copitos */
const snow = document.getElementById("snow");

for (let i = 0; i < 35; i++) {
  const s = document.createElement("span");
  const size = Math.random() * 6 + 4;
  s.style.width = size + "px";
  s.style.height = size + "px";
  s.style.left = Math.random() * 100 + "vw";
  s.style.background = ["#fff","#ccefff","#9ddfff"][Math.floor(Math.random()*3)];
  s.style.animationDuration = Math.random() * 5 + 5 + "s";
  snow.appendChild(s);
}
