import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";

const UpdateBukper = () => {
    //deklarasi state
    const [_nomor, setNomor] = useState('');
    const [_namabuku, setNamabuku] = useState('');
    const [_tanggalpinjam, setTanggalpinjam] = useState('');
    const [_namapeminjam, setNamapeminjam] = useState('');

    //mengambil data yang dikirim melalui router
    const router = useRouter();
    const { nomor, namabuku, tanggalpinjam, namapeminjam } = router.query;

    useEffect(() =>{
        if (typeof nomor == 'string') {
            setNomor(nomor);
        }
        if (typeof namabuku == 'string') {
            setNamabuku(namabuku)
        }
        if (typeof tanggalpinjam == 'string') {
            setTanggalpinjam(tanggalpinjam)
        }
        if (typeof namapeminjam == 'string') {
            setNamapeminjam(namapeminjam)
        }
    }, [nomor, namabuku, tanggalpinjam, namapeminjam])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            axios 
                .put('http://localhost:5000/bukper/${_nomor}', {
                    nomor: _nomor,
                    namabuku: _namabuku,
                    tanggalpinjam: _tanggalpinjam,
                    namapeminjam: _namapeminjam,
                })
                .then(response => {
                    console.log(response);
                });
            
            alert("Update Data Sukses")
            Router.push('/admin/databukper')
        } catch (e) {
            console.log({message: e.message});
        }
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 font-blod text-center mb-3">
                        Edit Data Buku Perpus
                    </h1>
                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="nomor"
                                type="text"
                                placeholder="nomor"
                                value={_nomor}
                                onChange={(e) => setNomor(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="namabuku"
                                type="text"
                                placeholder="namabuku"
                                value={_namabuku}
                                onChange={(e) => setNamabuku(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="tanggalpinjam"
                                type="text"
                                placeholder="tanggalpinjam"
                                value={_tanggalpinjam}
                                onChange={(e) => setTanggalpinjam(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="namapeminjam"
                                type="text"
                                placeholder="namapeminjam"
                                value={_namapeminjam}
                                onChange={(e) => setNamapeminjam(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-row-reverse w-75">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
    
}

export default UpdateBukper;