var table = document.createElement("table"), tr, td, i, free, tds = [];
for(i = 0; i <= 15; i++) {
  i % 4 == 0 && table.appendChild(tr = document.createElement("tr"));
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
    e.target && check() && alert('Voila!') && shuffle();
  }
}
function shuffle() {
  for (var i = 0; i < 10; i++) {
    onCellClick(tds[Math.floor(Math.random() * 16)]);
  }
}
function check() {
  return 15 == tds.slice(0,15).reduce(function(prev, curr, ind, arr) {
    return parseInt(curr.innerHTML) == ind + 1 ? prev + 1 : 0;
  }, 0);
}
document.children[0].appendChild(table);
shuffle();