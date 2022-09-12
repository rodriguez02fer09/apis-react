import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
 
  useEffect(() => {
    if (isLoading) { //  solo hacer la solicitud si isLoading = true
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((dog) => {
          setImageUrl(dog.message);
          setIsLoading(false);
        });
    }
  }, [isLoading]); //  ahora este efecto se ejecutará cada vez que cambie este estado
  
  const randomDog = () => {
    setIsLoading(true); //  simplemente actualizamos isLoading a true
  };

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <img src={imageUrl} alt="Imagen de perrito aleatoria" />
      <button onClick={randomDog}>
        ¡Otro!{" "}
        <span role="img" aria-label="corazón">
          ❤️
        </span>
      </button>
    </div>
  );
}