import { useRouter } from "next/router";
import { useState } from "react"

const BukperByNomor = () =>{
    const [nomor, setNomor] = useState('')
    const router = useRouter()
    const getBkByNomor = (e) =>{
        e.preventDefault();
        router.push({
            pathname : 'databukper',
            query : {'nomor' : nomor}
        })
    }
    return(
        <div className="container">
            <form onSubmit={getBkByNomor}>
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col d-flex flex-reverse">
                        <input type="text"
                            className="from-control"
                            placeholder="Cari by Nomor"
                            value={nomor}
                            onChange={(e)=>setNomor(e.target.value)}
                        />
                        <input type="submit" value="Cari"
                                className="btn btn-success ms-2 fs-6" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BukperByNomor;