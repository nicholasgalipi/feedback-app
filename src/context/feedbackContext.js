import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()



export const FeedbackProvider =({children}) => {
    const [feedback, setFeedback] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(()=>{
        fetchFeedback()
    },[])

    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    const deleteFeedback = (id) => {
            if(window.confirm("Are you sure you want to delete?")){
                setFeedback(feedback.filter( (item) => {return item.id !== id}))
    
            }
        }

    //update fb item
        const updateFeedback = (id, updItem) => {
           setFeedback(feedback.map( (item) => item.id === id ? {...item, ...updItem} : item))
        }


    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    // Add feedback
    const addFeedback =  (newFeedback) => {
            newFeedback.id = uuidv4()
            setFeedback([newFeedback, ...feedback])
    } 
    // Set item to be updated
    const editFeedback  = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
     } 

    return (<FeedbackContext.Provider value={{feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback,isLoading}}>
        {children}
    </FeedbackContext.Provider>)
}

export default FeedbackContext