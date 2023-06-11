// <!-- An phim bat ky tren ban phim hien thi ra thong tin phim do -->

const $ = document.querySelector.bind(document);
const ulElm = $(".list-result");

document.addEventListener("keydown", function (e) {
  const result = `
    <li class="list-group-item"><span class='fw-bold'>Key:</span> ${e.key}</li>
    <li class="list-group-item"><span class='fw-bold'>Location:</span> ${e.location}</li>
    <li class="list-group-item"><span class='fw-bold'>Which:</span> ${e.which}</li>
    <li class="list-group-item"><span class='fw-bold'>Code:</span> ${e.code}</li>
  `;

  ulElm.innerHTML = result;
});
