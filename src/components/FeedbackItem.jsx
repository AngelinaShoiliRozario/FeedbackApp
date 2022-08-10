import Card from "./shared/Card";
import PropType from "prop-types";
const FeedbackItem = ({ feedback, reverse, handleDelete }) => {
  return (
    <Card reverse={reverse}>
      <div className="num-display">{feedback.rating}</div>

      <div className="text-display">{feedback.text}</div>
      <button
        className="close"
        style={{
          backgroundColor: "black",
          height: "20px",
          width: "20px",
          borderRadius: "50%",
          color: "white",
        }}
        onClick={() => {
          handleDelete(feedback.id);
        }}
      >
        x
      </button>
    </Card>
  );
};
FeedbackItem.propTypes = {
  feedback: PropType.shape({
    id: PropType.number.isRequired,
    rating: PropType.number.isRequired,
    text: PropType.string.isRequired,
  }),
  reverse: PropType.bool,
};
export default FeedbackItem;
