import { useRouter } from "next/router"

const nomor = () =>{
    const bukper = [
            {nomor : '01', namabuku : 'geografi'},
            {nomor : '02', namabuku : 'akuntansi'},
            {nomor : '03', namabuku : 'fisika'}
    ];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const {nomor} = router.query;
    const data = bukper.find(m => m.nomor == nomor)
    return(
        <>
            <p>Nomor : {nomor}</p>
            <p>Nama Buku : {data.namabuku}</p>
        </>
    )
}

export default nomor;