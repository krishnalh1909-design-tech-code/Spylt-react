// flavoursData.js
const flavours = [
  {
    id: 1,
    color: "#865A4D",
    bg: "#563424",
    text: "#C88E64",
    name: "CHOCOLATE MILK",
    containerClasses: "ml-[10vw] mr-[10vw] rotate-0 md:rotate-[-5deg]",
    bgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a38861b437bbd63315a8e4_bg.svg",
    bottomImgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/67092f9ea153f4b051b98f31_n_can1.webp",
    topImgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a39dbe010f9ec90f2cdb59_add2.webp",
    VidSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F6707df011a2da77854398f39_Chocolate%20-%20Wide%20FINAL%20%282%29-transcode.mp4",
    details:
      "SPYLT Chocolate Milk is a sweet (but not too sweet) pick-me-up with 60mg of caffeine. Chug up morning, noon, or whenever you need a chocolatey kick in the pants.",
    posterImg:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/670e3f5e8a6b1236298f95ec_wraping.webp",
    productImgSrc:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/670e3f6ab2e9149945ed38dd_Spylt-Chocolate_1%201.webp",
  },
  {
    id: 2,
    color: "#A02128",
    bg: "#631217",
    text: "#F7ADA7",
    name: "STRAWBERRY MILK",
    containerClasses: "mr-[10vw] rotate-0  md:rotate-[5deg]",
    bgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a39e28663ed972b88b9b18_bg3.svg",
    bottomImgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/67092f9e6949a406dfa0d9b5_n_can3.webp",
    topImgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a39e289116e8cc85a74756_add3.webp",
    VidSrc:
      "https://www.dl.dropboxusercontent.com/scl/fi/ypzhw6nyes4zmfu53rtnm/Strawberry-Wide-FINAL-full.mp4?rlkey=u1hzn0573j44r4uhylzoez5e4&st=2yik6qp7&dl=0",
    details:
      "Well hellooo, creamy dreamy strawberry milk. This nostalgic drink is like your favorite childhood sweet treat… without loads of sugar. But now it’s caffeinated, filled with nutrients, and packed with protein.",
    posterImg:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/670e4007abb4626493f2253a_wraping%20(1).webp",
    productImgSrc:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/670e400b0b40a6198d22f3ac_Spylt-Strawberry_1.webp",
  },
  {
    id: 3,
    color: "#865720",
    bg: "#865720",
    text: "#FACD75",
    name: "VANILLA MILKSHAKE",
    containerClasses: "mr-[10vw] rotate-0 md:rotate-[-5deg]",
    bgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a39e575dee3e2ebb3fef8c_bg4.svg",
    bottomImgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/67092f9e1fb3c69f35e53391_n_can4.webp",
    topImgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a39e5686d484f0efa8be9b_add4.webp",
    VidSrc:
      "https://www.dl.dropboxusercontent.com/scl/fi/0i3fin1js2ulz61jqe119/Vanilla-Wide-FINAL.mp4?rlkey=wrgndgbmtxoma66k2y1sbvjz1&st=5h9zx36p&dl=0",
    details:
      "This lavish and oh-so-creamy Spylt is bursting with vanilla flavor. Made to provide a sweet, satisfying, and protein-packed caffeinated boost without all the sugar.",
    posterImg:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/670e4223f03e9bc7e3c520a2_wraping.webp",
    productImgSrc:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/670e422a1324f686cb7cc2c4_Spylt-Vanilla_1%201.webp",
  },
  {
    id: 4,
    name: "COOKIES & CREAM",
    color: "#1C4A9A",
    bg: "#123166",
    text: "#3284C6",
    containerClasses: "mr-[10vw] rotate-0 md:rotate-[-5deg]",
    bgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/67852690dac98b3b6bf4f097_bg.svg",
    bottomImgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/678527ed859154b5d1e77df5_can5.webp",
    topImgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/678526803b0c749e78e3ecc5_pieces.png",
    VidSrc:
      "https://www.dl.dropboxusercontent.com/scl/fi/7bcp6vfeyu7gmow3x1jpb/Cookies-and-Cream_cut.mp4?rlkey=j0mkr5xlj2e0vww772w9ehlsv&st=awxo011z&dl=0",
    details:
      "This lavish and oh-so-creamy Spylt is bursting with vanilla flavor. Made to provide a sweet, satisfying, and protein-packed caffeinated boost without all the sugar.",
    posterImg:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/6784f2ee0827d8f0f2b96103_wraping%20(1).webp",
    productImgSrc:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/6784f2f40c83449f202ae21c_Spylt-Cookies-and-Cream_1%20(1).webp",
  },
  {
    id: 5,
    color: "#7C3C1A",
    bg: "#7C3C1A",
    text: "#F47C37",
    name: "PEANUT BUTTER CHOCOLATE",
    containerClasses: "mr-[10vw] rotate-0 md:rotate-[5deg]",
    bgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/678528bf31201056fa66e3b5_2bg.svg",
    bottomImgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/6785288dbb907e28e4713a8a_can6.webp",
    topImgSrc:
      "https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/678528ae51c4f769ac4eadb7_2pieces.webp",
    VidSrc:
      "https://www.dl.dropboxusercontent.com/scl/fi/urrmod8opitp71owlpc02/Peanut-Butter-Chocolate_cut.mp4?rlkey=76h5ryw84mfafz713cs7s3ie3&st=mpmtnzhc&dl=0",
    details:
      "This lavish and oh-so-creamy Spylt is bursting with vanilla flavor. Made to provide a sweet, satisfying, and protein-packed caffeinated boost without all the sugar.",
    posterImg:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/6784fc0e7cfa2a47fd451507_Peanut%20butter%20chocolate_wraping.webp",
    productImgSrc:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/6784fcd1d4835f8d7edcb775_Peanut%20butter%20chocolate_cup.webp",
  },
  {
    id: 6,
    color: "#7C3C1A",
    bg: "#5E382E",
    text:"#C88E64",
    name: "MAX CHOCOLATE MILK",
    containerClasses: "mr-[10vw] rotate-0 md:rotate-[-5deg]",
    bgSrc:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a346d7e435f4b6be31247_bg-1.svg",
    bottomImgSrc:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a34750cbc5c99754742fe_can2.webp",
    topImgSrc:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a343e1c547b7a70b86e0c_pieces.webp",
    VidSrc:
      "https://www.dl.dropboxusercontent.com/scl/fi/wiswjghzg5k6pnjo7di6k/MAX-Chocolate-Wide-FINAL-full.mp4?rlkey=azwx0nlkl3ki3zamlc1vwtwz2&st=5j7zdbmc&dl=0",
    details:
      "Chocolate milk with a giant kick. Rich, creamy and smooth, SPYLT Max is your caffeinated compadre. Chug up first thing in the morning, post-workout, or afternoons when those eyelids get heavy.",
    posterImg:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/670e40e0d40321b3c6fb3365_wraping.webp",
    productImgSrc:
      "https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/670e40e338fcbfc4d488cd50_Spylt-Max_1%201.webp",
  },
];

export default flavours;
