let penumpang = ["Lisa", undefined, undefined, "Bambang"];

let tambahPenumpang = (namaPenumpang, penumpang) => {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        alert("Nama Penumpang " + namaPenumpang + " sudah ada di dalam angkot");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

let displayPenumpang = () => {
  const penumpangList = document.getElementById("penumpang-list");
  penumpangList.innerHTML = "";
  penumpang.forEach((nama, index) => {
    let listItem = document.createElement("li");
    listItem.textContent = nama ? nama : `Kursi ${index + 1} kosong`;
    penumpangList.appendChild(listItem);
  });
};

let tambahPenumpangHandler = () => {
  let namaPenumpang = document.getElementById("namaPenumpang").value;
  if (namaPenumpang) {
    penumpang = tambahPenumpang(namaPenumpang, penumpang);
    displayPenumpang();
    document.getElementById("namaPenumpang").value = "";
  } else {
    alert("Nama penumpang tidak boleh kosong!");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  displayPenumpang();
});
