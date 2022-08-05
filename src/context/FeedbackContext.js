import { createContext, useState } from 'react';
import { FeedbackData } from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    id: null,
    status: false,
  });

  // Add Feedback
  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  // Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      setFeedbacks((feedbacks) => feedbacks.filter((item) => item.id !== id));
    }
  };

  // Edit Feedback
  const editFeedback = (id) => {
    setFeedbackEdit({
      id,
      status: true,
    });
  };

  // Update Feedback
  const updateFeedback = (id, text, rating) => {
    setFeedbacks(
      feedbacks.map((item) =>
        item.id === id
          ? {
              id,
              text,
              rating,
            }
          : item
      )
    );
    setFeedbackEdit({
      id: null,
      status: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
