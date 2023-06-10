// 드롭다운 토글 이벤트
let dropDownCount = 0;
document.querySelector(".drop-down").addEventListener("click", function () {
  dropDownCount += 1;
  if (dropDownCount % 2 == 1) {
    document.querySelector(".drop-down-list").style.display = "inline-flex";
  } else {
    document.querySelector(".drop-down-list").style.display = "none";
  }
});
// 드롭다운 토글 이벤트
