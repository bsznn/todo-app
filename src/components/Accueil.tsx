import { useStore } from "@nanostores/react"
import { Link } from "react-router-dom"
import { ListStore } from "../stores/Liste.store"

export default function Accueil(){
    const{newList, lists} = useStore(ListStore)
    

    return (
        <>
            <h2>Mes Todos</h2>

            {lists.map(({user, name, newTodo, todos}, index) =>

                <div className="todos">
                    <h3></h3>
                    <Link to="/todolist">Petites Courses</Link>
                </div>
            )}
           
         <br></br>

            <div>
                <button><Link to="/nouvelle-liste"> Nouvelle Liste </Link></button>
            </div>

        </>

    )
}