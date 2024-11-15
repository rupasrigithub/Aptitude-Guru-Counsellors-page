import React, { useState } from 'react';
import { Star, X } from 'lucide-react';
import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  CloseButton,
  StarRating,
  StarButton,
  SuccessMessage,
  SubmitButton,
  TextArea,
  ModalTitle,
  ModalSubtitle
} from '../styles/FeedbackModalStyles';

export default function FeedbackModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setRating(0);
      setFeedback('');
      setIsSubmitted(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>
        <ModalContent>
          <ModalTitle>Give us Feedback</ModalTitle>
          <ModalSubtitle>
            Share your feedback to help make CollegeDekho better for everyone.
          </ModalSubtitle>
          <div>
            <h3>Overall CollegeDekho Rating</h3>
            <StarRating>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarButton
                  key={star}
                  isSelected={star <= rating}
                  onClick={() => setRating(star)}
                >
                  <Star size={32} />
                </StarButton>
              ))}
            </StarRating>
          </div>
          <TextArea
            placeholder="Write here.."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          {isSubmitted && (
            <SuccessMessage>
              Thank you! Your feedback has been submitted successfully
            </SuccessMessage>
          )}
          <SubmitButton onClick={handleSubmit}>
            Submit Feedback
          </SubmitButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
}