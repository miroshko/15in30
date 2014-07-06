var table = document.createElement("table"), tr, td, i, free, won, tds = [];
for(i = 0; i <= 15; i++) {
  if (i % 4 == 0)
    table.appendChild(tr = document.createElement("tr"));
  tr.appendChild(td = free = document.createElement("td"));
  td.innerHTML = i == 15 ? "" : i+1;
  td.dataset.coords = parseInt(i / 4) + "," + i % 4;
  td.addEventListener('click', onCellClick);
  tds.push(td);
}
function onCellClick(e) {
  td = e.target ? e.target : e;
  if (Math.abs(td.dataset.coords[0] - free.dataset.coords[0]) + Math.abs(td.dataset.coords[2] - free.dataset.coords[2]) == 1) {
    free.innerHTML = td.innerHTML;
    td.innerHTML = "";
    free = td;
    if (e.target && check()) {
      alert('Voila!');
      shuffle();
    }
  }
}
function check() {
  return /1\s2\s3\s4\s{1,2}5\s6\s7\s8\s{1,2}9\s10\s11\s12\s{1,2}13\s14\s15\s{1,2}/.test(table.innerText);
}
document.children[0].appendChild(table);
(function shuffle() {
  for (var i = 0; i < 10000; i++)
    onCellClick(tds[Math.floor(Math.random() * 16)]);
})();
