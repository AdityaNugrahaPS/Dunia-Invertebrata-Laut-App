import { useState } from "react";
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from "./components/Navbar";
import './particles.css';
import Footer from "./components/Footer";
import {
  ArrowLeft,
  Layers,
  Image as ImageIcon,
  User,
  Calendar,
  Quote,
  Fish,
  Home,
  FileText,
  Award,
  MapPin,
  Dna, // untuk Phylum
  Network, // untuk Class
  GitBranch, // untuk Ordo
  Leaf, // untuk Species
} from "lucide-react";


export default function Preview() {
  const [view, setView] = useState("home");
  const [selectedRank, setSelectedRank] = useState(null);
  const [selectedPhylum, setSelectedPhylum] = useState(null);
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
    {
      name: "Spongia sp.",
      imageUrl: "./images/spongia-sp.jpg",
      author: {
        name: "Linnaeus",
        year: 1759,
        citation: "Linnaeus, C. (1759) Systema Naturae",
      },
      taxonomy: {
        Kingdom: "Animalia",
        Phylum: "Porifera",
        Class: "Demospongiae",
        Ordo: "Dyctyoceratida",
        Family: "Spongiidae",
        Genus: "Spongia",
        Species: "Spongia sp.",
      },
      description:
        "Spongia sp. termasuk ke dalam filum Porifera dengan bentuk tubuh asimetris dan berlubang-lubang. Memiliki warna tubuh cokelat gelap dengan tipe kanal leucon yang kompleks. Ostium membentuk kanal-kanal incurrent yang tidak semuanya memiliki choanocytes. Aliran air dipompa secara selektif melalui kanal-kanal berflagella dan dikeluarkan melalui beberapa bukaan oskulum.",
      habitat: "Dasar laut dengan substrat keras",
      status: "Belum Dievaluasi",
    },
    {

      "name": "Spisula subtruncata",
      "imageUrl": "./images/spisula-subtruncata.jpg",
      "author": {
        "name": "da Costa, Edmund",
        "year": 1778,
        "citation": "da Costa, E. (1778). Historia naturalis testaceorum Britanniae, or, A catalogue of the shells of Great Britain and Ireland: systematically described and arranged according to the Linnean method : with exact figures from specimens in the author's cabinet"
      },
      taxonomy: {
        Kingdom: "Animalia",
        Phylum: "Mollusca",
        Class: "Bivalvia",
        Ordo: "Venerida",
        Family: "Mactridae",
        Genus: "Spisula",
        Species: "Spisula subtruncata",
      },
      description:
        "Kerang dengan cangkang berbentuk oval hingga segitiga, berwarna putih kekuningan atau krem pucat. Memiliki permukaan halus dengan garis pertumbuhan samar. Hidup di dasar laut berpasir atau berlumpur pada kedalaman 5-50 meter. Sebagai filter feeder, memakan plankton dan partikel organik di air.",
      habitat: "Dasar laut berpasir atau berlumpur",
      status: "Belum Dievaluasi",
    },
    {
      name: "Fungia sp.",
      imageUrl: "./images/fungia-sp.jpg",
      author: {
        name: "Lamarck",
        year: 1801,
        citation: "Lamarck, J.B. (1801). Systeme des animaux sans vertebres, ou Tableau general des classes, des ordres et des genres de ces animaux."
      },
      taxonomy: {
        Kingdom: "Animalia",
        Phylum: "Cnidaria",
        Class: "Anthozoa",
        Ordo: "Scleractinia",
        Family: "Fungiidae",
        Genus: "Fungia",
        Species: "Fungia sp."
      },
      description: "Fungia sp. merupakan karang soliter dengan diameter mencapai 30 cm. Memiliki warna cerah seperti putih, kuning, merah muda, ungu, dan biru. Berbentuk cakram bulat atau oval dengan mulut di tengah yang dikelilingi tentakel. Menangkap organisme plantonik dan partikel makanan di kolom air. Reproduksi secara aseksual melalui pecahan tubuh. Hidup di laut dangkal atau zona neritik dengan kedalaman sekitar 50 m. Dimanfaatkan sebagai tempat berkembang biak ikan, hiasan, bahan kapur, dan taman laut rekreasi.",
      habitat: "Laut dangkal, zona neritik",
      status: "Belum Dievaluasi"
    },
    {
      name: "Goniastrea retiformis",
      imageUrl: "./images/goniastrea-retiformis.jpg",
      author: {
        name: "Lamarck",
        year: 1816,
        citation: "Lamarck, J.B. (1816). Histoire naturelle des animaux sans vertèbres, présentant les caractères généraux et particuliers de ces animaux, leur distribution, leurs classes, leurs familles, leurs genres, et la citation des principales espèces qui s'y rapportent; précédée d'une introduction offrant la détermination des caractères essentiels de l'animal, sa distinction du végétal et des autres corps naturels, enfin, l'exposition des principes fondamentaux de la zoologie. Tome second. Paris: Deterville."
      },
      taxonomy: {
        Kingdom: "Animalia",
        Phylum: "Cnidaria",
        Class: "Anthozoa",
        Ordo: "Scleractinia",
        Family: "Merulinidae",
        Genus: "Goniastrea",
        Species: "Goniastrea retiformis"
      },
      description: "Koloni karang berbentuk massif, hemispherical, datar, atau columnar dengan ukuran lebih dari 1 meter. Koralit memiliki 4-6 sisi dengan septa panjang dan pendek bergantian. Septa tipis, lurus dengan lobus paliform berkembang baik. Warna seragam krem, coklat muda, kadang coklat, merah muda, atau hijau. Dapat bertahan di daerah dengan turbiditas dan sedimentasi tinggi. Ditemukan di perairan dangkal hingga kedalaman 15 meter, dengan kemampuan membentuk hamparan hingga 5 meter di dataran terumbu.",
      habitat: "Perairan dangkal, zona intertidal",
      status: "Belum Dievaluasi"
    }
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
        <h1 className="text-3xl font-bold mb-4">Eksplorasi Dunia Invertebrata</h1>
        <p className="text-lg mb-6">
          Temukan keragaman hayati laut Indonesia melalui klasifikasi dan deskripsi spesies
        </p>
        <button
          onClick={() => setView("categories")}
          className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors"
        >
          Mulai Jelajahi Spesies
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-4 mb-4">
            <Dna className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Klasifikasi Taksonomi</h3>
          </div>
          <p className="text-gray-600">
            Jelajahi spesies laut dari Kingdom hingga Species dengan sistem klasifikasi lengkap.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-4 mb-4">
            <Network className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Phylum Beragam</h3>
          </div>
          <p className="text-gray-600">
            Temukan keunikan spesies dari berbagai Phylum: Cnidaria, Echinodermata, dan Mollusca
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-4 mb-4">
            <ImageIcon className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Galeri Visual</h3>
          </div>
          <p className="text-gray-600">
            Dokumentasi visual berkualitas tinggi untuk setiap spesies dengan detail morfologi.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-4 mb-4">
            <Home className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-semibold">Habitat & Distribusi</h3>
          </div>
          <p className="text-gray-600">
            Pahami habitat dan lokasi ditemukan dari berbagai spesies biota laut.
          </p>
        </div>
      </div>
    </div>
  );

  const renderCategories = () => (
    <div>
      <BackButton onClick={() => setView("home")} />
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-bold text-green-700 mb-4">Phylum dalam Biota Laut</h2>
          {[
            {
              title: "Cnidaria",
              description: "Kelompok hewan bertubuh lunak dengan sel penyengat",
              species: ["Dipsastraea speciosa", "Favia speciosa", "Fungia sp.", "Goniastrea retiformis"],
              icon: Dna,
              count: 4
            },
            {
              title: "Echinodermata",
              description: "Hewan berkulit duri dengan sistem saraf sederhana",
              species: ["Holothuria atra", "Culcita sp."],
              icon: Network,
              count: 2
            },
            {
              title: "Porifera",
              description: "Hewan paling sederhana, berbentuk seperti spons",
              species: ["Spongia sp."],
              icon: Leaf,
              count: 1
            },
            {
              title: "Mollusca",
              description: "Hewan lunak dengan cangkang atau kulit keras",
              species: ["Tridacna maxima", "Pitar tumens", "Macrocypraea cervinetta", "Spisula subtruncata"],
              icon: GitBranch,
              count: 4
            }
          ].map((phylum) => (
            <div
              key={phylum.title}
              onClick={() => {
                setSelectedRank("Phylum");
                setSelectedPhylum(phylum.title);
                setView("rankView");
              }}
              className="bg-green-50 rounded-xl p-4 mb-3 cursor-pointer hover:bg-green-100 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <phylum.icon className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{phylum.title}</h3>
                    <p className="text-sm text-gray-600">{phylum.description}</p>
                    <div className="mt-2 text-xs text-green-700">
                      Spesies: {phylum.species.join(", ")}
                    </div>
                    <div className="text-xs text-green-700">
                      Total Spesies: {phylum.count}
                    </div>
                  </div>
                </div>
                <span className="text-green-500 text-xl">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRankView = () => {
    // Group species by Phylum
    const phylumGroups = speciesData.reduce((acc, species) => {
      const phylum = species.taxonomy.Phylum;
      if (!acc[phylum]) {
        acc[phylum] = [];
      }
      acc[phylum].push(species);
      return acc;
    }, {});

    return (
      <div className="grid gap-4">
        <BackButton onClick={() => setView("categories")} />

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-green-700 mb-4">
            Spesies berdasarkan Phylum {selectedPhylum}
          </h2>
          {selectedPhylum && phylumGroups[selectedPhylum] && (
            <div className="grid md:grid-cols-2 gap-4">
              {phylumGroups[selectedPhylum].map((sp) => (
                <div
                  key={sp.name}
                  className="border-2 border-green-200 rounded-xl p-4 cursor-pointer hover:border-green-400 transition-all"
                  onClick={() => {
                    setSelectedSpecies(sp);
                    setView("species");
                  }}
                >
                  <div className="flex flex-col space-y-4">
                    {/* Species Image */}
                    <div className="w-full h-48 overflow-hidden rounded-lg">
                      <img
                        src={sp.imageUrl}
                        alt={sp.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>

                    {/* Species Name */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-green-700"><i>
                        {sp.name}
                      </i>
                      </h3>
                      <p className="text-sm text-gray-600">{sp.habitat}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
        <div className="relative w-full rounded-xl overflow-hidden">
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
            <i>{selectedSpecies.name}</i>
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
                <span className="font-medium text-green-600 italic">{value}</span>
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

        {/* Lokasi Ditemukan Section */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-green-700">Lokasi Ditemukan</h3>
          </div>
          <div className="ml-7">
            <span
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800`}
            >
              <span>
                {selectedSpecies.name === "Pitar tumens" || selectedSpecies.name === "Spisula subtruncata"
                  ? "Pulau Setan"
                  : "Pulau Cubadak"}
              </span>
            </span>
          </div>
        </div>

        {/* Citation Section */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Quote className="w-4 h-4 text-green-500" />
            <h3 className="font-semibold text-green-700">Referensi Publikasi</h3>
          </div>
          <p className="text-sm italic text-gray-600 ml-7">
            {selectedSpecies.author.citation}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 min-h-screen bg-green-50/80">
        <Navbar />

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