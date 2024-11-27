import { useState } from "react";
import speciesData from "./components/speciesData";
import ParticlesBackground from './components/ParticlesBackground';
import formattedSpeciesData from "./components/formattedSpeciesData";
// Hapus import speciesData jika ada
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
                      Spesies: <i>{phylum.species.join(", ")}</i>
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
    const phylumGroups = formattedSpeciesData.reduce((acc, species) => {
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
          <p
            className="text-gray-600 ml-7"
            dangerouslySetInnerHTML={{
              __html: selectedSpecies.description
            }}
          />
        </div>

        {/* Habitat Section */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Home className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-green-700">Habitat</h3>
          </div>
          <p className="text-gray-600 ml-7">{selectedSpecies.habitat}</p>
        </div>

        {/* Conservation Status Section diganti dengan Lokasi Ditemukan */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-green-600" /> {/* Changed from GitBranch to MapPin */}
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
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Quote className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-green-700">Konteks Sitasi</h3>
          </div>
          <p className="text-gray-600 ml-7 italic">
            {selectedSpecies.citationDescription}
          </p>
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