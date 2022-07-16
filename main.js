let generateBtn = document.querySelector(".btn_primary");

generateBtn.addEventListener("click", fetchPics);

function fetchPics() {
  let catsImgDiv = document.querySelector(".cat_img");
  catsImgDiv.innerHTML = "";
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      let catsImgUrl = data[0].url; //urlをgetする

      let catsImgEl = document.createElement("img"); //img要素作成
      catsImgEl.setAttribute("src", `${catsImgUrl}`);
      catsImgEl.classList.add("showcase"); //画像の大きさの調整
      let catsImgDiv = document.querySelector(".cat_img");
      catsImgDiv.appendChild(catsImgEl); //img作る
    })
    .catch((err) => console.log(err));
}
