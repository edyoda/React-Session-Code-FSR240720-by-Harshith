import React from 'react';
import "./App.css";
import Card from './Card';
import Header from './Header';


function App() { // Component Name must be Pascal Case
  // Car JSON Data
  const carsData = [
    {
      "id": "1",
      "title": "Polo",
      "thumbnail": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volkswagen/Polo/7743/1587972393986/front-left-side-47.jpg"
    },
    {
      "id": "2",
      "title": "Vento",
      "thumbnail": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volkswagen/Vento/7793/1587972526671/front-left-side-47.jpg"
    },
    {
      "id": "3",
      "title": "T-Roc",
      "thumbnail": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volkswagen/T-Roc/6889/1584516450158/front-left-side-47.jpg"
    },
    {
      "id": "4",
      "title": "Tiguan",
      "thumbnail": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volkswagen/Tiguan-Allspace/7258/1583488599383/front-left-side-47.jpg"
    },
    {
      "id": "5",
      "title": "Passat 2020",
      "thumbnail": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volkswagen/Passat-2020/7860/Volkswagen-Passat-2020-/1591618436194/front-left-side-47.jpg"
    },
    {
      "id": "6",
      "title": "Tiguan 2021",
      "thumbnail": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volkswagen/Tiguan-2021/7892/1593601646673/front-left-side-47.jpg"
    },
    {
      "id": "7",
      "title": "Virtus",
      "thumbnail": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volkswagen/Virtus/6120/1597645692701/front-left-side-47.jpg"
    },
  ]


  return (
    <div className="App">
      {/* Header Component*/}
      {/* <Header headerValue={"Volkswagen Showroom"} /> */}
      <Header headerValue={"Volkswagen Showroom"} />

      {/* Grids Component*/}
      <div className="CardGrid">
        {carsData.map((item) => <Card carTitle={item.title} thumbnailImg={item.thumbnail} />)}
      </div>

      {/* Footer Component*/}
      <Footer footerTitle={"Contant Us for more Information"} />

    </div>
  )
}

export default App;


const Footer = (anyProps) => <h1 style={{ fontSize: "24px" }}>{anyProps.footerTitle}</h1>//Inline Styling