import { useState } from "react";
import people from "./data";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteLeft,
  FaSearch,
} from "react-icons/fa";
import "./App.css";

function App() {
  const [index, setIndex] = useState(3);
  const { name, image, gitLink, text, job } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      // console.log("test : ", people.length - 1);
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random()* people.length);
    console.log('randomNum : ', randomNum);
    if (randomNum === index) {
      // console.log('A chacha a');
      randomNum = index + 1;
    }
    setIndex(checkNumber(randomNum))
  }

  return (
    <main>
      <article className="review">
        <h2 style={{ marginBottom: "2rem", fontFamily : 'canopee' }}>Git Collection</h2>
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteLeft />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        {/* <p></p> */}
        <p style={{ marginBottom: "2rem" }}>
          <a href={gitLink} className="btn" target="_blank">
            Gitlink <FaSearch />
          </a>
        </p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronCircleLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronCircleRight />
          </button>
        </div>
        <button className="btn" onClick={randomPerson}>Random Person</button>
      </article>
    </main>
  );
}

export default App;
