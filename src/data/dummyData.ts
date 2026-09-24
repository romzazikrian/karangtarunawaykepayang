export type GalleryCategory =
  | "Semua"
  | "Kegiatan"
  | "Sosial"
  | "Lingkungan"
  | "Olahraga";

export interface GalleryItem {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, "Semua">;
  image: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Bakti Sosial Bersama Masyarakat",
    category: "Sosial",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    title: "Kegiatan Pemuda Desa",
    category: "Kegiatan",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    title: "Gotong Royong Lingkungan",
    category: "Lingkungan",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    title: "Turnamen Olahraga Desa",
    category: "Olahraga",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    title: "Penanaman Pohon",
    category: "Lingkungan",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    title: "Pelatihan Pemuda",
    category: "Kegiatan",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 7,
    title: "Kegiatan Sosial Desa",
    category: "Sosial",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 8,
    title: "Olahraga Bersama",
    category: "Olahraga",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 9,
    title: "Kerja Bakti Desa",
    category: "Lingkungan",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85",
  },
];

/* =========================================================
   DATA KEGIATAN
   Tambahan untuk component Activities.vue
   ========================================================= */

export type ActivityCategory =
  | "Semua"
  | "Sosial"
  | "Pendidikan"
  | "Lingkungan"
  | "Olahraga";

export interface Activity {
  id: number;
  title: string;
  category: Exclude<ActivityCategory, "Semua">;
  date: string;
  description: string;
  image: string;
}

export const activities: Activity[] = [
  {
    id: 1,
    title: "Bakti Sosial Bersama Masyarakat",
    category: "Sosial",
    date: "15 September 2026",
    description:
      "Kegiatan bakti sosial bersama masyarakat Desa Way Kepayang sebagai bentuk kepedulian dan kebersamaan antarwarga.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    title: "Kegiatan Belajar Bersama",
    category: "Pendidikan",
    date: "10 September 2026",
    description:
      "Kegiatan belajar bersama untuk membantu meningkatkan pengetahuan dan semangat belajar anak-anak di Desa Way Kepayang.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    title: "Gotong Royong Lingkungan",
    category: "Lingkungan",
    date: "5 September 2026",
    description:
      "Kegiatan gotong royong bersama masyarakat untuk menjaga kebersihan dan menciptakan lingkungan desa yang nyaman.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    title: "Turnamen Olahraga Desa",
    category: "Olahraga",
    date: "1 September 2026",
    description:
      "Turnamen olahraga antarwarga sebagai sarana mempererat silaturahmi, sportivitas, dan kebersamaan masyarakat.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    title: "Penanaman Pohon",
    category: "Lingkungan",
    date: "25 Agustus 2026",
    description:
      "Kegiatan penghijauan dan penanaman pohon bersama masyarakat untuk menjaga kelestarian lingkungan Desa Way Kepayang.",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    title: "Pelatihan Pemuda Desa",
    category: "Pendidikan",
    date: "20 Agustus 2026",
    description:
      "Pelatihan dan pengembangan keterampilan pemuda sebagai upaya meningkatkan kreativitas dan potensi generasi muda desa.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
  },
];
