# Loans App (Aplikasi Pemesanan Kendaraan)

Aplikasi ini digunakan untuk melakukan pemesanan kendaraan dengan beberapa fitur utama, termasuk manajemen pemesanan, persetujuan berjenjang, dashboard grafik pemakaian kendaraan, dan laporan pemesanan yang dapat diexport dalam format Excel.

## Daftar Isi

- [Informasi Proyek](#informasi-proyek)
- [Persyaratan Sistem](#persyaratan-sistem)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Daftar Username-Password](#daftar-username-password)
- [Framework](#framework)
- [File Pendukung](#file-pendukung)
- [Author](#Author)

## Informasi Proyek

Aplikasi ini dibangun untuk memudahkan proses pemesanan kendaraan dengan fitur-fitur yang mencakup manajemen pemesanan, persetujuan berjenjang, dan pelaporan.

## Persyaratan Sistem

- PHP 7.0 atau versi lebih tinggi.
- MySQL atau database relasional lainnya (XAMPP/MAMPP/WAMPP).
- Web server (contoh: Apache).
- Browser web modern (Chrome/Firefox/Safari).
- Composer
- NodeJS versi  >= 14
- Angular CLI versi >= 15

## Instalasi

Membuka terminal lalu
Clone repositori ini ke dalam direktori komputer anda

### Backend
- `cd backend`
- `composer install atau composer update` 
- `cp .env.example .env`
- `php artisan key:generate`
- silahkan membuat database dengan contoh
  <img src="./additionals/make-database.png">
- konfigurasi .env seperti gambar (untuk password sesuaikan dengan password database anda)
  <img src="./additionals/env-backend.png">
- `php artisan migrate --seed`
- `php artisan serve`

### Frontend
- buka dengan beda terminal (cmd/powershell)
- `cd frontend`
- `npm install -g @angular/cli`
- setelah install angular cli coba cek dengan
  `ng version`
- `npm install atau npm update`
- `ng serve --open`

## Penggunaan

1. Akses aplikasi melalui browser dengan [http://localhost:4200](http://localhost:4200)
2. Login menggunakan akun admin atau pihak yang menyetujui.
3. Gunakan menu untuk melakukan pemesanan, persetujuan, dan melihat laporan.

## Daftar Username-Password

| Email             | Password    | Role   |
| ----------------- | ----------- | ------ |
| admin@test.com    | password    | Admin  |
| sup1@test.com     | password    | User   |
| sup2@test.com     | password    | User   |
| sup3@test.com     | password    | User   |

## Framework

Aplikasi ini menggunakan kombinasi Laravel sebagai backend dan Angular sebagai frontend untuk memastikan kehandalan, keamanan, dan antarmuka pengguna yang responsif.

### Backend (Laravel)
- Framework: Laravel
- Versi Laravel: 8.0
- Dokumentasi Laravel: https://laravel.com/docs/8.x
### Frontend (Angular)
- Framework: Angular
- Versi Angular: 15
- Dokumentasi Angular: https://angular.io/docs

Kombinasi dari Laravel sebagai backend dan Angular sebagai frontend memberikan kelebihan dalam manajemen sumber daya, kecepatan pengembangan, dan pengalaman pengguna yang interaktif. Pastikan untuk mengikuti pedoman instalasi dan konfigurasi masing-masing framework untuk memastikan integrasi yang mulus antara backend dan frontend.

## File Pendukung

- Video Aplikasi
- API Dokumentasi [http://localhost:8000/request-docs](http://localhost:8000/request-docs) pastikan sudah menjalankan backend
- Api Postman
- Struktur Data Konsep 
  <img src="./additionals/pdm.png">
- User Case Diagram
  <img src="./additionals/ucd.png">
  

## Author

Mochammad Hairullah | 2024
