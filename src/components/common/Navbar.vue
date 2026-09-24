<script setup lang="ts">
import { ref } from "vue";
import {
    Menu,
    X,
    Search,
} from "lucide-vue-next";

const mobileMenu = ref(false);

const navItems = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Kegiatan", href: "#kegiatan" },
    { name: "Galeri", href: "#galeri" },
    { name: "Berita", href: "#berita" },
    { name: "Profil", href: "#profil" },
    { name: "Kontak", href: "#kontak" },
];
</script>

<template>
    <header class="fixed left-0 top-0 z-50 w-full border-b border-red-800/30 bg-red-600 shadow-lg">
        <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

            <!-- Logo -->
            <a href="#home" class="flex items-center gap-3">
                <div
                    class="flex h-11 w-11 items-center justify-center rounded-full border-2 border-yellow-400 bg-white text-xl shadow-md">
                    🌟
                </div>

                <div class="leading-tight text-white">
                    <p class="text-sm font-bold">
                        Karang Taruna
                    </p>

                    <p class="text-xs text-yellow-300">
                        Desa Way Kepayang
                    </p>
                </div>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden items-center gap-1 lg:flex">
                <a v-for="item in navItems" :key="item.name" :href="item.href"
                    class="rounded-lg px-3 py-2 text-sm font-medium text-white transition hover:bg-white/15 hover:text-yellow-300">
                    {{ item.name }}
                </a>

                <button class="ml-2 rounded-lg p-2 text-white transition hover:bg-white/15 hover:text-yellow-300"
                    aria-label="Search">
                    <Search :size="19" />
                </button>
            </nav>

            <!-- Mobile Button -->
            <button class="rounded-lg p-2 text-white hover:bg-white/15 lg:hidden" @click="mobileMenu = !mobileMenu"
                aria-label="Menu">
                <X v-if="mobileMenu" :size="25" />
                <Menu v-else :size="25" />
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="mobileMenu" class="border-t border-red-500 bg-red-600 px-5 pb-5 pt-3 lg:hidden">
            <nav class="flex flex-col gap-1">
                <a v-for="item in navItems" :key="item.name" :href="item.href"
                    class="rounded-lg px-4 py-3 text-sm font-medium text-white hover:bg-white/10 hover:text-yellow-300"
                    @click="mobileMenu = false">
                    {{ item.name }}
                </a>
            </nav>
        </div>
    </header>
</template>