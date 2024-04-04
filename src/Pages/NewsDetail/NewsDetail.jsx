import { useParams } from "react-router-dom";
import Header from "../Home/Shared/Header/Header";
import RightSideNav from "../Home/Shared/RightSideNav/RightSideNav";
import Navbar from "../Home/Shared/Navbar/Navbar";


const NewsDetail = () => {
    const {id} = useParams();
    return (
      <div>
        <Header></Header>
       <Navbar></Navbar>
        <div className="grid md:grid-cols-4">
            <div className="col-span-3">
{id}
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
      </div>
    );
};

export default NewsDetail;