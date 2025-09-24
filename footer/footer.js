/**
 * =================================================================
 * SCRIPT FOOTER UTAMA
 * =================================================================
 * Skrip ini membuat dan mengelola footer sticky di bagian bawah halaman.
 */
function createMainFooter() {
    // 1. Cari placeholder di dalam HTML. Jika tidak ada, hentikan eksekusi.
    const footerPlaceholder = document.getElementById('main-footer-placeholder');
    if (!footerPlaceholder) {
        console.error("Placeholder dengan ID 'main-footer-placeholder' tidak ditemukan.");
        return;
    }

    // 2. Definisikan struktur HTML untuk footer
    const footerHTML = `
        <footer class="main-footer">
            <div class="footer-content">
                <div class="flex items-center gap-4">
                    <div class="relative" id="about-me-container">
                        <button type="button" class="nav-button footer-link">
                            About Me
                        </button>
                        <div class="footer-popup">
                            <h4 class="font-bold text-slate-100 mb-2">Tentang Saya</h4>
                            <p class="text-sm text-slate-300">
                                Syalva - Pengembang web yang bersemangat. Berfokus pada antarmuka pengguna yang bersih dan fungsional.
                            </p>
                        </div>
                    </div>
                    
                    <div class="relative" id="support-me-container">
                        <button type="button" class="nav-button footer-link">
                            Support Me
                        </button>
                        <div class="footer-popup">
                            <h4 class="font-bold text-slate-100 mb-2">Dukung Saya</h4>
                            <p class="text-sm text-slate-300">
                                Jika Anda menyukai proyek ini, pertimbangkan untuk mendukung saya!
                            </p>
                            <a href="#" class="text-sm text-sky-400 block mt-2 hover:underline">Beli saya kopi</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;

    // 3. Sisipkan HTML footer ke dalam placeholder
    footerPlaceholder.innerHTML = footerHTML;
}

// 4. Jalankan fungsi setelah seluruh halaman selesai dimuat
document.addEventListener('DOMContentLoaded', createMainFooter);