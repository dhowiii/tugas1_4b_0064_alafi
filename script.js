const inputTask = document.getElementById("inputTask");
const selectStatus = document.getElementById("selectStatus");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function () {
    const inputValue = inputTask.value.trim();
    const statusValue = selectStatus.value;

    if (inputValue === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const listbaru = document.createElement("li");
    listbaru.classList.add("todo-item");

    const span = document.createElement("span");
    span.classList.add("todo-text");
    span.textContent = `${inputValue} (${statusValue})`;

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.classList.add("btn-hapus");

    btnHapus.addEventListener("click", function () {
        const konfirmasi = confirm("Hapus data ini?" );
        if (konfirmasi) listbaru.remove();
    });

    listbaru.appendChild(span);
    listbaru.appendChild(btnHapus);
    daftarTugas.appendChild(listbaru);

    inputTask.value = "";
    inputTask.focus();
});
