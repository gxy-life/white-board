const whiteBoard = document.querySelectorAll(".whiteBoard"),
  waku = document.querySelectorAll(".waku");

for (let i = 0; i < whiteBoard.length; i++) {
  setHtml(waku[i], whiteBoard[i]);
}

function magLight(obj) {
  for (let j = 0; j < 5; j++) {
    const light = document.createElement("div");
    light.classList.add("mag-light", `light${j + 1}`);
    obj.appendChild(light);
  }
}

function setHtml(a, b) {
  const pen = document.createElement("pen"),
    keshi = document.createElement("div"),
    mag1 = document.createElement("div"),
    mag2 = document.createElement("div"),
    mag3 = document.createElement("div"),
    uke = document.createElement("div");
  pen.classList.add("pen");
  keshi.classList.add("keshi");
  mag1.classList.add("mag-blue");
  mag2.classList.add("mag-yellow");
  mag3.classList.add("mag-red");
  uke.classList.add("uke");

  for (let i = 0; i < 3; i++) {
    if (i == 0) {
      magLight(mag1);
    }
    if (i == 1) {
      magLight(mag2);
    }
    if (i == 2) {
      magLight(mag3);
    }
  }

  a.appendChild(keshi);
  a.appendChild(pen);
  a.appendChild(mag1);
  a.appendChild(mag2);
  a.appendChild(mag3);
  b.appendChild(uke);
}
