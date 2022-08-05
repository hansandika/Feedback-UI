import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);
  const average =
    feedbacks.reduce((a, b) => a + b.rating, 0) / feedbacks?.length;

  return (
    <div className='feedback-stats'>
      <h4>{feedbacks?.length}</h4>
      <h4>
        Average Rating :{' '}
        {isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, '')}
      </h4>
    </div>
  );
}
