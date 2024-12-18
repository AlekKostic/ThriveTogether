import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Emotionform from "../Components/Emotionform";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistika = () => {
  const navigate = useNavigate();

  const [osecanja, setOsecanja] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8080/api/raspolozenja/${localStorage.getItem(
        "userID"
      )}`,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        setOsecanja(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const emotionCounts = osecanja.reduce((acc, item) => {
    acc[item.raspolozenje] = (acc[item.raspolozenje] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(emotionCounts),
    datasets: [
      {
        label: "Emotion Count",
        data: Object.values(emotionCounts),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const addPost = () => {
    if (parseInt(localStorage.getItem("userID")) === -1) {
      navigate("/login");
      return;
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const quotes = [
    "Nemojte biti previše strogi prema sebi. Razumite da nije svaki dan savršen, ali to ne znači da niste dovoljno dobri.",
    "Mentalno zdravlje nije luksuz, već nužnost.",
    "Sreća nije nešto što se postiže, već nešto što se bira svaki dan.",
    "Tvoje mentalno zdravlje zaslužuje istu pažnju kao i tvoje fizičko zdravlje.",
    "Najvažnija stvar koju možeš da uradiš za sebe je da se setiš da si vredan ljubavi, pažnje i poštovanja.",
    "Imaj strpljenja sa sobom. Postepeno, korak po korak, postaješ bolji.",
    "Briga o sebi nije sebičnost. To je nužnost.",
    "Svi imamo dan kada se osećamo loše. To je u redu. Važno je da se podsetimo da će proći i da smo sposobni da prebrodimo sve.",
    "Ponekad je najbolje što možete da uradite za svoje mentalno zdravlje jednostavno da se opustite i dozvolite sebi da budete ono što jeste.",
    "Niko nije savršen. Svi imamo svoje borbe. Ključ je u tome da ne odustajemo.",
    "Razumevanje svojih emocija je prvi korak ka izlečenju.",
    "Nema ništa loše u tome da zatražiš pomoć. Ponekad je to upravo ono što ti treba da bi nastavio napred.",
    "Kada se osećaš umorno, seti se da si ti najvažniji prioritet. Sledi svoj unutrašnji glas i daj sebi ljubav.",
    "Možda ne možeš da kontrolišeš sve što ti se događa, ali uvek možeš da izabereš kako ćeš da reaguješ.",
    "Svaka borba koju preživiš čini te jačim, mudrijim i spremnijim za narednu.",
  ];

  return (
    <div>
      <div className="statistika-container">
        <Navbar />
        <div className="hero-section">
          <div className="Hero4"></div>
        </div>
        <div className="postavi-objavi2">
          <button className="postt" onClick={addPost}>
            + Dodaj osecanje
          </button>
        </div>
        {isModalOpen && <Emotionform closeModal={closeModal} />}
        <div className="quote-section">
          <p className="quote">
            {quotes[Math.floor(Math.random() * quotes.length)]}
          </p>
        </div>
        <div className="emotion-chart">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: "Emotions Overview",
                  font: { size: 20 },
                },
                tooltip: {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Emotions",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Count",
                  },
                },
              },
            }}
          />
        </div>
        )
      </div>
    </div>
  );
};

export default Statistika;
