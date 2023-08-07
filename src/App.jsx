import React, { useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const App = () => {

    const [buscar, setBuscar] = useState("")

    let inputBuscar = useRef();

    let username = useRef()
    let password = useRef()

    let loader = useRef()

    const mostrarDatos = () => {
        //console.log(inputBuscar.value)
        console.log(inputBuscar.current.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        console.log(username.current.value)
        console.log(password.current.value)

    }

    const loadVideo = videoUrl => {
        loader.current.width = "100%"
        loader.current.src = videoUrl;
    } 

    return (
        <div>
            <div className="buscador w-50 mx-auto my-5">
                <div className="form-group">
                    <label htmlFor="buscar" className="form-label"></label>
                    <div className="input-group">
                        <input
                            //ref={(r) => inputBuscar = r}
                            ref={inputBuscar}
                            type="text"
                            className="form-control"
                            id="buscar"
                            name="buscar"
                            placeholder='Buscar...'
                        //onChange={(e) => setBuscar(e.target.value)}
                        />
                        <button className="btn btn-success btn-sm" onClick={mostrarDatos}>
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>

            <form className='w-50 mx-auto my-3' onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-md-12">
                        <div className="form-group mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="email" className="form-control" id="username" placeholder='username'
                                ref={username}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-12">
                        <div className="form-group mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder='password'
                                ref={password}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-12 d-grid">
                        <button className='btn btn-primary btn-sm gap-2'>Login</button>
                    </div>
                </div>
            </form>

            <div className="w-50 mx-auto my-3 d-flex flex-column border p-2">
                <div className="list my-2">
                    <ul className="list-group">
                        <li className='list-group-item list-group-item-action' onClick={() => loadVideo("https://www.youtube.com/embed/ZilS8JytnEo")}>Video 1</li>
                        <li className='list-group-item list-group-item-action' onClick={() => loadVideo("https://www.youtube.com/embed/TQPk8efIDHM")}>Video 2</li>
                        <li className='list-group-item list-group-item-action' onClick={() => loadVideo("https://www.youtube.com/embed/qQHtet49j_8")}>Video 3</li>
                    </ul>
                </div>

                <div className="loader my-2">
                    <iframe ref={loader} width="1280" height="350" src="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

            </div>

        </div>
    )
}

export default App