import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 h-20 bg-green-700 flex justify-between items-center p-5 px-10 shadow-lg z-20">
                <h1 className="m-0 w-max">WhereAbouts</h1>
                <div className=" flex space-x-10">
                    
                    <button className=" flex flex-col items-center font-bold">
                        <img className="w-8" src="public/images/profile.png"/>
                        <h2>Profile</h2>
                    </button>
                   
                     <Link to={'/Login'} >
                        <button className="flex flex-col items-center font-bold"> 
                            <img className="w-8" src="public/images/logout.png"/>
                            <h2>Logout</h2>
                        </button>
                    </Link>
                </div>

            </header>
        </>
    )
}

export default Header;