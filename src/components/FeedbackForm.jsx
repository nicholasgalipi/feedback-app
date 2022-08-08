import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import { useContext } from 'react'
import FeedbackContext from '../context/feedbackContext'

function FeedbackForm() {
    const [text, setText] = useState()
    const [rating, setRating] = useState()
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback} = useContext(FeedbackContext)


    const handleTextChange = (e) => {
        console.log(text)
        setText(e.target.value)

        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if (text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
     }

     const handleSubmit = (e) => {
         e.preventDefault()
         if(text.trim().length > 10) {
             const newFeedback = {
                 text,
                 rating,
             }

             addFeedback(newFeedback)

             setText(' ')
         }
     }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review"/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm