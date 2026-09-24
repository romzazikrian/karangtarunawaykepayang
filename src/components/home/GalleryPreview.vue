<script setup lang="ts">
import { computed, ref } from "vue";

import {
    ArrowRight,
    Expand,
    Image as ImageIcon,
    X,
} from "lucide-vue-next";

import {
    galleryItems,
    type GalleryCategory,
} from "../../data/dummyData";

const selectedCategory = ref<GalleryCategory>("Semua");

const selectedImage = ref<{
    title: string;
    image: string;
} | null>(null);

const categories: GalleryCategory[] = [
    "Semua",
    "Kegiatan",
    "Sosial",
    "Lingkungan",
    "Olahraga",
];

const filteredGallery = computed(() => {
    if (selectedCategory.value === "Semua") {
        return galleryItems;
    }

    return galleryItems.filter(
        (item) => item.category === selectedCategory.value
    );
});

function openImage(item: {
    title: string;
    image: string;
}) {
    selectedImage.value = item;
}

function closeImage() {
    selectedImage.value = null;
}
</script>

<template>
    <section id="galeri" class="bg-white py-20 lg:py-24">
        <div class="mx-auto max-w-7xl px-5 lg:px-8">

            <!-- Header -->
            <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                    <span class="text-sm font-bold uppercase tracking-widest text-red-600">
                        Galeri
                    </span>

                    <h2 class="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                        Dokumentasi Kegiatan
                    </h2>

                    <p class="mt-3 max-w-xl leading-7 text-slate-600">
                        Lihat berbagai dokumentasi kegiatan Karang Taruna
                        Desa Way Kepayang bersama masyarakat.
                    </p>
                </div>

                <a href="#galeri" class="inline-flex items-center gap-2 font-bold text-red-600">
                    Lihat Semua

                    <ArrowRight :size="18" />
                </a>
            </div>

            <!-- Filter -->
            <div class="mt-10 flex gap-2 overflow-x-auto pb-2">
                <button v-for="category in categories" :key="category" type="button"
                    @click="selectedCategory = category"
                    class="whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-bold transition" :class="selectedCategory === category
                            ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                            : 'border border-slate-200 bg-white text-slate-600 hover:border-red-300 hover:text-red-600'
                        ">
                    {{ category }}
                </button>
            </div>

            <!-- Gallery Grid -->
            <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <article v-for="item in filteredGallery" :key="item.id"
                    class="group relative overflow-hidden rounded-2xl bg-slate-100">
                    <!-- Image -->
                    <div class="aspect-[4/3] overflow-hidden">
                        <img :src="item.image" :alt="item.title"
                            class="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    </div>

                    <!-- Overlay -->
                    <div
                        class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                        <div class="flex items-end justify-between gap-4">
                            <div>
                                <span
                                    class="inline-block rounded-lg bg-yellow-400 px-2.5 py-1 text-xs font-bold text-slate-900">
                                    {{ item.category }}
                                </span>

                                <h3 class="mt-2 font-bold text-white">
                                    {{ item.title }}
                                </h3>
                            </div>

                            <button type="button"
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-900 transition hover:bg-yellow-400"
                                @click="openImage(item)" aria-label="Lihat gambar">
                                <Expand :size="18" />
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Empty -->
            <div v-if="filteredGallery.length === 0"
                class="mt-8 rounded-2xl border border-dashed border-slate-300 p-12 text-center">
                <ImageIcon class="mx-auto text-slate-400" :size="40" />

                <p class="mt-3 font-semibold text-slate-600">
                    Belum ada dokumentasi.
                </p>
            </div>

            <!-- Pagination -->
            <div class="mt-10 flex items-center justify-center gap-2">
                <button
                    class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500">
                    ‹
                </button>

                <button class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 font-bold text-white">
                    1
                </button>

                <button
                    class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-red-300 hover:text-red-600">
                    2
                </button>

                <button
                    class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-red-300 hover:text-red-600">
                    3
                </button>

                <button
                    class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500">
                    ›
                </button>
            </div>
        </div>

        <!-- Image Modal -->
        <Teleport to="body">
            <div v-if="selectedImage"
                class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
                @click.self="closeImage">
                <div class="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
                    <!-- Close -->
                    <button type="button"
                        class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-red-600"
                        @click="closeImage" aria-label="Tutup">
                        <X :size="20" />
                    </button>

                    <img :src="selectedImage.image" :alt="selectedImage.title"
                        class="max-h-[75vh] w-full object-contain" />

                    <div class="p-5">
                        <h3 class="font-black text-slate-900">
                            {{ selectedImage.title }}
                        </h3>
                    </div>
                </div>
            </div>
        </Teleport>
    </section>
</template>