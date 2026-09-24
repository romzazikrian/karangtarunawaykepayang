<script setup lang="ts">
import {
    Users,
    Heart,
    Lightbulb,
    HandHeart,
    Leaf,
    ArrowRight,
} from "lucide-vue-next";

const values = [
    {
        title: "Solidaritas",
        description: "Bersama dalam kebersamaan dan kepedulian.",
        icon: Users,
    },
    {
        title: "Kreatif",
        description: "Melahirkan ide dan inovasi untuk desa.",
        icon: Lightbulb,
    },
    {
        title: "Peduli",
        description: "Memberikan manfaat bagi masyarakat.",
        icon: Heart,
    },
    {
        title: "Berkelanjutan",
        description: "Membangun masa depan yang lebih baik.",
        icon: Leaf,
    },
];
</script>

<template>
    <section id="about" class="overflow-hidden bg-white py-20 lg:py-24">
        <div class="mx-auto max-w-7xl px-5 lg:px-8">

            <!-- Heading -->
            <div class="mb-12">
                <span class="text-sm font-bold uppercase tracking-widest text-red-600">
                    Tentang Kami
                </span>

                <h2 class="mt-3 max-w-2xl text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                    Pemuda Bergerak,
                    <span class="text-red-600">
                        Desa Berkembang
                    </span>
                </h2>

                <p class="mt-4 max-w-2xl leading-7 text-slate-600">
                    Karang Taruna Desa Way Kepayang merupakan organisasi
                    kepemudaan yang menjadi wadah bagi pemuda dan pemudi
                    untuk berorganisasi, berkarya, dan memberikan kontribusi
                    positif bagi masyarakat.
                </p>
            </div>

            <!-- Main Content -->
            <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                <!-- Image -->
                <div class="relative">

                    <div
                        class="absolute -left-4 -top-4 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-yellow-400">
                    </div>

                    <div class="relative overflow-hidden rounded-3xl">
                        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85"
                            alt="Kegiatan pemuda"
                            class="h-[420px] w-full object-cover transition duration-700 hover:scale-105" />

                        <!-- Overlay -->
                        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-7">
                            <p class="font-bold text-white">
                                Karang Taruna Desa Way Kepayang
                            </p>

                            <p class="mt-1 text-sm text-slate-200">
                                Bersama membangun desa
                            </p>
                        </div>
                    </div>

                    <div
                        class="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-red-600">
                    </div>
                </div>

                <!-- Text -->
                <div>
                    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                        <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white">
                            <HandHeart :size="24" />
                        </div>

                        <h3 class="text-2xl font-black text-slate-900">
                            Wadah Kreativitas Pemuda Desa
                        </h3>

                        <p class="mt-4 leading-7 text-slate-600">
                            Kami percaya bahwa pemuda memiliki peran penting
                            dalam perkembangan desa. Melalui berbagai kegiatan
                            sosial, pendidikan, lingkungan, olahraga, dan
                            kreativitas, Karang Taruna hadir untuk mendorong
                            pemuda agar aktif berkontribusi.
                        </p>

                        <a href="#profil"
                            class="mt-6 inline-flex items-center gap-2 font-bold text-red-600 transition hover:text-red-700">
                            Selengkapnya

                            <ArrowRight :size="18" />
                        </a>
                    </div>
                </div>

            </div>

            <!-- Values -->
            <div class="mt-16">

                <div class="mb-7 text-center">
                    <h3 class="text-2xl font-black text-slate-900">
                        Nilai Yang Kami Bawa
                    </h3>
                </div>

                <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div v-for="value in values" :key="value.title"
                        class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
                        <div
                            class="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                            <component :is="value.icon" :size="22" />
                        </div>

                        <h4 class="mt-5 font-bold text-slate-900">
                            {{ value.title }}
                        </h4>

                        <p class="mt-2 text-sm leading-6 text-slate-500">
                            {{ value.description }}
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>