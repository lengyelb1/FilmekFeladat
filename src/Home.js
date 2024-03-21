import { useEffect, useState } from "react"
export default function Home () {
    const [films, setFilms] = useState([])
    useEffect(() => {
        fetch('https://localhost:7017/Film')
        .then(response => response.json())
        .then(data => setFilms(data))
    },[])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand text-primary" >Home</a>
                <a className="navbar-brand" href="/NewFilm">NewFilm</a>

              </div>
            </nav>
            <div>
                <DisplayFilms data={films} />
            </div>
        </div>
    )
}
 

function DisplayFilms(param){
    return (
        <div className="row mx-auto">
            {
                param.data.map((film) => (
                    <div key={film.id} className="card col-3 m-3"> 
                        <a href={`SingleDisplay/${film.id}`}>
                            <img src={film.kepneve} className="card-img-top img-fluid"  alt={film.kepneve}/>
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">{film.nev}</h5>
                          <p className="card-text">{film.kiadasEve}</p>
                          <p className="card-text">{film.ertekeles}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}