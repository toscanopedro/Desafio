import { useQuery, gql } from '@apollo/client'
import React from 'react';


function Card({ filter, invert }) {


    const sortQuery = gql`
        query {
          Country(orderBy: ${filter}_${invert}){
            _id,
            name,
            capital,
            population,
            area,
            flag {
              svgFile
            },
            subregion {
              name
            }
          }
      }
      `;

    const { loading, error, data } = useQuery(sortQuery);
    console.log(data)

    if (loading) return <p> loading</p>
    if (error) return <p> error</p>
    console.log(data.Country.length)


    let card = data.Country.map((Country, id) => (

        <div key={id} className="card">

            <div className="titleCard">
                {Country.name}
            </div>
            <div className="flagContainer">
                <img src={Country.flag.svgFile} className="flag"></img>
            </div>
            <div className="cardText">
                <p><b>Capital:</b> {Country.capital === "" ? "Has no capital" : Country.capital}</p>
                <p><b>Population:</b> {Country.population} inhabitants</p>
                {/* <p><b>Subregion:</b> {Country.subregion.name === ""  ? "Has no subregion" : Country.subregion.name}</p>*/}
                <p><b>Area:</b> {Country.area === null ? "Unknow" : Country.area + " Km²"} </p>
            </div>
        </div>
    ))
    return (

        <div className="cards" >{card}</div>

    )

}

export default Card;
