export const colorMap: Record<string, string> = {
  "Djeca mlađeg uzrasta": "bg-yellow-400",
  "Djeca starijeg uzrasta": "bg-orange-400",
  "Odrasli grupni trening": "bg-purple-400",
  "Odrasli slobodni termin": "bg-blue-100",
};

export const schedule = {
  ponedjeljak: {
    activities: [
      { name: "Djeca mlađeg uzrasta", time: "19:00 - 20:00h" },
      { name: "Djeca starijeg uzrasta", time: "19:30 - 21:00h" },
    ],
  },
  utorak: {
    activities: [
      { name: "Odrasli slobodni termin", time: "19:00 - 22:00h" },
    ],
  },
  srijeda: {
    activities: [
      { name: "Odrasli grupni trening", time: "19:00 - 22:00h" },
      { name: "Odrasli slobodni termin", time: "19:00 - 22:00h" },
    ],
  },
  četvrtak: {
    activities: [
      { name: "Odrasli slobodni termin", time: "19:00 - 22:00h" },
    ],
  },
  petak: {
    activities: [
      { name: "Djeca mlađeg uzrasta", time: "19:00 - 20:00h" },
      { name: "Djeca starijeg uzrasta", time: "19:30 - 21:00h" },
    ],
  },
  subota: {
    activities: [{ name: "Neradni dan", time: "" }],
  },
  nedjelja: {
    activities: [
      { name: "Odrasli grupni trening", time: "19:00 - 22:00h" },
      { name: "Odrasli slobodni termin", time: "19:00 - 22:00h" },
    ],
  },
};
