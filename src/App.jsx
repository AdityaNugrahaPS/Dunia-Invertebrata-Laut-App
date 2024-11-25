import { useState } from "react";
import ParticlesBackground from './components/ParticlesBackground';
import './particles.css';
import Footer from "./components/Footer";
import {
  ArrowLeft,
  Layers,
  Library,
  Image as ImageIcon,
  AlertTriangle,
  User,
  Calendar,
  Quote,
  Fish,
  Home,
  Shield,
  FileText,
  Award,
  Crown, // untuk Kingdom
  Dna, // untuk Phylum
  Network, // untuk Class
  GitBranch, // untuk Ordo
  Users, // untuk Family
  TreePine, // untuk Genus
  Leaf, // untuk Species
} from "lucide-react";


export default function Preview() {
  const [view, setView] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedRank, setSelectedRank] = useState(null);
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  const speciesData = [
    {
      name: "Dipsastraea speciosa",
      imageUrl: "./images/dipsastraea-speciosa.jpg",
      author: {
        name: "Dana",
        year: 1846,
        citation:
          "Dana, J.D. (1846) United States Exploring Expedition during the years 1838-1842",
      },
      taxonomy: {
        Kingdom: "Animalia",
        Phylum: "Cnidaria",
        Class: "Hexacorallia",
        Ordo: "Scleractinia",
        Family: "Merulinidae",
        Genus: "Dipsastraea",
        Species: "Dipsastraea speciosa",
      },
      description:
        "Karang ini membentuk koloni dengan struktur yang menyerupai piring. Polipnya berdiameter 10-15 mm dan memiliki warna yang bervariasi, mulai dari coklat, hijau, hingga abu-abu, tergantung pada kondisi lingkungan. Koloni karang ini memiliki septa yang halus, banyak, dan teratur. Karang ini bersimbiosis dengan alga untuk mendapatkan energi melalui fotosintesis. Biasanya, ia ditemukan di perairan dangkal yang menerima sinar matahari cukup dengan arus yang moderat. Untuk mendapatkan makanannya, karang ini menggunakan tentakel untuk menangkap plankton dan partikel makanan lainnya. Polipnya tampak jelas dan terpisah oleh dinding lunak, memberikan tampilan yang khas pada koloni ini.",
      habitat: "Terumbu karang di perairan dangkal",
      status: "Belum Dievaluasi",
    },
    {
      name: "Holothuria atra",
      imageUrl: "./images/holothuria-atra.jpg",
      author: {
        name: "Jaeger",
        year: 1833,
        citation: "Jaeger, G.F. (1833) De Holothuriis",
      },
      taxonomy: {
        Kingdom: "Animalia",
        Phylum: "Echinodermata",
        Class: "Holothuroidea",
        Ordo: "Aspidochirotida",
        Family: "Holothuriidae",
        Genus: "Holothuria",
        Species: "Holothuria atra",
      },
      description:
        "Secara morfologi, Holothuria atra memiliki penampang tubuh bulat dengan sisi ventral yang cenderung datar, serta lubang anus yang bulat. Warna tubuhnya hitam, dengan kulit tubuh yang lembut dan tebal. Hewan ini ditemukan di daerah bersubstrat pasir kasar dan sering kali tubuhnya diselimuti oleh pasir halus (Elfidasari et al., 2012). Menurut Tangko (2009), teripang ini memiliki 20 tentakel yang mengelilingi bagian mulut seperti rumbai elastis, yang berfungsi untuk menangkap makanan. Pada bagian perut yang pipih atau rata, ditemukan banyak kaki tabung (ambulaktral). Teripang memiliki bentuk tubuh memanjang. Pada salah satu ujung tubuhnya terdapat tentakel yang mengelilingi lubang mulut, yang digunakan untuk menangkap mangsa. Kaki-kaki tabung (podia) merupakan kaki semu yang terletak di sisi ventral tubuh. Jika dilihat dari penampang tubuhnya, teripang tampak memiliki bentuk bulat, setengah lingkaran, persegi, trapesium, atau bulat memanjang seperti ular.",
      habitat: "Dasar laut berpasir dan terumbu karang",
      status: "Rentan",
    },
    {
      name: "Favia specioca",
      imageUrl: "./images/favia-specioca.jpg",
      author: {
        name: "Dana",
        year: 1846,
        citation:
          "Dana, J.D. (1846) Zoophytes. United States Exploring Expedition",
      },
      taxonomy: {
        Kingdom: "Animalia",
        Phylum: "Cnidaria",
        Class: "Hexacorallia",
        Ordo: "Scleractinia",
        Family: "Faviidae",
        Genus: "Favia",
        Species: "Favia specioca",
      },
      description:
        "Habitatnya berada di perairan yang memiliki sinar matahari cukup, seperti terumbu karang dangkal, dengan suhu air hangat, sanitasi yang stabil, dan arus sedang.Membentuk koloni dengan polip-polip yang terpisah oleh dinding lunak. Permukaan koloni sering kali memiliki pola yang menyerupai maze atau labirin. Polip hidup menetap dengan bentuk silindris, memiliki satu ujung oral yang dikelilingi tentakel, serta bagian aboral yang menempel pada substrat. Memiliki septa yang padat dan teratur, serta pali yang menonjol keluar membentuk mahkota, sementara koralit membentuk pola piramida dan persegi.",
      habitat: "Terumbu karang dangkal",
      status: "Belum Dievaluasi",
    },
    {
      name: "Culcita sp.",
      imageUrl: "./images/culcita-sp.jpg",
      author: {
        name: "Agassiz",
        year: 1836,
        citation:
          "Agassiz, L. (1836) Prodrome d'une monographie des radiaires ou échinodermes",
      },
      taxonomy: {
        Kingdom: "Animalia",
        Phylum: "Echinodermata",
        Class: "Asteroidea",
        Ordo: "Valvatida",
        Family: "Oreasteridae",
        Genus: "Culcita",
        Species: "Culcita sp.",
      },
      description:
        "Culcita sp. merupakan jenis bintang laut dengan lengan berbentuk segi lima dan tubuh tebal seperti roti. Warna tubuhnya kuning kecoklatan (Agustina, 2012). Bintang laut ini termasuk dalam filum Echinodermata dan dapat hidup di berbagai habitat, seperti zona rataan terumbu, daerah pertumbuhan alga, padang lamun, koloni karang hidup, dan karang mati (Yusron, 2010). Secara morfologi, Culcita sp. memiliki bentuk simetris radial, dengan bagian bawah tubuh dilengkapi kaki tabung yang berfungsi sebagai cakram penyedot (Kastawi, 2005). Bintang laut ini menggunakan kaki tabungnya untuk menempel pada bebatuan, merangkak secara perlahan, dan menjerat mangsa seperti remis dan tiram (Lariman, 2011).",
      habitat: "Terumbu karang dan padang lamun",
      status: "Belum Dievaluasi",
    },
    {
      name: "Tridacna maxima",
      imageUrl: "./images/tridacna-maxima.jpg",
      author: {
        name: "Röding",
        year: 1798,
        citation: "Röding, P.F. (1798) Museum Boltenianum",
      },
      taxonomy: {
        Kingdom: "Animalia",
        Phylum: "Mollusca",
        Class: "Bivalvia",
        Ordo: "Cardiida",
        Family: "Cardiidae",
        Genus: "Tridacna",
        Species: "Tridacna maxima",
      },
      description:
        "Tridacna maxima termasuk dalam filum Bivalvia yang berukuran besar dan mudah dikenali karena memiliki warna khas serta sebagian besar hidup berasosiasi dengan ekosistem terumbu karang. Keberadaannya di ekosistem terumbu karang memiliki fungsi ekologis penting, seperti menjadi biofilter alami untuk mengatur proses eutrofikasi dan memproduksi kalsium karbonat yang mendukung pertumbuhan terumbu karang (Soo & Todd, 2014; Vicentuan-Cabaitan et al., 2014; Neo et al., 2015). Bentuk, ukuran, dan warna khas pada mantelnya menjadi ciri utama sekaligus daya tarik Tridacna maxima. Hal ini membuatnya bernilai ekonomi tinggi, karena baik cangkang maupun dagingnya dapat dimanfaatkan sebagai bahan kerajinan, terutama kerajinan tangan (Neo & Loh, 2015).",
      habitat: "Terumbu karang dangkal",
      status: "Rentan",
    },
    {
      name: "Macrocypraea cervinetta",
      imageUrl: "./images/macrocypraea-cervinetta.jpg",
      author: {
        name: "Kiener",
        year: 1843,
        citation:
          "Kiener, L.C. (1843) Species général et iconographie des coquilles vivantes",
      },
      taxonomy: {
        Kingdom: "Animalia",
        Phylum: "Mollusca",
        Class: "Littorinimorpha",
        Ordo: "Littorinimorpha",
        Family: "Cypraeidae",
        Genus: "Macrocypraea",
        Species: "Macrocypraea cervinetta",
      },
      description:
        "Daerah pasang surut berbatu merupakan salah satu habitat yang dihuni oleh Macrocypraea cervinetta dan dianggap sebagai salah satu lingkungan laut yang paling beragam (Tait & Dipper, 1998). Habitat Macrocypraea cervinetta terletak di pesisir pantai dengan perluasan yang luas serta ditandai oleh beragam kondisi lingkungan mikro. Salah satu ciri khasnya adalah cangkang berbentuk spiral, meskipun bentuk ini tidak selalu tampak pada saat dewasa tetapi muncul pada tahap tertentu dalam perkembangannya (López & Urcuyo, 2009).",
      habitat: "Terumbu karang dan area berbatu",
      status: "Belum Dievaluasi",
    },
    {
      name: "Pitar tumens",
      imageUrl: "./images/pitar-tumens.jpg",
      author: {
        name: "Gmelin",
        year: 1791,
        citation: "Gmelin, J.F. (1791) Systema Naturae per regna tria naturae",
      },
      taxonomy: {
        Kingdom: "Animalia",
        Phylum: "Mollusca",
        Class: "Bivalvia",
        Ordo: "Venerida",
        Family: "Veneridae",
        Genus: "Pitar",
        Species: "Pitar tumens",
      },
      description:
        "Pitar tumens adalah spesies kerang laut dari kelas Bivalvia dan keluarga Veneridae yang ditemukan di perairan dangkal dengan substrat berpasir atau berlumpur, seperti zona pasang surut. Kerang ini memiliki cangkang oval dengan permukaan halus berwarna putih kekuningan hingga krem, sering dihiasi pola atau garis radial samar. Sebagai organisme filter feeder, Pitar tumens menyaring partikel organik dan plankton dari air, sehingga berperan penting dalam menjaga kualitas air dan ekosistem dasar laut. Selain dimanfaatkan untuk konsumsi manusia di beberapa daerah, spesies ini juga membantu stabilisasi substrat dasar laut serta menjadi bagian dari rantai makanan yang mendukung kehidupan hewan lain, seperti ikan demersal dan burung pemakan kerang. Penelitian lebih lanjut mengenai distribusi dan ekologi Pitar tumens diperlukan untuk mendukung pengelolaan sumber daya laut yang berkelanjutan.",
      habitat: "Dasar laut berpasir",
      status: "Belum Dievaluasi",
    },
  ];

  const BackButton = ({ onClick, text = "Kembali" }) => (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors mb-6"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="font-medium">{text}</span>
    </button>
  );

  const renderHome = () => (
    <div className="space-y-8">
      <div className="w-full bg-green-600 text-white p-8 text-center rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Jelajahi Dunia Biota Laut</h1>
        <p className="text-lg mb-6">
          Temukan keindahan dan keunikan beragam spesies biota laut di Indonesia
        </p>
        <button
          onClick={() => setView("categories")}
          className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold"
        >
          Mulai Eksplorasi
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <Layers className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Klasifikasi Lengkap</h3>
          </div>
          <p className="text-gray-600">
            Jelajahi spesies berdasarkan tingkatan taksonomi dari Kingdom hingga
            Species.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <Library className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Katalog Spesies</h3>
          </div>
          <p className="text-gray-600">
            Koleksi lengkap berbagai spesies biota laut dengan informasi detail.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <ImageIcon className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Galeri Visual</h3>
          </div>
          <p className="text-gray-600">
            Tampilan visual berkualitas tinggi untuk setiap spesies yang ada.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <AlertTriangle className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Status Konservasi</h3>
          </div>
          <p className="text-gray-600">
            Informasi status konservasi untuk memahami kondisi populasi spesies.
          </p>
        </div>
      </div>
    </div>
  );

  const renderCategories = () => (
    <div>
      <BackButton onClick={() => setView("home")} />
      <div className="space-y-4">
        {[
          {
            title: "Kingdom",
            description: "Klasifikasi tertinggi makhluk hidup",
            icon: Crown,
          },
          {
            title: "Phylum",
            description: "Pengelompokan berdasarkan karakteristik dasar",
            icon: Dna,
          },
          {
            title: "Class",
            description: "Pembagian berdasarkan ciri-ciri umum",
            icon: Network,
          },
          {
            title: "Ordo",
            description: "Pengelompokan spesifik dalam kelas",
            icon: GitBranch,
          },
          {
            title: "Family",
            description: "Kelompok organisme dengan hubungan dekat",
            icon: Users,
          },
          {
            title: "Genus",
            description: "Kelompok spesies yang berkerabat dekat",
            icon: TreePine,
          },
          {
            title: "Species",
            description: "Unit dasar klasifikasi makhluk hidup",
            icon: Leaf,
          },
        ].map((category) => (
          <div
            key={category.title}
            onClick={() => {
              setSelectedRank(category.title);
              setView("rankView");
            }}
            className="bg-white rounded-xl p-4 shadow-lg cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-1">
                <category.icon className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
              <span className="text-green-500 text-xl">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRankView = () => {
    // Mengambil nilai unik berdasarkan selectedRank
    const uniqueValues = [
      ...new Set(speciesData.map((species) => species.taxonomy[selectedRank])),
    ];

    return (
      <div className="grid gap-4">
        {/* Tombol kembali untuk kembali ke kategori */}
        <BackButton onClick={() => setView("categories")} />

        {/* Daftar kategori berdasarkan nilai unik */}
        <div className="grid gap-4">
          {uniqueValues.map((value) => {
            // Menyaring spesies berdasarkan nilai rank yang dipilih
            const speciesInRank = speciesData.filter(
              (species) => species.taxonomy[selectedRank] === value
            );

            return (
              <div
                key={value}
                className="bg-white rounded-xl p-4 shadow-lg cursor-pointer hover:bg-green-50"
                onClick={() => {
                  // Mengatur spesies yang dipilih dan menampilkan tampilan spesies
                  setSelectedSpecies(speciesInRank[0]);
                  setView("species");
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    {/* Menampilkan gambar spesies */}
                    <SpeciesImage
                      src={speciesInRank[0].imageUrl}
                      alt={value}
                      size="thumbnail"
                    />
                    <span className="text-lg text-gray-800">{value}</span>
                  </div>
                  <span className="text-green-500">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const SpeciesImage = ({ src, alt, className, size = "default" }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Modifikasi sizeClasses untuk menambahkan fixed height
    const sizeClasses = {
      thumbnail: "w-12 h-12",
      default: "w-full h-64",
      large: "w-full h-96"
    };

    const containerClass = `
      relative 
      overflow-hidden 
      ${sizeClasses[size]} 
      ${className || ""} 
      bg-gray-50 
      rounded-lg
      transition-all 
      duration-300
    `;

    // Tampilan loading
    const renderPlaceholder = () => (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
        <ImageIcon className="w-12 h-12 text-gray-300" />
      </div>
    );

    if (error) {
      return (
        <div className={containerClass}>
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-gray-400" />
          </div>
        </div>
      );
    }

    return (
      <div className={containerClass}>
        {loading && renderPlaceholder()}
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'
            }`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
        />
      </div>
    );
  };

  const renderSpeciesDetail = () => (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      {/* Tombol kembali */}
      <button
        onClick={() => setView("rankView")}
        className="flex items-center text-green-600 mb-4"
      >
        <span className="mr-1">←</span>
        Kembali
      </button>

      <div className="space-y-6">
        {/* Image Section */}
        {/* Image Section */}
        <div className="relative w-full rounded-xl overflow-hidden"> {/* Menghapus h-64 */}
          <SpeciesImage
            src={selectedSpecies.imageUrl}
            alt={selectedSpecies.name}
            size="large"
            className="mb-5"
          />
        </div>

        {/* Species Name */}
        <div className="flex items-center space-x-3">
          <Fish className="w-8 h-8 text-green-600" />
          <h2 className="text-2xl font-bold text-green-700">
            {selectedSpecies.name}
          </h2>
        </div>

        {/* Author Section */}
        <div className="space-y-3 bg-green-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-green-700">Deskripsi Author</h3>
          </div>
          <div className="text-gray-600 ml-7 space-y-2">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-green-500" />
              <p>{selectedSpecies.author.name}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-green-500" />
              <p>{selectedSpecies.author.year}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Quote className="w-4 h-4 text-green-500" />
              <p className="text-sm italic">
                {selectedSpecies.author.citation}
              </p>
            </div>
          </div>
        </div>

        {/* Taxonomy Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Layers className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-green-700">
              Klasifikasi Taksonomi
            </h3>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            {Object.entries(selectedSpecies.taxonomy).map(([rank, value]) => (
              <div
                key={rank}
                className="flex justify-between border-b border-gray-200 py-2 hover:bg-gray-100 rounded px-2"
              >
                <span className="text-gray-600">{rank}</span>
                <span className="font-medium text-green-600">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-green-700">Deskripsi</h3>
          </div>
          <p className="text-gray-600 ml-7">{selectedSpecies.description}</p>
        </div>

        {/* Habitat Section */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Home className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-green-700">Habitat</h3>
          </div>
          <p className="text-gray-600 ml-7">{selectedSpecies.habitat}</p>
        </div>

        {/* Conservation Status Section */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-green-700">Status Konservasi</h3>
          </div>
          <div className="ml-7">
            <span
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium
                ${selectedSpecies.status === "Rentan"
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
                }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>{selectedSpecies.status}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 min-h-screen bg-green-50/80">
        <nav className="bg-white/90 backdrop-blur-sm shadow-md">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Leaf className="w-6 h-6 text-green-600" />
                <span className="ml-2 font-bold text-gray-800">WildLife</span>
              </div>


              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-600 hover:text-green-600 text-xl"
              >
                {mobileMenuOpen ? "✕" : "☰"}
              </button>
            </div>


          </div>
        </nav>

        <div className="max-w-2xl mx-auto px-4 py-8">
          {view === "home" && renderHome()}
          {view === "categories" && renderCategories()}
          {view === "rankView" && renderRankView()}
          {view === "species" && renderSpeciesDetail()}
        </div>
        <Footer />
      </div>
    </div>
  );
}
