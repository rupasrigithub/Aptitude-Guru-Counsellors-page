import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  margin: 0 0 8px 0;
  color: #000051;
  font-weight: 600;
`;

export const ModalSubtitle = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0 0 24px 0;
`;

export const StarRating = styled.div`
  display: flex;
  gap: 8px;
  margin: 12px 0 24px;
`;

export const StarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${props => props.isSelected ? '#f7a034' : '#ddd'};
  
  &:hover {
    color: #f7a034;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 16px;
  font-family: inherit;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #f7a034;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: #4c4cff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #3939ff;
  }
`;

export const SuccessMessage = styled.div`
  color: #22c55e;
  font-size: 14px;
  margin-bottom: 16px;
  text-align: center;
`;