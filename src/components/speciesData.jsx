

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
        citationDescription:
            "Keesing J K. Population size structure, growth, arm number and damage in the sea starArchaster angulatus Müller and Troschel, 1842 (Echinodermata: Asteroidea) Invertebr Reprod Dev.2017;61:1–9.",
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
        citationDescription:
            "Elfidasari, D., Noriko, N., Wulandari, N., & Perdana, A. T. (2012). Identifikasi jenis teripang genus Holothuria asal perairan sekitar Kepulauan Seribu berdasarkan perbedaan morfologi. Jurnal AL-AZHAR INDONESIA Seri Sains dan Teknologi",
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
        citationDescription:
            "Melek Perikanan. (2020). Karang Otak; Klasifikasi, Morfologi, Habitat, dll; Jurnal Ilmiah Platax. (2018). Keanekaragaman Karang Favia di Indonesia.",
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
        citationDescription:
            "Scribd. 2017. Klasifikasi dan morfologi bintang laut. diakses pada 23 November 2024, dari https://www.scribd.com/document/358771351/Klasifikasi-Dan-Morfologi-Bintang-Laut",
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
        citationDescription:
            "Soo, P., & Todd, P. A. (2014). The behaviour of giant clams (Bivalvia: Cardiidae: Tridacninae). Marine Biology, 161(12), 2699–2717. https://doi.org/10.1007/s00227-014-2545-0; Neo, M. L., Lim, K. K., Yang, S. Y., Soong, G. Y., Masucci, G. D., Biondi, P., Wee, H. B., Kise, H., & Reimer, J. D. (2019). Status of giant clam resources around Okinawa-jima Island, Ryukyu Archipelago, Japan. Aquatic Conservation, 29, 1002–1011. https://doi.org/10.1002/aqc.3033",
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
        citationDescription:
            "Taitt RV & FA Dipper. 1998. Elements of marine ecology, 462 pp. Butterworth-Heinemann, Oxford;López FA & JR Urcuyo. 2009. Moluscos de Nicaragua II, Gastrópodos, 181 pp. Marena-Araucaria, UCA, Managua.",
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
        citationDescription:
            "SIDAURUK, D. J. (2024). IDENTIFIKASI DAN KARAKTERISASI BIVALVIA DI KECAMATAN PANTAI CERMIN SERDANG BEDAGAI SEBAGAI PENGEMBANGAN BAHAN AJAR BERUPA BUKU MONOGRAF",
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
        citationDescription:
            "Budiantoro, Agung, 2016. Petunjuk Praktikum Keanekaragaman Invertebrata dan Vertebrata. Yogyakarta. Laboratorium Fakultas MIPA Universitas Ahmad Dahlan.",
    },
    {
        name: "Spisula subtruncata",
        imageUrl: "./images/spisula-subtruncata.jpg",
        author: {
            name: "da Costa, Edmund",
            year: 1778,
            citation:
                "da Costa, E. (1778). Historia naturalis testaceorum Britanniae, or, A catalogue of the shells of Great Britain and Ireland: systematically described and arranged according to the Linnean method : with exact figures from specimens in the author's cabinet",
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
        citationDescription:
            "MolluscaBase eds. (2024). MolluscaBase. Spisula subtruncata (da Costa, 1778). Accessed through: World Register of Marine Species at: https://www.marinespecies.org/aphia.php?p=taxdetails&id=140302 on 2024-11-25",
    },
    {
        name: "Fungia sp.",
        imageUrl: "./images/fungia-sp.jpg",
        author: {
            name: "Lamarck",
            year: 1801,
            citation:
                "Lamarck, J.B. (1801). Systeme des animaux sans vertebres, ou Tableau general des classes, des ordres et des genres de ces animaux.",
        },
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Cnidaria",
            Class: "Anthozoa",
            Ordo: "Scleractinia",
            Family: "Fungiidae",
            Genus: "Fungia",
            Species: "Fungia sp.",
        },
        description:
            "<em>Fungia sp.</em> merupakan karang soliter dengan diameter mencapai 30 cm. Memiliki warna cerah seperti putih, kuning, merah muda, ungu, dan biru. Berbentuk cakram bulat atau oval dengan mulut di tengah yang dikelilingi tentakel. Menangkap organisme plantonik dan partikel makanan di kolom air. Reproduksi secara aseksual melalui pecahan tubuh. Hidup di laut dangkal atau zona neritik dengan kedalaman sekitar 50 m. Dimanfaatkan sebagai tempat berkembang biak ikan, hiasan, bahan kapur, dan taman laut rekreasi.",
        habitat: "Laut dangkal, zona neritik",
        status: "Belum Dievaluasi",
        citationDescription:
            "Faizsyahrani, L. P., Pertiwi, A. R., Firdhiana, W. P., & Kholifah, S. N. (2022). Inventarisasi ragam karang di Pantai Bandengan, Kabupaten Jepara, Jawa Tengah. SNSE VIII, Vol. 1(No. 1), 26–34. Universitas PGRI Semarang. ISSN: 2964-1411.",
    },
    {
        name: "Goniastrea retiformis",
        imageUrl: "./images/goniastrea-retiformis.jpg",
        author: {
            name: "Lamarck",
            year: 1816,
            citation:
                "Lamarck, J.B. (1816). Histoire naturelle des animaux sans vertèbres, présentant les caractères généraux et particuliers de ces animaux, leur distribution, leurs classes, leurs familles, leurs genres, et la citation des principales espèces qui s'y rapportent; précédée d'une introduction offrant la détermination des caractères essentiels de l'animal, sa distinction du végétal et des autres corps naturels, enfin, l'exposition des principes fondamentaux de la zoologie. Tome second. Paris: Deterville.",
        },
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Cnidaria",
            Class: "Anthozoa",
            Ordo: "Scleractinia",
            Family: "Merulinidae",
            Genus: "Goniastrea",
            Species: "Goniastrea retiformis",
        },
        description:
            "Koloni karang berbentuk massif, hemispherical, datar, atau columnar dengan ukuran lebih dari 1 meter. Koralit memiliki 4-6 sisi dengan septa panjang dan pendek bergantian. Septa tipis, lurus dengan lobus paliform berkembang baik. Warna seragam krem, coklat muda, kadang coklat, merah muda, atau hijau. Dapat bertahan di daerah dengan turbiditas dan sedimentasi tinggi. Ditemukan di perairan dangkal hingga kedalaman 15 meter, dengan kemampuan membentuk hamparan hingga 5 meter di dataran terumbu.",
        habitat: "Perairan dangkal, zona intertidal",
        status: "Belum Dievaluasi",
        citationDescription:
            "SeaLifeBase. (n.d.). Goniastrea retiformis (Lamarck, 1816). Retrieved November 27, 2024, from https://www.sealifebase.se",
    },
];

export default speciesData
