const num_pics = [];
for (let i = 1; i < 30+1; i++) {
  num_pics.push(i)
}
const pictures = document.querySelector(".pictures");


function large(i,pics) {
  pictures.innerHTML = "";
  pictures.style.marginTop = "0px";
  var grid = pictures.style.gridTemplateColumns;
  pictures.style.gridTemplateColumns = "1fr";
  var p_img = document.createElement("img");
  p_img.src = "./full/" + i + ".jpg";
  p_img.classList.add("p");
  p_img.addEventListener("click", function () {
    pictures.style.gridTemplateColumns = grid;
    show(pics);
    document.getElementById(i).scrollIntoView();
  });
  pictures.append(p_img);
  p_img.onload = function () {
    p_img.scrollIntoView();
  };
}

function show(pics) {
  pictures.innerHTML = "";
  document.querySelector(".name").style.marginBottom = "250px";
  pics.forEach(pic => {
    const div = document.createElement("div");
    div.classList.add("i");
    div.id = pic;
    const img = document.createElement("img");
    img.src = "./thumb/" + pic + ".jpg";

    div.addEventListener("click", function () {
      large(pic,pics);
    });
    div.append(img);
    pictures.append(div);

  });
}
show(num_pics);