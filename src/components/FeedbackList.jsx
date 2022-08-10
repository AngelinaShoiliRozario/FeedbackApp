import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
const FeedbackList = ({ feedback, handleDelete }) => {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(1);
  if (!feedback || feedback.length === 0) {
    return <p>No FeedBack Yet.</p>;
  }

  return (
    <div className="feedback-list">
      <button
        onClick={() => {
          //console.log(counter);
          setCounter((prev) => {
            return prev + 1;
          });
          if (counter % 2 === 0) {
            setReverse(false);
            // console.log("een");
          } else {
            setReverse(true);
          }
        }}
      >
        Change Theme
      </button>{" "}
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={index}
              feedback={item}
              reverse={reverse}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

//   return (
//     <div className="feedback-list">
//       <button
//         onClick={() => {
//           //console.log(counter);
//           setCounter((prev) => {
//             return prev + 1;
//           });
//           if (counter % 2 === 0) {
//             setReverse(false);
//             // console.log("een");
//           } else {
//             setReverse(true);
//           }
//         }}
//       >
//         Change Theme
//       </button>
//       {feedback.map((item, index) => (
//         <FeedbackItem
//           key={index}
//           feedback={item}
//           reverse={reverse}
//           handleDelete={handleDelete}
//         />
//       ))}
//     </div>
//   );
// };

// default props
FeedbackList.defaultProps = {};

// default propsTypes
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
export default FeedbackList;
