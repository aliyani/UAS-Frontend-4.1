import { useState } from "react"
import axios from "axios"

const CreateBukper = () => {
    const [nomor, setNomor] = useState('');
    const [namabuku, setNamabuku] = useState('');
    const [tanggalpinjam, setTanggalpinjam] = useState('');
    const [namapeminjam, setNamapeminjam] = useState('');

    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:5000/bukper", {
                    nomor,
                    namabuku,
                    tanggalpinjam,
                    namapeminjam,
                })
                .then(response => {
                    console.log(response);
                });
            alert("Penambahan Data sukses")
           clearInput()
        } catch (e) {
            throw Error(e.message)
        }
    }
    const clearInput = () => {
        setNomor('')
        setNamabuku('')
        setTanggalpinjam('')
        setNamapeminjam('')
    }

    return(
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input Buku Perpus</h1>
                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="nomor"
                                type="text"
                                placeholder="nomor"
                                value={nomor}
                                onChange={(e) => setNomor(e.target.value)}
                            />
                            <label htmlFor="nomor">Nomor</label>
                        </div>

                        <div className="form-floating">
                        <input
                                className="form-control mb-2"
                                id="namabuku"
                                type="text"
                                placeholder="namabuku"
                                value={namabuku}
                                onChange={(e) => setNamabuku(e.target.value)}
                            />
                            <label htmlFor="namabuku">Nama Buku</label>
                        </div>

                        <div className="form-floating">
                        <input
                                className="form-control mb-2"
                                id="tanggalpinjam"
                                type="text"
                                placeholder="tanggalpinjam"
                                value={tanggalpinjam}
                                onChange={(e) => setTanggalpinjam(e.target.value)}
                            />
                            <label htmlFor="tanggalpinjam">Tanggal Pinjam</label>
                        </div>

                        <div className="form-floating">
                        <input
                                className="form-control mb-2"
                                id="namapeminjam"
                                type="text"
                                placeholder="namapeminjam"
                                value={namapeminjam}
                                onChange={(e) => setNamapeminjam(e.target.value)}
                            />
                            <label htmlFor="namapeminjam">Nama Peminjam</label>
                        </div>
                    </div>
                    <div className="w-75 d-flex flex-row-revverse">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateBukper;