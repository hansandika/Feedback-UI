import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackList({ handleDelete }) {
  const { feedbacks } = useContext(FeedbackContext);

  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback yet</p>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem {...feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
