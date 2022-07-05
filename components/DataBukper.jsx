
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
                    {data.map((bk,idx)=>(
                        <tr key = {idx}>
                            <td>{bp.nomor}</td>
                            <td>{bp.namabuku}</td>
                            <td>{bp.tanggalpinjam}</td>
                            <td>{bp.namapeminjam}</td>
                        </tr>
                    ))}
                </tbody>
           </table>
       </div>
    )
}

export default DataBukper;