import { Fragment } from 'react';
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';

export default function HomePage({ feedbacks, setFeedbacks }) {
  return (
    <Fragment>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </Fragment>
  );
}
