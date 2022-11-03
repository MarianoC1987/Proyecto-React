let pokemon = [
  {
    id: 001,
    nombre: "Bulbasaur",
    imagen: "../Imagenes/bulbasur.png",
    tipo: ["Grass", "Poison"],
    peso: "6.9 Kg",
    altura: "0.7 m",
    movimientos: {
      1: "Chlorophyll",
      2: "Overgrow",
    },
    descripcion:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    estadisticas: {
      HP: 45,
      ATK: 49,
      DEF: 49,
      SATK: 65,
      SDEF: 65,
      SPD: 45,
    },
  },

  {
    id: 004,
    nombre: "Charmander",
    imagen: "../Imagenes/charmander.png",
    tipo: ["Fire"],
    peso: "8.5 Kg",
    altura: "0.6 m",
    movimientos: ["Mega-Punch", "Fire-Punch"],
    descripcion:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    estadisticas: {
      HP: 39,
      ATK: 52,
      DEF: 43,
      SATK: 60,
      SDEF: 50,
      SPD: 65,
    },
  },

  {
    id: 007,
    nombre: "Squirtle",
    imagen: "../Imagen/squirtle.png",
    tipo: ["Water"],
    peso: "9.0 Kg",
    altura: "0.5 m",
    movimientos: ["Torrent", "Rain-Dish"],
    descripcion:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    estadisticas: {
      HP: 44,
      ATK: 48,
      DEF: 65,
      SATK: 50,
      SDEF: 64,
      SPD: 43,
    },
  },

  {
    id: 012,
    nombre: "Butterfree",
    imagen: "../Imagenes/butterfree.png",
    tipo: ["Bug", "Flying"],
    peso: "32 Kg",
    altura: "1.1 m",
    movimientos: ["Compound-Eyes", "Tinted-Lens"],
    descripcion:
      "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    estadisticas: {
      HP: 60,
      ATK: 45,
      DEF: 50,
      SATK: 90,
      SDEF: 80,
      SPD: 70,
    },
  },

  {
    id: 025,
    nombre: "Pikachu",
    imagen: "../Imagenes/pikachu.png",
    tipo: ["Electric"],
    peso: "6.0 Kg",
    altura: "0.4 m",
    movimientos: ["Mega-Punch", "Pay-Day"],
    descripcion:
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    estadisticas: {
      HP: 35,
      ATK: 55,
      DEF: 40,
      SATK: 50,
      SDEF: 50,
      SPD: 90,
    },
  },

  {
    id: 092,
    nombre: "Gastly",
    imagen: "../Imagen/gastly.png",
    tipo: ["Ghost", "Type"],
    peso: "0.1 Kg",
    altura: "1.3 m",
    movimientos: ["Levitate"],
    descripcion:
      "Born from gases, anyone would faint if engulfed by its gaseous body, wich contains poison.",
    estadisticas: {
      HP: 30,
      ATK: 35,
      DEF: 30,
      SATK: 100,
      SDEF: 35,
      SPD: 80,
    },
  },

  {
    id: 132,
    nombre: "Ditto",
    imagen: "../Imagenes/ditto.png",
    tipo: ["Normal"],
    peso: "4.0 Kg",
    altura: "0.3 m",
    movimientos: ["Limber", "Imposter"],
    descripcion:
      "It can reconstitute its entire cellular structure to change into what it sees, but returns to normal when it relaxes.",
    estadisticas: {
      HP: 48,
      ATK: 48,
      DEF: 48,
      SATK: 48,
      SDEF: 48,
      SPD: 48,
    },
  },

  {
    id: 152,
    nombre: "Mew",
    imagen: "../Imagenes/Mew.png",
    tipo: ["Psychic"],
    peso: "4.0 Kg",
    altura: "0.4 m",
    movimientos: ["Synchronize"],
    descripcion:
      "When viewed through a microscope, this Pokémon short, fine, delicate hair can be seen.",
    estadisticas: {
      HP: 100,
      ATK: 100,
      DEF: 100,
      SATK: 100,
      SDEF: 100,
      SPD: 100,
    },
  },

  {
    id: 304,
    nombre: "Aron",
    imagen: "../Imagenes/aron.png",
    tipo: ["Steel", "Rock"],
    peso: "60.0 Kg",
    altura: "0.4 m",
    movimientos: ["Sturdy", "Rock-Head"],
    descripcion:
      "It eats iron are - and sometimes railroad tracks - to build up the steel armor that protects its body.",
    estadisticas: {
      HP: 50,
      ATK: 70,
      DEF: 100,
      SATK: 40,
      SDEF: 40,
      SPD: 30,
    },
  },
];

export default pokemon;
