import {useState, createContext} from "react"

export interface Itask {
    id: number,
    text: string,
    done: boolean
}

export const appContext = createContext<any>("")

export function Context ({children}: any) {

    const [taskList, setTaskList] = useState<Itask[]>([])

    const [text, setText] = useState<string>("")

    return (
        <appContext.Provider value = {{taskList, setTaskList, text, setText}}>{children}</appContext.Provider>
    )
} 