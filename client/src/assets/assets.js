import logo from './logo.svg'
import Dhurandar from './Dhurandar.png'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    Dhurandar,
    googlePlay,
    appStore,
    screenImage,
    profile
}

export const dummyTrailers = [
    {
        image: "https://m.gettywallpapers.com/wp-content/uploads/2023/09/Jawan-Wallpaper-For-Mobile.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
    {
        image: "https://i.pinimg.com/736x/a1/9c/6c/a19c6c3bc51986feca924c2d1c52f706.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
    {
        image: "https://i.pinimg.com/736x/60/f6/43/60f6438d07c414f36db349badab2db9b.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BZTEyYzVjYjEtNWYzZi00NWRhLTgyZjUtNDlkZjBiNWIxYTEwXkEyXkFqcGc@._V1_.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
]

const dummyCastsData = [
    { "name": "Shah Rukh Khan", "profile_path": "https://m.media-amazon.com/images/M/MV5BODk3OWIyY2MtM2E0MS00OWYyLTlkNDktMzY4MTE1MDhiYzBiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", },
    { "name": "Vijay Sethupathi", "profile_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCryzJ6_z8I8EJTp6cSiG_CMJc8mAVtjiTWg&s", },
    { "name": "Nayanthara", "profile_path": "https://static.toiimg.com/thumb/118694581/118694581.jpg?height=746&width=420&resizemode=76&imgsize=175848", },
    { "name": "Deepika Padukone", "profile_path": "https://m.media-amazon.com/images/M/MV5BYmNlZTQzMjQtODEwZi00MjljLTgzNDktY2Q1MmY0N2Q4ZTQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", },
    { "name": "Sanjay Dutt", "profile_path": "https://knowlepedia.org/images/thumb/f/f6/Sanjay_Dutt.jpg/250px-Sanjay_Dutt.jpg", },
    { "name": "Sunil Grover", "profile_path": "https://image.tmdb.org/t/p/w500/ing2HJHnpvl7uzEQpv5M7NP4XK8.jpg", },
    { "name": "Rohit Saraf", "profile_path": "https://filmfare.wwmindia.com/content/2024/jul/rohitsaraf11719825625.jpg", },
    { "name": "Priyamani", "profile_path": "https://www.bollywoodshaadis.com/img/article-2024410616563660996000.webp", },
    { "name": "Sanya Malhotra", "profile_path": "https://resizing.flixster.com/0Ql3zDC1kT-dvb0oct11Z4SJ9kE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1022030_v9_aa.jpg", },
    { "name": "Girija Oak", "profile_path": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202511/girija-oak-121454498-3x4.png?VersionId=WzNQ4QAirJCKy_T.XpcyZeFLRp.S0uGQ", },
    { "name": "Ashlisha Thakur", "profile_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxjqvFBscKp_xSw75HmF6vPquIyIpSkF-bA&s", },
    { "name": "Yogi Babu", "profile_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5XVVUoH1MONgu7ocT-o5GOwnRRXqlEHLSw&s", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
]

export const dummyShowsData = [
  {
    _id: "872906",
    id: 872906,
    title: "Jawan",
    overview:
      "A high-octane action thriller that outlines the emotional journey of a man set to rectify the wrongs in society.",
    poster_path:
      "https://filmfare.wwmindia.com/content/2023/aug/jawan21691407612.jpg",
    backdrop_path:
      "https://filmfare.wwmindia.com/content/2023/aug/jawan21691407612.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 53, name: "Thriller" },
      { id: 18, name: "Drama" }
    ],
    casts: dummyCastsData,
    release_date: "2023-09-07",
    original_language: "hi",
    tagline: "Justice has a new face.",
    vote_average: 7.2,
    vote_count: 42000,
    runtime: 169
  },

  {
  _id: "1034541",
  id: 1034541,
  title: "Chhaava",
  overview:
    "A historical epic based on the life of Chhatrapati Sambhaji Maharaj, showcasing bravery, sacrifice, and legacy.",
  poster_path:
    "https://assetscdn1.paytm.com/images/cinema/2Chaava--Gallery-f91fd350-f7f7-11ef-aecf-15b19aa2669c.jpg?format=webp",
  backdrop_path:
    "https://assetscdn1.paytm.com/images/cinema/2Chaava--Gallery-f91fd350-f7f7-11ef-aecf-15b19aa2669c.jpg?format=webp",
  genres: [
    { id: 36, name: "History" },
    { id: 18, name: "Drama" },
    { id: 28, name: "Action" }
  ],

  casts: [
    {
      name: "Vicky Kaushal",
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vicky-kaushal-32264-1685966478.jpg"
    },
    {
      name: "Rashmika Mandanna",
      profile_path:
        "https://img.studioflicks.com/wp-content/uploads/2021/08/03111951/Rashmika-Mandanna.jpg"
    },
    {
      name: "Akshaye Khanna",
      profile_path:
        "https://images.filmibeat.com/192x258/img/popcorn/profile_photos/akshaye-khanna-794.jpg"
    },
    {
      name: "Ashutosh Rana",
      profile_path:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOT-8KPSqnrhVf0tunCvgrXT3hYke-IBQhlA&s"
    },
    {
      name: "Divya Dutta",
      profile_path:
        "https://image.tmdb.org/t/p/w500/mr8GYp92eizLVXBQxQndkxKuJH1.jpg"
    },
    {
      name: "Vineet Kumar Singh",
      profile_path:
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/Vineet_Kumar_Singh_at_the_2024_Toronto_International_Film_Festival_%28cropped%29.jpg"
    },
    {
      name: "Diana Penty",
      profile_path:
        "https://m.media-amazon.com/images/M/MV5BODUzMjU1NTk4M15BMl5BanBnXkFtZTcwNjU2MTcxOA@@._V1_FMjpg_UX1000_.jpg"
    }
  ],

  release_date: "2024-02-16",
  original_language: "hi",
  tagline: "The roar of the Maratha lion.",
  vote_average: 7.8,
  vote_count: 18500,
  runtime: 155
},


  {
    _id: "739993",
    id: 739993,
    title: "Kantara",
    overview:
      "A fiery young man clashes with forest officers in a village steeped in tradition, folklore, and divine belief.",
    poster_path:
      "https://assets.gadgets360cdn.com/pricee/assets/product/202312/Kantara-a-legend-chapter-1-Poster_1701778435.jpg",
    backdrop_path:
      "https://assets.gadgets360cdn.com/pricee/assets/product/202312/Kantara-a-legend-chapter-1-Poster_1701778435.jpg",
    genres: [
      { id: 18, name: "Drama" },
      { id: 53, name: "Thriller" },
      { id: 14, name: "Fantasy" }
    ],
    casts:  [
    {
      name: "Rishab Shetty",
      profile_path:
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Rishab_Shetty_in_2023.jpg"
    },
    {
      name: "Rukmini Vasanth",
      profile_path:
        "https://i.redd.it/8ola0mawymtf1.png"
    },
    {
      name: "Jayaram",
      profile_path:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKIshjZtwW2RndBWm8ZMtiFUg1Oht92TBuw&s"
    },
    {
      name: "Gulshan Devaiah",
      profile_path:
        "https://m.media-amazon.com/images/M/MV5BMjRlZjA3ZjMtODU0ZC00MGE3LWIxN2YtNGY4MjZhMTE3MGNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Achyuth Kumar",
      profile_path:
        "https://image.tmdb.org/t/p/w500/mr8GYp92eizLVXBQxQndkxKuJH1.jpg"
    },
    {
      name: "Pramod Shetty",
      profile_path:
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/Vineet_Kumar_Singh_at_the_2024_Toronto_International_Film_Festival_%28cropped%29.jpg"
    },
    {
      name: "Ramitha Shailendra",
      profile_path:
        "https://m.media-amazon.com/images/M/MV5BODUzMjU1NTk4M15BMl5BanBnXkFtZTcwNjU2MTcxOA@@._V1_FMjpg_UX1000_.jpg"
    }
  ],
    release_date: "2022-09-30",
    original_language: "kn",
    tagline: "A legend rooted in the soil.",
    vote_average: 8.3,
    vote_count: 32000,
    runtime: 148
  },

  {
    _id: "194662",
    id: 194662,
    title: "Dangal",
    overview:
      "A former wrestler trains his daughters to become world-class wrestlers, challenging societal norms.",
    poster_path:
      "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
    backdrop_path:
      "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
    genres: [
      { id: 18, name: "Drama" },
      { id: 28, name: "Action" }
    ],
  casts:  [
    {
      name: "Amir Khan",
      profile_path:
        "https://resizing.flixster.com/V17Lz5K0e8KpC5624CqPkloEuHo=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/170518_v9_bb.jpg"
    },
    {
      name: "Fatima Sana Shaikh",
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/fatima-sana-shaikh-1057789-11-01-2021-05-20-38.jpg"
    },
    {
      name: "Sanya Malhotra",
      profile_path:
        "https://resizing.flixster.com/0Ql3zDC1kT-dvb0oct11Z4SJ9kE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1022030_v9_aa.jpg"
    },
    {
      name: "Zaira Wasim",
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/zaira-wasim-1077008-26-12-2016-11-40-17.jpg"
    },
    {
      name: "Sakshi Tanwar",
      profile_path:
        "https://image.tmdb.org/t/p/w500/96VTOdbfrJWrrsdIgNM6W2woxJ.jpg"
    },
    {
      name: "Aparshakti Khurana",
      profile_path:
        "https://image.tmdb.org/t/p/w500/w7OEkPAaweO1JU105Qqvg073yW8.jpg"
    },
    {
      name: "Girish Kulkarni",
      profile_path:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeKudHIbDh0doCAjqoqmkg0ewg22UaOyt1A&s"
    },
    {
      name: "Vivan Bhatena",
      profile_path:
        "https://image.tmdb.org/t/p/w500/thDkrhDd9xiSpJjEh6rTO7yK0pi.jpg"
    },
    {
      name: "Shishir Sharma",
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/shishir-sharma-2143-1737525265.jpg"
    }
  ],
    release_date: "2016-12-23",
    original_language: "hi",
    tagline: "Gold comes from hard work.",
    vote_average: 8.1,
    vote_count: 55000,
    runtime: 161
  },

  {
    _id: "256040",
    id: 256040,
    title: "Baahubali: The Beginning",
    overview:
      "In ancient India, an adventurous man learns about his royal heritage and his destiny to overthrow a tyrant king.",
    poster_path:
      "https://image.tmdb.org/t/p/original/9BAjt8nSSms62uOVYn1t3C3dVto.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/1bE3O8XG5dJz6Y0Wv4Yh1z6S8G.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 14, name: "Fantasy" }
    ],
     casts:  [
    {
      name: "Prabhas",
      profile_path:
        "https://image.tmdb.org/t/p/w500/6naZ3oybdCtfggc5pTrcBDxOXrP.jpg"
    },
    {
      name: "Rana Daggubati",
      profile_path:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxktoT8JgJ0AEKt5dEeTps8y-Cz3t1sMSTcw&s"
    },
    {
      name: "Anushka Shetty",
      profile_path:
        "https://image.tmdb.org/t/p/w500/zpe6Es8kdNOXuPdXiJvqxzsmN6z.jpg"
    },
    {
      name: "Tamanna Bhatia",
      profile_path:
        "https://image.tmdb.org/t/p/w500/t4WYoKiFAyO1Rhjv7O03EKmJHp4.jpg"
    },
    {
      name: "Ramya Krishnan",
      profile_path:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47MaBcu0y98_Cq_DK59nyJiaaT48rbSJe3A&s"
    },
    {
      name: "Nassar",
      profile_path:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Nassar_at_Oru_Kadhai_Sollattumaa_Audio_Launch_%28cropped%29.jpg/250px-Nassar_at_Oru_Kadhai_Sollattumaa_Audio_Launch_%28cropped%29.jpg"
    },
    {
      name: "Adivi Sesh",
      profile_path:
        "https://m.media-amazon.com/images/M/MV5BM2VmZjliYzYtY2NmOC00NGI2LTkzOWMtYTQzZjJiMTcxYmFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
  ],
    release_date: "2015-07-10",
    original_language: "te",
    tagline: "The beginning of the epic.",
    vote_average: 7.6,
    vote_count: 46000,
    runtime: 159
  },
  {
    _id: "238",
    id: 238,
    title: "3 Idiots",
    overview:
      "Three engineering students navigate college life, friendship, and societal pressure while redefining success.",
    poster_path:
      "https://image.tmdb.org/t/p/original/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
    genres: [
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" }
    ],
    casts: dummyCastsData,
    release_date: "2009-12-25",
    original_language: "hi",
    tagline: "All is well.",
    vote_average: 8.4,
    vote_count: 20000,
    runtime: 170
  },

  {
    _id: "257",
    id: 257,
    title: "Bajrangi Bhaijaan",
    overview:
      "A devout man with a pure heart undertakes a journey to reunite a mute Pakistani girl with her family.",
    poster_path:
      "https://i.pinimg.com/736x/45/cb/4a/45cb4a8d3dd51482b503551f42b4005f.jpg",
    backdrop_path:
      "https://i.pinimg.com/736x/45/cb/4a/45cb4a8d3dd51482b503551f42b4005f.jpg",
    genres: [
      { id: 18, name: "Drama" },
      { id: 12, name: "Adventure" }
    ],
    casts: dummyCastsData,
    release_date: "2015-07-17",
    original_language: "hi",
    tagline: "A story of love, faith, and humanity.",
    vote_average: 8.1,
    vote_count: 17000,
    runtime: 163
  },

 {
  _id: "513",
  id: 513,
  title: "Dhurandar",
  overview:
    "A gripping action-drama that follows the journey of a fearless warrior who rises against a powerful empire to protect his people, his land, and his honor.",

  poster_path:
    "https://m.media-amazon.com/images/M/MV5BMzFiNTVkZjYtM2I3Yi00MGNjLWEyYTAtMGViNGExZmMzMGMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  backdrop_path:
    "https://m.media-amazon.com/images/M/MV5BMzFiNTVkZjYtM2I3Yi00MGNjLWEyYTAtMGViNGExZmMzMGMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",

  genres: [
    { id: 28, name: "Action" },
    { id: 18, name: "Drama" },
    { id: 12, name: "Adventure" }
  ],

  casts: dummyCastsData,
  release_date: "2025-08-15",
  original_language: "hi",
  tagline: "Born to fight. Destined to rule.",
  vote_average: 8.7,
  vote_count: 18450,
  runtime: 148
},


  {
    _id: "155",
    id: 155,
    title: "PK",
    overview:
      "An alien on Earth questions religious dogmas and blind faith after losing his communication device.",
    poster_path:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg",
    backdrop_path:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg",
    genres: [
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" }
    ],
    casts: dummyCastsData,
    release_date: "2014-12-19",
    original_language: "hi",
    tagline: "Wrong number.",
    vote_average: 7.9,
    vote_count: 16000,
    runtime: 153
  },
   {
    _id: "156",
    id: 156,
    title: "RRR",
    overview:
      "A fictional story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.",
    poster_path:
      "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
    backdrop_path:
      "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 18, name: "Drama" }
    ],
    casts: dummyCastsData,
    release_date: "2022-03-25",
    original_language: "te",
    tagline: "Rise. Roar. Revolt.",
    vote_average: 8.0,
    vote_count: 12000,
    runtime: 182
  },
  {
    _id: "157",
    id: 157,
    title: "Stree 2",
    overview:
      "The spooky legend returns to Chanderi as the town once again faces a mysterious supernatural threat.",
    poster_path:
      "https://images.fandango.com/ImageRenderer/500/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/237155/Stree_01.jpg",
    backdrop_path:
      "https://images.fandango.com/ImageRenderer/500/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/237155/Stree_01.jpg",
    genres: [
      { id: 27, name: "Horror" },
      { id: 35, name: "Comedy" }
    ],
    casts: dummyCastsData,
    release_date: "2024-08-15",
    original_language: "hi",
    tagline: "O Stree, phir se aana!",
    vote_average: 7.5,
    vote_count: 4200,
    runtime: 140
  },
  {
    _id: "158",
    id: 158,
    title: "War 2",
    overview:
      "Kabir returns for an even deadlier mission as new enemies and secrets threaten national security.",
    poster_path:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/War_2_official_poster.jpg/250px-War_2_official_poster.jpg",
    backdrop_path:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/War_2_official_poster.jpg/250px-War_2_official_poster.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 53, name: "Thriller" }
    ],
    casts: dummyCastsData,
    release_date: "2025-08-14",
    original_language: "hi",
    tagline: "The battle gets bigger.",
    vote_average: 0.0,
    vote_count: 0,
    runtime: 160
  }
]




export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "DEVANSH UPADHYAY", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "VIRAT KOHLI", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name":"BHUVNESHWAR KUMAR", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]