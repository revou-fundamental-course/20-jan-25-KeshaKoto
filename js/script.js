//fungsi untuk menghitung BMI
function kalkulatorBMI(berat, tinggi) {
    return berat / ((tinggi / 100) **2);
}

//pengiriman form
document.getElementById('bmiForm').addEventListener('hitung', function(event)
{
    event.preventDefault(); 
    //mengambil nilai dari input
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    //validasi input
    if(isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
        alert('Mohon masukkan nilai yang valid untuk berat dan tinggi badan');
    return;
}

    //menghitung BMI
    const bmi = kalkulatorBMI(berat, tinggi);
    let status = '';

    //menentukan status berdasarkan nilai BMI
    if (bmi < 18.5) {
        status = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal (ideal)';
    } else if (bmi >= 25 && bmi <29.9) {
        status = 'Kelebihan berat badan';
    } else {
        status = 'Kegemukan (Obesitas)';
    }

    //menampilkan hasil
    document.getElementById('hasil').innerHTML = 
    `
        <h2>Hasil</h2>
        <p><strong>Status: ${status}</strong></p>
        <p>BMI: ${bmi.toFixed(2)}</p>
        <p>Anda memiliki berat badan ${status.toLowerCase()}.</p>
        <button onclick="downloadBMI()">Download Hasil BMI</button>
    `;
});