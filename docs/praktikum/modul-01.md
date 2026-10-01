# **Dokumen Teknis Modul 1 — Lingkungan Pengembangan, Git, dan Lalu Lintas HTTP**


Nama/NIM 	: Yusuf Rizky Nugroho/105224012

Repositori	: [https://github.com/yusufrn1/praktikum\_web](https://github.com/yusufrn1/praktikum_web)


## 1. Lingkungan Pengembangan

| No | Tool/OS | Version |
| - | - | - |
| 1 | Ubuntu  | 26.04.1 LTS |
| 2 | Node.js | 22.22.1 |
| 3 | npm | 9.2.0 |
| 4 | Git | 2.53.0 |
| 5 | Visual Studio Code | 1.139.1 |


## 2. Alur Kerja Git

yusuf@yusuf-11e:~/Documents/UPER/Semester5/Praktikum\_Pengembangan\_Aplikasi\_Web$ git log --oneline --graph

- a421648 (HEAD -\> week1, origin/week1) Initialize Next.js project with TypeScript and Tailwind CSS setup

- 97155ea (main) first commit

[https://github.com/yusufrn1/praktikum\_web/pull/1](https://github.com/yusufrn1/praktikum_web/pull/1)


Tidak ada conflict.

## 3. Alur Kerja Git


| **No** | **URL** | **Metode** | **Kode Status** | **Content-Type** | ***Header* Lain yang Diamati** |
| :-: | :-: | :-: | :-: | :-: | :-: |
| 1 | [http://localhost:3000/](http://localhost:3000/) | GET | 200 OK | text/html; charset=utf-8 | `Cache-Control: no-cache, must-revalidate`; `X-Powered-By: Next.js`; `Vary: rsc, next-router-state-tree, ...`; `Transfer-Encoding: chunked`; `Connection: keep-alive`; `Keep-Alive: timeout=5` |
| 2 | [http://localhost:3000/halaman-tidak-ada](http://localhost:3000/halaman-tidak-ada) | GET | **\[belum ada data\]** | **\[belum ada data\]** | **\[belum ada data\]** |
| 3 | Satu berkas JS dari localhost (`turbopack-\_08bm286.\_.js`) | GET | 304 Not Modified | **\[belum diverifikasi\]** (kolom *Type* di DevTools hanya menampilkan "js") | Transferred: `cached`; ukuran 105,35 kB; waktu 58 ms; Initiator: `script` |
| 4 | [http://github.com](http://github.com/) (curl) | GET | 301 Moved Permanently | Tidak ada (respons tanpa isi) | `Location: https://github.com/`; `Content-Length: 0` |
| 5 | [https://developer.mozilla.org](https://developer.mozilla.org/) (dengan *cache*) | GET | **\[data https belum ada\]**; yang teramati dari `http://`: 301 Moved permanently | Tidak ada (respons tanpa isi) | `Location: https://developer.mozilla.org/`; `Server: Varnish`; `X-Cache: HIT`; `X-Cache-Hits: 0`; `Via: 1.1 varnish`; `X-Served-By: cache-sin-...`; `Retry-After: 0`; `Connection: close` |


## 4. Kendala dan Penyelesaian

Tidak ada kendala

## 5. Catatan Pemanfaatan AI

***can you read my file? a few days ago i already open localhost:3000. can i open that again now?**

***is it only displaying white screen only? few days ago we built Rosa. That's a landing page that red rose color based. I also can't opened it at mozilla**

***if i shutdown the computer, i just need to npm run dev right? answer with just a word**

***3 command diatas, bertanya ke AI tentang penggunaan Github, dan pembuatan tabel pada nomor 3.**
