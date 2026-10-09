import React from "react";
import "./Kino.css";

const products = [
    {
        id: 1,
        title: "Guardians of galaxy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8DqLRF9Dwgtlmo48VweLUiEBDWEwzPCQHoeLn6Y6MTcOjNCvUUp_upWGsrM5d9ag17n60d-6z16xbEg2REgwyySxCa4ZWz8R-utLrePcG&s=10 ",
        description: "The Guardians of the Galaxy are a team of misfit space outlaws in Marvel Comics and movies who protect the universe from cosmic threats. The core members include Star-Lord, Gamora, and Rocket Raccoon.",
        video: "https://youtu.be/-aTEFqesaOs?si=2g-bANQ-L1TWtFWz"
    },
    {
        id: 2,
        title: "Iron Man 3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhWvcMgjF8ayGBqQzdInndL6vOwZOQuY5tMy2SHX-fA&s=10",
        description: "Iron Man 3 is a 2013 superhero film where Tony Stark battles a terrorist named the Mandarin while dealing with anxiety after the events of The Avengers",
        video: "https://youtu.be/pmsenRqufQA?si=SuO1Z3dmkRiXzntL"
    },

    {
        id: 3,
        title: "Thor : Ragnarok",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfx3o0ONgFDjWfYBHx-hpTg4-nNbffkEE7ujbg_0Uag&s=10",
        description: "Thor: Ragnarok (2017) is the third installment in Marvel Studios' Thor franchise and the 17th film in the Marvel Cinematic Universe (MCU). Directed by Taika Waititi, the film is a cosmic superhero action-comedy that completely revitalized the character with a vibrant, humorous, and fast-paced tone",
        video: "https://youtu.be/rP_L_0LdMSw?si=A37JcLVSUL3EEkyO"


    },


];

function Kino() {
    return (
        <div className="movie-container">
            {products.map(item => (
                <div className="movie-card" key={item.id}>
                    <img
                        className="item-image"
                        src={item.image}
                        alt={item.title}
                    />

                    <div className="movie-info">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <button
                            className="watch-btn"
                            onClick={() => window.open(item.video, "_blank")}
                        >
                            Watch
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Kino;