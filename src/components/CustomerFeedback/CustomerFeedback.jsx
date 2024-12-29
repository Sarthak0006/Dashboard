import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import './CustomerFeedback.css';

const feedbacks = [
  {
    id: 1,
    name: "Jenny Wilson",
    avatar: "images/img8.jpg",
    rating: 4,
    comment: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    id: 2,
    name: "Dianne Russell",
    avatar: "images/img9.jpg",
    rating: 5,
    comment: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    id: 3,
    name: "Devon Lane",
    avatar: "images/img7.jpg",
    rating: 5,
    comment: "Normally wines are wines, but theirs are lean meaty and tender and perfectly seasoned. Great atmosphere and amazing staff!",
  }
];

export default function CustomerFeedback() {
  return (
    <div className="feedback-section">
      <div className="feedback-header">
        <h2>Customer's Feedback</h2>
        <button className="view-all">
          View All <ChevronRight size={16} />
        </button>
      </div>
      <div className="feedback-list">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="feedback-card">
            <div className="feedback-user">
              <img src={feedback.avatar} alt={feedback.name} />
              <div className="feedback-user-info">
                <h3>{feedback.name}</h3>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < feedback.rating ? 'filled' : ''}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="feedback-comment">{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

