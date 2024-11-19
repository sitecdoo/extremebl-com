export const colorMap: Record<string, string> = {
  "Djeca mlađeg uzrasta": "bg-yellow-400",
  "Djeca starijeg uzrasta": "bg-orange-400",
  "Open Gym": "bg-purple-400",
  Odrasli: "bg-blue-100",
};

export const schedule = {
  ponedjeljak: {
    activities: [
      { name: "Djeca mlađeg uzrasta", time: "18:30 - 19:30h" },
      { name: "Djeca starijeg uzrasta", time: "19:00 - 20:00h" },
      { name: "Open Gym", time: "20:00 - 22:00h" },
    ],
  },
  utorak: {
    activities: [
      { name: "Odrasli", time: "19:00 - 22:00h" },
      { name: "Open Gym", time: "20:00 - 22:00h" },
    ],
  },
  srijeda: {
    activities: [
      { name: "Odrasli", time: "19:00 - 22:00h" },
      { name: "Open Gym", time: "20:00 - 22:00h" },
    ],
  },
  četvrtak: {
    activities: [
      { name: "Odrasli", time: "19:00 - 22:00h" },
      { name: "Open Gym", time: "20:00 - 22:00h" },
    ],
  },
  petak: {
    activities: [
      { name: "Djeca mlađeg uzrasta", time: "18:30 - 19:30h" },
      { name: "Djeca starijeg uzrasta", time: "19:00 - 20:00h" },
      { name: "Open Gym", time: "20:00 - 22:00h" },
    ],
  },
  subota: {
    activities: [{ name: "Open Gym", time: "20:00 - 22:00h" }],
  },
  nedjelja: {
    activities: [
      { name: "Odrasli", time: "19:00 - 22:00h" },
      { name: "Open Gym", time: "20:00 - 22:00h" },
    ],
  },
};
