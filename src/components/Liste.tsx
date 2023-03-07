import { useStore } from "@nanostores/react"
import { ajouter, modifierText, TodoStore } from "../stores/TodoList.store"

export default function Liste(){
    
    const{text}= useStore(TodoStore)

    return(

        <>
        <h2>Nouvelle Liste</h2>
    
        <input value={text} type="text" onChange={(e)=> {
            modifierText(e.currentTarget.value)
        }}/>
        <button onClick={ajouter}>Créer</button>
    
        </>

    )



}