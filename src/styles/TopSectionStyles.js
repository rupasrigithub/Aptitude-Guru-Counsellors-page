import styled from 'styled-components';

export const TopSectionContainer = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const WelcomeText = styled.div`
  h1 {
    color: #000051;
    font-size: 24px;
    margin: 0 0 8px 0;
    
    span {
      color: #000051;
      font-weight: bold;
    }
  }

  p {
    color: #666;
    font-size: 14px;
    margin: 0;
  }
`;