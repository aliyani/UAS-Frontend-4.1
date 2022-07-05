import LayoutAdmin from "../../components/admin/LayOutAdmin"
import BukperByNomor from "../../components/admin/BukperByNomor"
import DataBukper from "../../components/admin/DataBukper"

const databukper = ({data}) =>{
        {Array.isArray(data) ? data : data = [data]}
    return(
        <LayoutAdmin>
            <BukperByNomor/>
            <DataBukper data = {data}/>
        </LayoutAdmin>
    )
}

export async function getServerSideProps({query}){
    const nomor = query.nomor;
    let url = `http://localhost:5000/bukper`
    if (typeof nomor === 'string'){
        url = `http://localhost:5000/bukper/${nomor}`
    }
    //fetch data
    const res = await fetch(url)
    const data = await res.json()
    return {props : {data}}
}

export default databukper;