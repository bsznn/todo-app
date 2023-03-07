import { action, map } from "nanostores"

/*

const state = {
    newList: 'Courses du dimanche',
    lists: [
        {
            user: 'Rose',
            name: 'Petites courses',
            newTodo: 'Du pain',
            todos: [
                { label: 'Pommes de terres', complete: false },
                { label: 'Pommes de terres', complete: true },
            ]
        },
        {
            user: 'Rose',
            name: 'A faire demain'
        }
    ]
}

*/

export type Todo = {
    label: string
    complete: boolean
}

export type TodoList = Todo[]

export type List = {
    user: string
    name: string
    newTodo: string
    todos : TodoList
}

export type MainList = {
    newList: string
    lists : List[]
}

export const ListStore = map<MainList>({
    newList : "",
    lists: [],
})

export const lister = action(ListStore, 'lister', store => {
    const { newList, lists } = store.get()
    lists.push({user:'Rose', name: newList, newTodo:'Courses du dimanche', todos:[]})
    store.setKey('lists', lists)
})

/*


export type TodosState = {
    text: string
    todos: string[]
}

export const TodoStore = map<TodosState>({
    text : "",
    todos: [],
})

export const ajouter = action(TodoStore, 'ajouter', store => {
    const { text, todos } = store.get()
    todos.push(text)
    store.setKey('todos', todos)
})

export const modifierText = action(TodoStore, 'modifierText', (store, lettreEntree:string) =>{
    store.setKey('text', lettreEntree)
})


export const supprimer = action(TodoStore, "supprimer", (store, i:number )=> {
    const { todos } = store.get()
    const newTodos = todos.filter((todo, index) => index !== i)
    store.setKey('todos', newTodos)
})

*/