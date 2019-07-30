const SHOULD_ERROR = false;
const DEFAULT_TIMEOUT_SECONDS = 2;

const data = [
  {
    title: "Cappuccino",
    price: 2.5,
    description: "A delicious blend of esppresso and steamed milk",
    imageUrl: "https://source.unsplash.com/collection/1215/300x300"
  },
  {
    title: "Latte",
    price: 3.5,
    description: "",
    imageUrl: "https://source.unsplash.com/collection/1215/400x400"
  },
  {
    title: "Americano",
    price: 2.0,
    description: "",
    imageUrl: "https://source.unsplash.com/collection/1215/500x500"
  },
  {
    title: "Mocha",
    price: 3.5,
    description: "A latte with chocolate",
    imageUrl: "https://source.unsplash.com/collection/1215/600x600"
  },
  {
    title: "Miel",
    price: 3.5,
    description: "A latte with honey",
    imageUrl: "https://source.unsplash.com/collection/1215/700x700"
  },
  {
    title: "Cold brew",
    price: 3.5,
    description: "A less acidic, cold coffee",
    imageUrl: "https://source.unsplash.com/collection/1215/800x800"
  },
  {
    title: "Nitro Cold brew",
    price: 3.5,
    description: "A nitrogen infused cold brew drink",
    imageUrl: "https://source.unsplash.com/collection/1215/900x900"
  }
];

export function getCoffeeData() {
  return new Promise((resolve, reject) => {
    if (SHOULD_ERROR) {
      reject("An error has occurred");
    }

    window.setTimeout(() => {
      resolve(data);
    }, 1000 * DEFAULT_TIMEOUT_SECONDS);
  });
}
