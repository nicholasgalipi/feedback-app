import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import feedbackData from "./data/feedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./components/pages/AboutPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutIconLink from "./components/AboutIconLink"
import {FeedbackProvider} from "./context/feedbackContext"

function App() {


    return (
        <FeedbackProvider>
            <Router>
                <Header text="Feedback App" />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                        <>
                                <FeedbackForm />
                                <FeedbackStats/>
                                <FeedbackList/>
                        </>     
                        }> 
                        </Route>
                        
                        <Route path="/about" element={<AboutPage />} />

                    </Routes>
                
                        <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App