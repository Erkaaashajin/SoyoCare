"use client";
import { useState, useEffect } from "react";

export default function Cards() {
  const cards = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/01_of_hearts_A.svg/288px-01_of_hearts_A.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Queen_of_diamonds_fr.svg/309px-Queen_of_diamonds_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/King_of_diamonds_fr.svg/309px-King_of_diamonds_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/10_of_diamonds_-_David_Bellot.svg/309px-10_of_diamonds_-_David_Bellot.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/07_of_spades.svg/371px-07_of_spades.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/02_of_hearts.svg/288px-02_of_hearts.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/08_of_clubs.svg/371px-08_of_clubs.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/King_of_hearts_fr.svg/1024px-King_of_hearts_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Jack_of_spades_fr.svg/371px-Jack_of_spades_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Jack_of_spades_fr.svg/371px-Jack_of_spades_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Queen_of_spades_fr.svg/371px-Queen_of_spades_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/King_of_clubs_fr.svg/500px-King_of_clubs_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Queen_of_clubs_fr.svg/371px-Queen_of_clubs_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/King_of_hearts_fr.svg/288px-King_of_hearts_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Jack_of_diamonds_fr.svg/309px-Jack_of_diamonds_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/01_of_clubs_A.svg/371px-01_of_clubs_A.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/01_of_diamonds_A.svg/309px-01_of_diamonds_A.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/10_of_diamonds_-_David_Bellot.svg/309px-10_of_diamonds_-_David_Bellot.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Queen_of_hearts_fr.svg/288px-Queen_of_hearts_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Jack_of_diamonds_fr.svg/309px-Jack_of_diamonds_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/08_of_clubs.svg/371px-08_of_clubs.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/King_of_spades_fr.svg/371px-King_of_spades_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Queen_of_hearts_fr.svg/288px-Queen_of_hearts_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/King_of_clubs_fr.svg/500px-King_of_clubs_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/02_of_hearts.svg/288px-02_of_hearts.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/King_of_diamonds_fr.svg/309px-King_of_diamonds_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Queen_of_clubs_fr.svg/371px-Queen_of_clubs_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/King_of_spades_fr.svg/371px-King_of_spades_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Queen_of_diamonds_fr.svg/309px-Queen_of_diamonds_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/371px-01_of_spades_A.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/07_of_spades.svg/371px-07_of_spades.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/01_of_hearts_A.svg/288px-01_of_hearts_A.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/371px-01_of_spades_A.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Queen_of_spades_fr.svg/371px-Queen_of_spades_fr.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/01_of_clubs_A.svg/371px-01_of_clubs_A.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/01_of_diamonds_A.svg/309px-01_of_diamonds_A.svg.png",
  ];

  const shuffled = [...cards]
    .map((card) => ({ card, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.card);

  // "flip" төлөв бүрийн төлөө массив үүсгэнэ
  const [goodcards, setGoodcards] = useState(shuffled);
  const [matched, setMatched] = useState(Array(shuffled.length).fill(false));
  const [selected, setSelected] = useState([]);
  const [correctCards, setCorrectCards] = useState([]);

  const [flipped, setFlipped] = useState([]);

  useEffect(() => {
    console.log("correctCards.length", correctCards.length);

    if (correctCards.length === cards.length) {
      setTimeout(() => {
        window.alert("You win");
      }, 2000);
    }
  }, [correctCards.length]);

  const handleFlip = (index) => {
    console.log("indecx", index);
    console.log("correctCards", correctCards);
    console.log("flipped", flipped);
    if (correctCards.includes(index)) {
      console.log(correctCards.includes(index));
      return;
    }

    const newFlipped = [...flipped];

    newFlipped.push(index);

    if (correctCards) {
    }

    if (newFlipped.length > 2) {
      return;
    }

    if (newFlipped.length === 2) {
      setFlipped(newFlipped);

      const [one, two] = newFlipped;

      const card1 = cards[one];
      const card2 = cards[two];

      if (card1 !== card2) {
        return setTimeout(() => {
          setFlipped([]);
        }, 1000);
      }

      if (card1 === card2) {
        const test = [...correctCards];

        test.push(one, two);

        setCorrectCards(test);

        return setFlipped([]);
      }
    }

    setFlipped(newFlipped);
  };

  console.log("flipped", flipped);

  const backImage =
    "https://cdn-desktop-ap-media.osp.opera.software/public/generated_images/b28f3a25-b974-11f0-ac5c-fb95005e0610/1762257201371/sample_0.jpg"; // Картын ар тал

  return (
    <div className="grid grid-cols-9 gap-6 p-20 pt-25 pl-25">
      {cards.map((src, index) => (
        <div
          key={index}
          className="w-[90px] h-[130px] perspective cursor-pointer"
          onClick={() => handleFlip(index)}
        >
          <div
            className={`relative w-full h-full duration-500 transform-style-preserve-3d ${
              flipped.includes(index) || correctCards.includes(index)
                ? "rotate-y-180"
                : ""
            }`}
          >
            {/* Урд тал */}
            <div className="absolute inset-0 backface-hidden">
              <img
                src={backImage}
                alt="card front"
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Ар тал */}
            <div className="absolute inset-0 rotate-y-180 backface-hidden">
              <img
                src={src}
                alt="card back"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
