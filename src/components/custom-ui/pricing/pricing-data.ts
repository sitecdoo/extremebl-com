export const PricingData = {
  youngerChildren: {
    title: "Trening za djecu mladjeg uzrasta",
    date: [
      { day: "Ponedjeljak", time: "18:30 - 19:30h" },
      { day: "Petak", time: "18:30 - 19:30h" },
    ],
  },
  olderChildren: {
    title: "Trening za djecu starijeg uzrasta",
    date: [
      { day: "Ponedjeljak", time: "19:00 - 20:00h" },
      { day: "Petak", time: "19:00 - 20:00h" },
    ],
  },
  adults: {
    title: "Trening za odrasle",
    date: [
      { day: "Utorak", time: "19:00 - 22:00h" },
      { day: "Srijeda", time: "19:00 - 22:00h" },
      { day: "Četvrtak", time: "19:00 - 22:00h" },
      { day: "Nedjelja", time: "19:00 - 22:00h" },
    ],
  },
  childrenPrices: [
    { text: "Probni trening", price: "10 KM" },
    { text: "Mjesečna članarina", price: "50 KM" },
    {
      text: "Mjesečna članarina (dvoje djece iz iste porodice)",
      price: "250 KM",
    },
  ],
  adultPrices: [
    { text: "Dnevna karta / Probni trening", price: "10 KM" },
    { text: "Mjesečna članarina", price: "45 KM" },
    { text: "10 ulazaka", price: "70 KM" },
    { text: "Polugodišnja članarina", price: "240 KM" },
    {
      text: "Godišnja članarina",
      price: "420 KM",
    },
  ],
};

type PricingInfoData = {
  title: string;
  date: {
    day: string;
    time: string;
  };
};

export type PricingBoxData = {
  text: string;
  price: string;
};

export type PricingData = {
  youngerChildren: PricingInfoData[];
  olderChildren: PricingInfoData[];
  adults: PricingInfoData[];
  childrenBox: PricingBoxData[];
  adaultBox: PricingBoxData[];
};
