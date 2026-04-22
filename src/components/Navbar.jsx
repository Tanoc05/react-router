import { Link, NavLink } from "react-router-dom";
import { Heart,ShoppingCart,User } from 'lucide-react';


function Navbar(){
    return(
        <>
            <div className="w-[95%] mx-auto flex justify-between px-3 pt-2 font-medium">
                <div>
                    <h4 className="font-bold text-indigo-400">STORE</h4>
                </div>

                <nav className="flex gap-3">

                    <NavLink className={({ isActive }) => 
                        `pb-1 hover:text-indigo-400 hover:border-b-2 hover:border-indigo-400 ${
                        isActive 
                            && "text-indigo-400 border-b-2 border-indigo-400" 
                        }`
                    } to="/">Home</NavLink>

                    <NavLink className={({ isActive }) => 
                        `pb-1 hover:text-indigo-400 hover:border-b-2 hover:border-indigo-400 ${
                        isActive 
                            && "text-indigo-400 border-b-2 border-indigo-400" 
                        }`
                    } to="/prodotti">Prodotti</NavLink>

                    <NavLink className={({ isActive }) => 
                        `pb-1 hover:text-indigo-400 hover:border-b-2 hover:border-indigo-400 ${
                        isActive 
                            && "text-indigo-400 border-b-2 border-indigo-400"
                        }`
                    } to="/chi-siamo">Chi Siamo</NavLink>
                </nav> 
                
                <div className="flex gap-5 items-center">

                    <input className="pb-1 border border-slate-300 rounded-xl px-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 
                             transition-all" type="text" placeholder="cerca prodotto ..."
                    />

                </div>
            </div>
        </>
    )
}

export default Navbar;