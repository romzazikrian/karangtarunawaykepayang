<script setup lang="ts">
import { computed, ref } from "vue";
import {
    CalendarDays,
    ArrowRight,
    MapPin,
} from "lucide-vue-next";

import {
    activities,
    type ActivityCategory,
} from "../../data/dummyData";

const selectedCategory = ref<ActivityCategory>("Semua");

const categories: ActivityCategory[] = [
    "Semua",
    "Sosial",
    "Pendidikan",
    "Lingkungan",
    "Olahraga",
];

const filteredActivities = computed(() => {
    if (selectedCategory.value === "Semua") {
        return activities;
    }

    return activities.filter(
        (activity) =>
            activity.category === selectedCategory.value
    );
});
</script>

<template>
    <section id="kegiatan" class="bg-slate-50 py-20 lg:py-24">
        <div class="mx-auto max-w-7xl px-5 lg:px-8">

            <!-- Header -->
            <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <span class="text-sm font-bold uppercase tracking-widest text-red-600">
                        Kegiatan
                    </span>

                    <h2 class="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                        Kegiatan Kami
                    </h2>

                    <p class="mt-3 max-w-xl leading-7 text-slate-600">
                        Berbagai kegiatan Karang Taruna bersama masyarakat
                        Desa Way Kepayang.
                    </p>
                </div>

                <a href="#kegiatan" class="inline-flex items-center gap-2 font-bold text-red-600">
                    Lihat Semua
                    <ArrowRight :size="18" />
                </a>
            </div>

            <!-- Filter -->
            <div class="mt-10 flex gap-2 overflow-x-auto pb-2">
                <button v-for="category in categories" :key="category" @click="selectedCategory = category"
                    class="whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-bold transition" :class="selectedCategory === category
                            ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                            : 'border border-slate-200 bg-white text-slate-600 hover:border-red-300 hover:text-red-600'
                        ">
                    {{ category }}
                </button>
            </div>

            <!-- Cards -->
            <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                <article v-for="activity in filteredActivities" :key="activity.id"
                    class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                    <!-- Image -->
                    <div class="relative h-56 overflow-hidden">
                        <img :src="activity.image" :alt="activity.title"
                            class="h-full w-full object-cover transition duration-700 group-hover:scale-110" />

                        <!-- Category -->
                        <span
                            class="absolute left-4 top-4 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-bold text-white shadow">
                            {{ activity.category }}
                        </span>
                    </div>

                    <!-- Content -->
                    <div class="p-6">

                        <div class="flex items-center gap-2 text-xs font-medium text-slate-500">
                            <CalendarDays :size="15" />

                            {{ activity.date }}
                        </div>

                        <h3 class="mt-3 text-xl font-black text-slate-900 transition group-hover:text-red-600">
                            {{ activity.title }}
                        </h3>

                        <p class="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                            {{ activity.description }}
                        </p>

                        <div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                            <div class="flex items-center gap-1.5 text-xs text-slate-400">
                                <MapPin :size="14" />

                                Way Kepayang
                            </div>

                            <button class="flex items-center gap-1 text-sm font-bold text-red-600 hover:text-red-700">
                                Detail

                                <ArrowRight :size="15" />
                            </button>
                        </div>

                    </div>
                </article>

            </div>

            <!-- Empty State -->
            <div v-if="filteredActivities.length === 0"
                class="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
                <p class="font-semibold text-slate-600">
                    Belum ada kegiatan pada kategori ini.
                </p>
            </div>

        </div>
    </section>
</template>