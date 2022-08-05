import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackItem({ id, rating, text }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <button onClick={() => deleteFeedback(id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(id)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  id: PropTypes.number,
  rating: PropTypes.number,
  text: PropTypes.string,
};
