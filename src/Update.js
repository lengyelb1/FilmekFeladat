import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Update(props) {
    var param = useParams();
    const [film, setFilm] = useState([])
    useEffect(() => {
        fetch(`https://localhost:7017/Film/${param.id}`)
        .then(response => response.json())
        .then(data => setFilm(data))
    },[])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <p className="navbar-brand text-primary">Update</p>
                <a className="navbar-brand" href="/NewFilm">NewFilm</a>

              </div>
            </nav>
            <form className="form mx-auto"
                onSubmit={async (event) => {
                    event.preventDefault()
                    fetch(`https://localhost:7017/Film/${param.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: param.id,
                            nev: event.target.elements.nev.value,
                            kepneve: event.target.elements.kepneve.value,
                            kiadasEve: event.target.elements.kiadasEve.value,
                            ertekeles: event.target.elements.ertekeles.value
                        })
                    })
                    .finally(() => alert("Sikeres Frissítés!"))
                }}
            >
                <label for="nev">Nev</label>
                <input className="form-control" id="nev" type="text" name="nev" defaultValue={film.nev}/>
                <label for="kepneve">Kepneve</label>
                <input className="form-control" id="kepneve" type="text" name="kepneve" defaultValue={film.kepneve}/>
                <label for="kiadasEve">KiadasEve</label>
                <input className="form-control" id="kiadasEve" type="number" name="kiadasEve" defaultValue={film.kiadasEve}/>
                <label for="ertekeles">Ertekeles</label>
                <input className="form-control" id="ertekeles" type="number" name="ertekeles" defaultValue={film.ertekeles}/>
                <input className="form-control btn btn-primary" type="submit" value={"Update"}/>
            </form>
        </div>

    )
}