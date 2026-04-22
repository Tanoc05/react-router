import { Heart,ShoppingCart,User } from 'lucide-react';


function Card(props){
    return(
        <>
            <div className="w-[180px] border border-slate-200 rounded-md flex flex-col items-center bg-white p-2">
                <img 
                    src={props.pr.image} 
                    alt={props.pr.title} 
                    className="h-32 w-32 object-contain bg-gray-100 rounded m-3"
                />
                <div className="w-full">
                    <p className="text-[10px] uppercase text-slate-400 mb-1">{props.pr.category}</p>
                    <p className="text-[10px]">{props.pr.title}</p>
                </div>

                <div className="w-full mt-4 flex flex-row justify-between">
                    <div className="flex flex-row gap-2">
                        <p className="text-[11px] text-red-600 line-through">{(props.pr.price + 10).toFixed(2)}</p>
                        <p className="text-[11px] text-indigo-500">{props.pr.price}</p>
                    </div>
                    <ShoppingCart size={16} className='text-indigo-500'/>
                </div>
            </div>
        </>
    )
}


export default Card;