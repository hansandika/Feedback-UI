import Card from './shared/Card';
import { useEffect, useState } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { v4 as uuidv4 } from 'uuid';
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

export default function FeedbackForm() {
  const { feedbacks, addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState('');
  const [rating, setRating] = useState(10);
  const selectedFeedback = feedbacks.find(
    (item) => item?.id === feedbackEdit?.id
  );

  useEffect(() => {
    if (feedbackEdit.status === true) {
      setBtnDisabled(false);
      setText(selectedFeedback.text);
      setRating(selectedFeedback.rating);
    }
  }, [feedbackEdit, selectedFeedback]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        id: uuidv4(),
        text,
        rating,
      };

      if (feedbackEdit.status === true) {
        updateFeedback(selectedFeedback.id, text, rating);
      } else {
        addFeedback(newFeedback);
      }
    }

    resetForm();
  };

  const resetForm = () => {
    setText('');
    setMsg('');
    setRating(10);
    setBtnDisabled(true);
  };

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMsg('Text must be at least 10 character');
    } else {
      setBtnDisabled(false);
      setMsg(null);
    }
    setText(e.target.value);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {msg && <div className='message'>{msg}</div>}
      </form>
    </Card>
  );
}
