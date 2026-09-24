<script setup lang="ts">
import {
    Handshake,
    Lightbulb,
    Heart,
    Target,
} from "lucide-vue-next";

const features = [
    {
        title: "Pengembangan Diri",
        description:
            "Tingkatkan skill dan potensi diri bersama komunitas.",
        icon: Target,
    },
    {
        title: "Kebersamaan",
        description:
            "Jalin silaturahmi dan persaudaraan antar pemuda.",
        icon: Handshake,
    },
    {
        title: "Pengabdian",
        description:
            "Berikan manfaat nyata untuk masyarakat desa.",
        icon: Heart,
    },
    {
        title: "Masa Depan",
        description:
            "Bersama membangun desa yang lebih baik.",
        icon: Lightbulb,
    },
];
</script>

<template>
    <section class="bg-white py-20">

        <div class="mx-auto max-w-7xl px-5 lg:px-8">

            <!-- Heading -->
            <div class="mx-auto max-w-2xl text-center">
                <span class="text-sm font-bold uppercase tracking-widest text-red-600">
                    Karang Taruna
                </span>

                <h2 class="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                    Kenapa Bergabung Dengan Kami?
                </h2>

                <p class="mt-4 text-slate-600">
                    Bersama pemuda desa, kita membangun kegiatan positif
                    dan memberikan manfaat bagi masyarakat.
                </p>
            </div>

            <!-- Cards -->
            <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div v-for="feature in features" :key="feature.title"
                    class="group rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl">

                    <div
                        class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                        <component :is="feature.icon" :size="25" />
                    </div>

                    <h3 class="mt-5 font-bold text-slate-900">
                        {{ feature.title }}
                    </h3>

                    <p class="mt-2 text-sm leading-6 text-slate-500">
                        {{ feature.description }}
                    </p>

                </div>
            </div>

        </div>

    </section>
</template>