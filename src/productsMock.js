export let products = [
  {
    id: 1,
    title: "Alfombra Lisa Simpson",
    price: 400000,
    description: "alfombra tufting",
    img: "https://res.cloudinary.com/dpnp9rm1l/image/upload/v1708703710/700b4f76d6a4a25f6df850116e8fa2f9_erxujg.jpg",
    stock: 5,
    category: "personajes",
  },
  {
    id: 2,
    title: "Alfombra Peces Koi",
    price: 600000,
    description: "alfombra tufting",
    img: "https://res.cloudinary.com/dpnp9rm1l/image/upload/v1708703667/f7cb566943137a51c7e324ac22c6e234_wputsw.jpg",
    stock: 4,
    category: "animales",
  },
  {
    id: 3,
    title: "Alfombra Kirby",
    price: 700000,
    description: "alfombra tufting",
    img: "https://res.cloudinary.com/dpnp9rm1l/image/upload/v1708703659/2d920f2800eb111d5d722daa380bed02_g5bal1.jpg",
    stock: 2,
    category: "personajes",
  },
  {
    id: 4,
    title: "Alfombra Homero Simpson",
    price: 800000,
    description: "alfombra tufting",
    img: "https://res.cloudinary.com/dpnp9rm1l/image/upload/v1708703639/c1555694594dec4fcde3afd64bccfe97_jm4fgq.jpg",
    stock: 10,
    category: "personajes",
  },
  {
    id: 5,
    title: "Alfombra Vaquita",
    price: 200000,
    description: "alfombra tufting",
    img: "https://res.cloudinary.com/dpnp9rm1l/image/upload/v1708703545/83ee0f1d9a2977666b4ad169647ba4b1_shzrns.jpg",
    stock: 5,
    category: "animales",
  },

  {
    id: 6,
    title: "Alfombra Cubo Rubik",
    price: 2000000,
    description: "alfombra tufting",
    img: "https://res.cloudinary.com/dpnp9rm1l/image/upload/v1708703434/7b349e45a370d9db4799579ecf71e363_kszide.jpg",
    stock: 1,
    category: "geometricas",
  },
  {
    id: 7,
    title: "Alfombra Serpiente",
    price: 2000000,
    description: "alfombra tufting",
    img: "https://res.cloudinary.com/dpnp9rm1l/image/upload/v1708703196/cbc523282197b9201b4cdca21857624c_zbv8jb.jpg",
    stock: 2,
    category: "geometricas",
  },
  {
    id: 8,
    title: "Alfombra Flores",
    price: 2000000,
    description: "alfombra tufting",
    img: "https://res.cloudinary.com/dpnp9rm1l/image/upload/v1708703410/2232a025604008dbf47c184907917a7a_vtepsx.jpg",
    stock: 1,
    category: "geometricas",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};
