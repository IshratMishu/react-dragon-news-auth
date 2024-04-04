import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);

    useEffect( () =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    useEffect(()=>{
        fetch('sideNews.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])


    return (
        <div>
            <div className="space-y-5">
           <h2 className="text-2xl">All Categories</h2>
           {
            categories.map(category => <Link 
                className="block ml-4 text-xl font-semibold"
                to={`/category/${category.id}`}
                key={category.id}>{category.name}</Link>)
           }
        </div>

           <div className="space-y-3 mt-6">
            {
                news.map(newsItem => <div key={newsItem.id} className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={newsItem.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{newsItem.title}</h2>
                  <div className="flex items-center justify-between">
                    <p>{newsItem.category}</p>
                    <p className="flex items-center"><CiCalendarDate /> {newsItem.date}</p>
                  </div>
                </div>
              </div>)
            }
           </div>
        </div>
    );
};

export default LeftSideNav;