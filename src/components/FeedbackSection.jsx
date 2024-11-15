import React from 'react';
import { Printer } from 'lucide-react';
import {
  FeedbackContainer,
  FeedbackText,
  ActionButtons,
  FeedbackButton,
  PrintButton
} from '../styles/FeedbackSectionStyles';

export default function FeedbackSection({ onFeedbackClick, onPrintClick }) {
  return (
    <FeedbackContainer>
      <FeedbackText>
        Tell us! How was your experience with Collegedekho?
      </FeedbackText>
      <ActionButtons>
        <PrintButton onClick={onPrintClick} aria-label="Print page">
          <Printer size={24} />
        </PrintButton>
        <FeedbackButton onClick={onFeedbackClick}>
          Share your Feedback
        </FeedbackButton>
      </ActionButtons>
    </FeedbackContainer>
  );
}