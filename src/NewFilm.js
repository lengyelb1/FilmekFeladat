export default function NewFilm(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <p className="navbar-brand text-primary">NewFilm</p>
              </div>
            </nav>
            <form className="form mx-auto"
                onSubmit={async (event) => {
                    event.preventDefault()
                    fetch(`https://localhost:7017/Film/`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            nev: event.target.nev.value,
                            kepneve: event.target.kepneve.value,
                            kiadasEve: parseInt(event.target.kiadasEve.value),
                            ertekeles: parseInt(event.target.ertekeles.value)
                        })
                    })
                    .finally(() => alert("Sikeres Feltöltés!"))
                }}
            >
                <label for="nev">Nev</label>
                <input className="form-control" id="nev" type="text" name="nev"/>
                <label for="kepneve">Kep</label>
                <input className="form-control" id="kepneve" type="file" name="kepneve"/>
                <label for="kiadasEve">KiadasEve</label>
                <input className="form-control" id="kiadasEve" type="number" name="kiadasEve"/>
                <label for="ertekeles">Ertekeles</label>
                <input className="form-control" id="ertekeles" type="number" name="ertekeles"/>
                <input className="form-control btn btn-primary" type="submit" value={"Post"}/>
            </form>
    </div>
    )
}