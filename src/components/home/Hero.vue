<script setup lang="ts">
import {
    ArrowRight,
    Users,
} from "lucide-vue-next";
</script>

<template>
    <section id="home" class="relative flex min-h-[720px] items-center overflow-hidden bg-slate-950 pt-20">

        <!-- Background -->
        <div class="absolute inset-0 bg-cover bg-center" style="
        background-image:
          linear-gradient(
            90deg,
            rgba(15, 23, 42, 0.95) 0%,
            rgba(15, 23, 42, 0.75) 45%,
            rgba(15, 23, 42, 0.35) 100%
          ),
          url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=85');
      "></div>

        <!-- Yellow Decorative Shape -->
        <div class="absolute bottom-0 left-0 h-2 w-full bg-yellow-400"></div>

        <div class="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
            <div class="max-w-3xl">

                <!-- Badge -->
                <div
                    class="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300 backdrop-blur-sm">
                    <Users :size="17" />

                    Bersama Muda, Membangun Desa
                </div>

                <!-- Heading -->
                <h1 class="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Karang Taruna
                    <span class="block text-yellow-400">
                        Desa Way Kepayang
                    </span>
                </h1>

                <!-- Description -->
                <p class="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                    Wadah pemuda-pemudi Desa Way Kepayang untuk berkarya,
                    berorganisasi, berkontribusi, dan bersama-sama membangun
                    desa yang lebih maju.
                </p>

                <!-- Buttons -->
                <div class="mt-9 flex flex-col gap-3 sm:flex-row">

                    <a href="#about"
                        class="group inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-slate-900 shadow-lg shadow-yellow-400/20 transition hover:bg-yellow-300">
                        Tentang Kami

                        <ArrowRight :size="18" class="transition-transform group-hover:translate-x-1" />
                    </a>

                    <a href="#kegiatan"
                        class="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20">
                        Lihat Kegiatan
                    </a>

                </div>

            </div>
        </div>

        <!-- Bottom Curve -->
        <div class="absolute -bottom-1 left-0 h-16 w-full bg-white"
            style="clip-path: polygon(0 70%, 25% 45%, 50% 70%, 75% 40%, 100% 65%, 100% 100%, 0 100%);"></div>

    </section>
</template>