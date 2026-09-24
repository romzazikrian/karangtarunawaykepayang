<script setup lang="ts">
import Hero from "../components/home/Hero.vue";
import Features from "../components/home/Features.vue";
import AboutPreview from "../components/home/AboutPreview.vue";
import LatestActivities from "../components/home/LatestActivities.vue";
import GalleryPreview from "../components/home/GalleryPreview.vue";
</script>

<template>
    <main>
        <!-- Hero -->
        <Hero />

        <!-- Kenapa Bergabung -->
        <Features />

        <!-- Tentang Kami -->
        <AboutPreview />

        <!-- Kegiatan -->
        <LatestActivities />

        <GalleryPreview />

        <!-- Berita - sementara -->
        <section id="berita" class="bg-slate-50 py-24">
            <div class="mx-auto max-w-7xl px-5 text-center lg:px-8">

                <span class="text-sm font-bold uppercase tracking-widest text-red-600">
                    Berita
                </span>

                <h2 class="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                    Berita Terbaru
                </h2>

                <p class="mt-4 text-slate-600">
                    Berita Karang Taruna akan kita buat pada tahap berikutnya.
                </p>

            </div>
        </section>

        <!-- Profil - sementara -->
        <section id="profil" class="bg-white py-24">
            <div class="mx-auto max-w-7xl px-5 text-center lg:px-8">

                <span class="text-sm font-bold uppercase tracking-widest text-red-600">
                    Profil
                </span>

                <h2 class="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                    Profil Organisasi
                </h2>

                <p class="mt-4 text-slate-600">
                    Visi, misi dan struktur organisasi akan kita buat
                    pada tahap berikutnya.
                </p>

            </div>
        </section>

        <!-- Kontak - sementara -->
        <section id="kontak" class="bg-slate-50 py-24">
            <div class="mx-auto max-w-7xl px-5 text-center lg:px-8">

                <span class="text-sm font-bold uppercase tracking-widest text-red-600">
                    Kontak
                </span>

                <h2 class="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                    Hubungi Kami
                </h2>

                <p class="mt-4 text-slate-600">
                    Informasi kontak akan kita buat pada tahap berikutnya.
                </p>

            </div>
        </section>
    </main>
</template>