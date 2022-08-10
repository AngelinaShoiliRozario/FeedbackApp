import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";
import "./index.css";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id) => {
    if (window.confirm("ARE YOU SURE YOU WANT TO DELETE THIS FEEDBACK?")) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    console.log(newFeedback);
    newFeedback.id = parseInt(uuidv4());
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
        <AboutIconLink />
      </div>
    </>
  );
};

export default App;
