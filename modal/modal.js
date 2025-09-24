/**
 * =================================================================
 * SCRIPT POP-UP MODAL
 * =================================================================
 * Skrip ini mengelola tampilan dan interaksi pop-up modal.
 * Pop-up akan muncul secara otomatis saat halaman dimuat.
 */

function createModal() {
    // 1. Definisikan struktur HTML untuk pop-up
    const modalHTML = `
        <div class="modal-overlay" id="my-modal-overlay">
            <div class="modal-content relative">
                <button class="modal-close-button" id="my-modal-close-button">&times;</button>
                <div id="modal-body-content">
                    </div>
            </div>
        </div>
    `;

    // 2. Tambahkan HTML pop-up ke body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modalOverlay = document.getElementById('my-modal-overlay');
    const closeButton = document.getElementById('my-modal-close-button');

    // 3. Tambahkan event listener untuk menutup pop-up
    closeButton.addEventListener('click', () => {
        closeModal();
    });

    modalOverlay.addEventListener('click', (event) => {
        // Tutup pop-up jika mengklik di luar konten
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    // 4. Panggil fungsi untuk menampilkan pop-up secara otomatis
    // Anda bisa memodifikasi konten di sini sesuai kebutuhan
    const title = 'Selamat Datang!';
    const content = `
        <p>Terima kasih telah berkunjung. Kami punya jalur pembelajaran baru untuk Anda!</p>
        <p class="mt-4">Jelajahi berbagai pilihan dan mulai petualangan Anda.</p>
        <a href="#" class="inline-block mt-6 px-6 py-2 rounded-full text-sm font-semibold bg-sky-500 hover:bg-sky-600 transition-colors">Lihat Selengkapnya</a>
    `;
    
    // Tampilkan pop-up setelah inisialisasi selesai
    showModal(title, content);
}

// Fungsi untuk menampilkan pop-up
window.showModal = function(title, content) {
    const modalOverlay = document.getElementById('my-modal-overlay');
    const modalBody = document.getElementById('modal-body-content');

    if (!modalOverlay || !modalBody) {
        console.error('Elemen pop-up tidak ditemukan. Pastikan createModal() telah dijalankan.');
        return;
    }

    // Suntikkan konten ke dalam pop-up
    modalBody.innerHTML = `
        <h2 class="text-2xl font-bold text-slate-100 mb-4">${title}</h2>
        <div class="text-slate-300">
            ${content}
        </div>
    `;
    
    // Tampilkan pop-up dengan menambahkan kelas 'is-active'
    modalOverlay.classList.add('is-active');
}

// Fungsi untuk menyembunyikan pop-up
function closeModal() {
    const modalOverlay = document.getElementById('my-modal-overlay');
    modalOverlay.classList.remove('is-active');
}

// Jalankan fungsi createModal() setelah seluruh halaman selesai dimuat
document.addEventListener('DOMContentLoaded', createModal);