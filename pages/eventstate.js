import EventState from "../components/EventState";
import Nav from "../components/user/Nav";

const evenstate=()=>{
    return(
        <>
        <Nav/>
        <div className="container m-4">
            <EventState />
        </div>
        </>
    )
}
export default evenstate
