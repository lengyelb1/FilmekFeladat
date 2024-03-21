import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SingleDisplay(){
    var param = useParams();
    const [film, setFilm] = useState([])
    useEffect(() => {
        fetch(`https://localhost:7017/Film/${param.id}`)
        .then(response => response.json())
        .then(data => setFilm(data))
    },[])
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <p className="navbar-brand text-primary">SingleDisplay</p>
                <a className="navbar-brand" href="/NewFilm">NewFilm</a>

              </div>
            </nav>
            <div key={film.id} className="card col-3 p-3 mx-auto" > 
                <img src={film.kepneve} className="card-img-top img-fluid"  alt={film.kepneve}/>
                
                <div className="card-body">
                  <h5 className="card-title">{film.nev}</h5>
                  <p className="card-text">{film.kiadasEve}</p>
                  <p className="card-text">{film.ertekeles}</p>
                </div>
                <button className="btn btn-danger mb-3" onClick={async () => {
                    await fetch(`https://localhost:7017/Film/${film.id}`, {
                        method: 'DELETE'
                    })
                    alert('Sikeres törlés')
                }}> Delete </button>
                <a href={`../Update/${film.id}`} className="btn btn-primary"> Update </a>
            </div>
        </div>
    )
}