const fileList = document.getElementById("fileList");
const progress = document.getElementById("progress");

let totalFiles = 300; // ratusan file palsu
let percent = 0;

// Bikin daftar file palsu
for (let i = 1; i <= totalFiles; i++) {
    let file = document.createElement("div");
    file.className = "file";
    file.textContent = `Mengunci file_${i}.dat ...`;
    fileList.appendChild(file);
}

// Efek lag aman → bikin banyak loop berat tapi berhenti 60 detik
let start = Date.now();
let lagInterval = setInterval(() => {
    for (let i = 0; i < 2000000; i++) { Math.sqrt(i); } // operasi berat
    let elapsed = Math.floor((Date.now() - start) / 1000);
    percent = Math.min(Math.floor((elapsed / 60) * 100), 100);
    progress.textContent = percent + "%";

    if (elapsed >= 60) {
        clearInterval(lagInterval);
        progress.textContent = "100% - Selesai";
    }
}, 100);