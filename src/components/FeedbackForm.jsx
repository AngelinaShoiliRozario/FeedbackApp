import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState(null);
  const [rating, setRating] = useState(10);
  const handleChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value !== "" && e.target.value.trim().length < 10) {
      setMsg("It should be at least 10 characters");
      setText(e.target.value);
      setBtnDisabled(true);
    } else if (e.target.value === "") {
      setMsg(null);
      setText(e.target.value);
      setBtnDisabled(true);
    } else {
      setMsg(null);
      setText(e.target.value);
      setBtnDisabled(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = { text, rating };
    //console.log(newFeedback);
    handleAdd(newFeedback);
    // setting the text to empty string
    setText("");
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* select rating */}
        <RatingSelect
          defaultRating={rating}
          select={(rating) => {
            // console.log(rating);
            // console.log(typeof rating);
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={(e) => handleChange(e)}
            value={text}
          />
          <Button version="primary" type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {msg && <div className="message">{msg}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
