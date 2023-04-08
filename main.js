// ロードアニメーション//
const loading = document.querySelector("#loading")

const load = window.addEventListener("load", () => {
  setTimeout(() => {
    loading.classList.add("loaded");
  }, 1000); // 1秒後にクラスを追加
});


//homeのランダム再生↓↓↓↓↓↓↓↓↓↓↓↓

// 定数
let photo = document.querySelector("#photo");


//ホーム画像リスト
const photolist = [
  "img/home/_DSC5573.jpg",
  "img/home/_DSC2035-1.png",
  "img/home/_DSC0302-1.png",
  "img/home/_DSC3100-Edit.jpg",
  "img/home/_DSC3221-Edit.png",
  "img/home/_DSC6369-2.png",
  "img/home/_DSC6369.png",
];

// リストからランダムに値を取得(ここ良く分かってないでコピペしてるとこ)
let getList = photolist[Math.floor(Math.random() * photolist.length)];

// console.log(getList);

// HTMLタグを挿入
const homephoto =
  `<img src="${getList}" alt="home2" class="blur">
  <img src="${getList}" alt="home" class="homephoto">`;

photo.insertAdjacentHTML("afterbegin", homephoto);