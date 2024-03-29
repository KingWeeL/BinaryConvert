function binerToDesimal() {
    // Mengambil nilai biner dari input
    var biner = document.getElementById("inputBiner").value

    // Mengambil nilai pengali (basis) dari input
    var pengali = parseInt(document.getElementById("inputPengali").value)

    // Konversi bilangan biner ke desimal
    var desimal = parseInt(biner, pengali)

    // Inisialisasi variabel untuk menyimpan langkah-langkah rumus konversi
    var stepsFormula = ""
    // Inisialisasi variabel untuk menyimpan langkah-langkah perhitungan
    var stepsCalculation = "("
    // Inisialisasi pangkat untuk konversi
    var pangkat = biner.length - 1
    // Inisialisasi variabel untuk menyimpan hasil konversi
    var result = 0

    // Loop untuk setiap digit pada bilangan biner
    for (var i = 0; i < biner.length; i++) {
        // Mengambil digit biner ke-i
        var bit = parseInt(biner[i])
        // Menghitung hasil perkalian digit dengan pangkat
        var product = bit * Math.pow(pengali, pangkat)
        // Menambahkan hasil perkalian ke hasil konversi
        result += product

        // Membuat langkah-langkah rumus konversi
        stepsFormula += "(" + bit + " × " + pengali + "<sup>" + pangkat + "</sup>)"
        // Membuat langkah-langkah perhitungan
        stepsCalculation += bit * Math.pow(pengali, pangkat)

        // Penanganan tanda operasi matematika
        if (pangkat !== 0) {
            stepsFormula += " + "
            stepsCalculation += " + "
        } else {
            stepsFormula += ""
            stepsCalculation += ")"
        }

        // Mengurangi pangkat untuk digit biner berikutnya
        pangkat--
    }

    // Menyimpan hasil total konversi
    var total = result

    // Menampilkan langkah-langkah rumus konversi di HTML
    document.getElementById("langkahFormula").innerHTML = stepsFormula
    // Menampilkan langkah-langkah perhitungan di HTML
    document.getElementById("langkahCalculation").innerHTML = stepsCalculation
    // Menampilkan total hasil konversi di HTML
    document.getElementById("hasilTotal").innerHTML = total

    // Menghapus kelas 'hidden' untuk menampilkan langkah-langkah setelah button diklik
    var steps = document.querySelector(".steps")
    steps.classList.remove("hidden")
}