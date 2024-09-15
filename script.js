const num_pics = [];
for (let i = 1; i < 15+1; i++) {
  num_pics.push(i)
}
const pictures = document.querySelector(".pictures");

const filter = document.querySelector(".filter");
filter.addEventListener("click", function () {
  document.getElementById("myDropdown").classList.toggle("hidden");
  window.onclick = function(event) {
    if (!event.target.matches('.filter')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (!openDropdown.classList.contains('hidden')) {
          openDropdown.classList.add('hidden');
        }
      }
    }
  }
  
});
const concert = document.querySelector("#concert")
concert.addEventListener('click', function (){
  show([1,8,10])
})
const all = document.querySelector("#all")
all.addEventListener('click', function (){
  show(num_pics)
})

function large(i,pics) {
  pictures.innerHTML = "";
  pictures.style.marginTop = "0px";
  filter.classList.add('hidden')
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
  filter.classList.remove('hidden')
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
