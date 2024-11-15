import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  background: #0a0045;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FeedbackText = styled.h2`
  color: white;
  font-size: 20px;
  margin: 0;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const FeedbackButton = styled.button`
  background: #f7a034;
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #f8b155;
  }
`;

export const PrintButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
