import Link from "next/link";
const DataBukper = ({data}) =>{
    return(
       <div className='container'>
           <h3>Data Buku Perpus</h3>
           <table className = "table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Nomor</th>
                        <th>Nama Buku</th>
                        <th>Tanggal Pinjam</th>
                        <th>Nama Peminjam</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((bp,idx)=>(
                        <tr key = {idx}>
                            <td>{bp.nomor}</td>
                            <td>{bp.namaBuku}</td>
                            <td>{bp.tanggalPinjam}</td>
                            <td>{bp.namaPeminjam}</td>
                            <td>
                                <div className="d-flex justify-content-between">
                                    <Link href={`/admin/updateBukper?nomor=${bk.nomor}
                                        &namabuku=${bk.namaBuku}&tanggalpinjam=${bk.tanggalPinjam}
                                        &namapeminjam=${bk.namaPeminjam}`}
                                    >
                                        <a>Edit</a>
                                    </Link>
                                </div>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
           </table>
       </div>
    )
}

export default DataBukper;