Berikut adalah README yang sudah dihapus bagian struktur proyeknya:

# 🌊 Dunia Invertebrata Laut App

Selamat datang di **Dunia Invertebrata Laut App**, aplikasi interaktif berbasis React yang memberikan informasi tentang spesies invertebrata laut. Panduan ini akan membantu Anda mengatur proyek ini di sistem Anda dengan mudah.

🌐 **Coba Sekarang**: [Dunia Invertebrata Laut](https://Dunia-Invertebrata-Laut-Appvercel.app/)

---

## 🛠 Persiapan Awal

### **Prasyarat**

Sebelum memulai, pastikan perangkat Anda sudah terinstal:

- **Node.js** (versi 14 atau lebih baru)
- **npm** (termasuk dalam instalasi Node.js) atau **Yarn** sebagai pengelola paket.

### **Langkah Awal**

1. **Clone repositori ini** ke perangkat Anda:

   ```bash
   git clone https://github.com/your-username/Dunia-Invertebrata-Laut-App.git
   ```

2. **Masuk ke direktori proyek**:

   ```bash
   cd Dunia-Invertebrata-Laut-App
   ```

3. **Install semua dependensi yang diperlukan**:
   ```bash
   npm install
   # atau jika Anda menggunakan Yarn:
   yarn install
   ```

---

## 🚀 Menjalankan Proyek

1. **Jalankan server pengembangan**:

   ```bash
   npm start
   # atau jika Anda menggunakan Yarn:
   yarn start
   ```

2. **Akses aplikasi di browser Anda**:
   Aplikasi akan terbuka di `http://localhost:3000` secara otomatis. Jika tidak, buka URL ini secara manual.

3. **Coba versi online**:  
   Anda juga bisa menggunakan aplikasi versi online di [Dunia Invertebrata Laut](https://Dunia-Invertebrata-Laut-Appvercel.app/).

---

## 📦 Paket NPM yang Digunakan

### **Paket Utama**

- **React**: Framework JavaScript untuk membangun antarmuka pengguna.
- **React DOM**: Digunakan untuk merender React di browser.
- **Tailwind CSS**: Untuk styling cepat dengan utility-first CSS framework.
- **Lucide React**: Ikon modern untuk antarmuka.
- **Particles.js**: Membuat animasi latar belakang berbasis partikel.

### **Paket Pendukung**

- **React Router DOM**: Untuk navigasi antar halaman.
- **Classnames**: Membantu dalam mengelola kelas CSS secara dinamis.

### **Instalasi Paket (Jika Dibutuhkan)**

Jika Anda ingin menambahkan dependensi baru atau memastikan semuanya terpasang, gunakan perintah berikut:

- Untuk menginstal Tailwind CSS:

  ```bash
  npm install tailwindcss
  ```

- Untuk menambahkan React Router:

  ```bash
  npm install react-router-dom
  ```

- Untuk Particles.js:
  ```bash
  npm install tsparticles
  ```

---

## 🌈 Kustomisasi

1. **Menambah Data Spesies Baru**

   - Buka file `speciesData.js` di folder `data/`.
   - Tambahkan data spesies baru dalam format JSON sesuai dengan struktur yang ada.

2. **Mengubah Tampilan**

   - Edit kelas Tailwind CSS di komponen.
   - Jika diperlukan, tambahkan file CSS khusus di folder `styles/`.

3. **Mengatur Animasi Partikel**
   - Modifikasi konfigurasi di file `ParticlesBackground.js` untuk efek animasi yang diinginkan.

---

## 🤝 Kontribusi

1. Fork repositori ini.
2. Buat branch baru untuk fitur atau perbaikan Anda:
   ```bash
   git checkout -b fitur-baru
   ```
3. Commit perubahan Anda:
   ```bash
   git commit -m "Tambah fitur baru"
   ```
4. Push branch Anda:
   ```bash
   git push origin fitur-baru
   ```
5. Ajukan Pull Request.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License**. Silakan baca file `LICENSE` untuk detailnya.

---

## 🌍 Terima Kasih

Terima kasih telah mencoba aplikasi ini! Jangan ragu untuk memberikan saran atau melaporkan masalah di halaman GitHub kami. 🌟
