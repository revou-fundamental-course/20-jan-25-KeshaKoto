// Fungsi untuk menghitung BMI
function calculateBMI(weight, height) {
    // Menghitung BMI dengan rumus: berat / (tinggi * tinggi)
    return weight / ((height / 100) ** 2);
}

// Menangani pengiriman formulir
document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mengambil nilai dari input
    const gender = document.querySelector('input[name="gender"]:checked')?.value; // Menggunakan querySelector
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validasi input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || !gender) {
        alert('Mohon masukkan nilai yang valid untuk berat dan tinggi badan serta pilih jenis kelamin.');
        return;
    }

    // Menghitung BMI
    const bmi = calculateBMI(weight, height);
    let status = '';
    let value = '';
    let range = '';
    let saran = '';

    // Menentukan status berdasarkan nilai BMI
    if (bmi < 18.5) {
        status = 'Kekurangan berat badan';
        value ='Anda kekurangan berat badan';
        range = 'Hasil BMI di bawah 18.5';
        saran = 'Konsumsi makanan tingi kalori, gula, protein, dan vitamin';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal (ideal)';
        value ='Anda memiliki berat badan yang normal';
        range = 'Hasil BMI di antara 18.5 dan 24.9';
        saran = 'Pertahankan pola hidup sehat dengan makanan bergizi dan berolahraga'
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Kelebihan berat badan';
        value = 'Anda memiliki kelebihan berat badan';
        range = ' Hasil BMI di antara 25 dan 29.9';
        saran = 'Kurangi konsumsi makanan tinggi kalori, gula dan berolahraga';
    } else {
        status = 'Kegemukan (Obesitas)';
        value = 'Anda memiliki berat badan berlebih atau obesitas';
        range = 'Hasil BMI di atas 30.0';
        saran = 'Konsultasikan dengan dokter atau ahli gizi untuk program menurunkan berat badan';
    }

    // Menampilkan hasil
    document.getElementById('result').innerHTML = `
        <p>${status}</p>
        <h2>${bmi.toFixed(2)}</h2>
        <p>Jenis Kelamin: ${gender}</p>
        <p>${value}</p>
        <button type="submit" class="btn-primary">Download Hasil BMI</button>
    `;

    document.getElementById('penjelasan').innerHTML = `
        ${range}
        <br><br>
        ${saran}
        <br>
        <button type="submit" class="btn-primary">Konsultasi Ahli Gizi Via Aplikasi</button>
        <button type="submit" class="btn-primary">Registrasi Online Ahli Gizi</button>
        <p>BMI tidak sepenuhnya mewakili diagnosis menyeluruh dai kesehatan tubuh dan resiko
        penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan 
        kekhawatiran Anda terkait dengan berat badan Anda.</p>
        <footer>Made by @Kesha Azka Afleni</footer>
    `;
});