import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import QZone1 from '../../../../assets/qZone1.png'
import QZone2 from '../../../../assets/qZone2.png'
import QZone3 from '../../../../assets/qZone3.png'
import bgImage from '../../../../assets/bg1.png'

const RightSideNav = () => {
    return (
        <div>
           <div className="p-4 space-y-3 mb-6">
            <h2 className="text-3xl">Login With</h2>
            <button className="btn btn-outline w-full"><FaGoogle /> Login with Google</button>
            <button className="btn btn-outline w-full"><FaGithub /> Login with Github</button>
           </div>

           <div className="p-4 mb-6">
            <h2 className="text-3xl mb-4">Find Us On</h2>
            <a className="p-4 flex items-center gap-2 border rounded-t-lg" href=""><FaFacebookF /> Facebook</a>
            <a className="p-4 flex items-center gap-2 border-x" href=""><FaTwitter /> Twitter</a>
            <a className="p-4 flex items-center gap-2 border rounded-b-lg" href=""><FaInstagramSquare /> Instagram</a>
           </div>

           {/* Q Zone */}
           <div className="p-4 mb-6 bg-[#F3F3F3]">
            <h2 className="text-3xl mb-4">Q-Zone</h2>
            <img src={QZone1} alt="" />
            <img src={QZone2} alt="" />
            <img src={QZone3} alt="" />
           </div>

           <div style={{backgroundImage: `url(${bgImage})`}} className="p-6 space-y-4 text-center text-white">
            <h2 className="font-bold text-3xl">Create an Amazing Newspaper</h2>
            <p className="font-medium text-lg">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className="btn btn-secondary font-semibold">Learn More</button>
           </div>
        </div>
    );
};

export default RightSideNav;