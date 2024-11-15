import React, { useState } from 'react';
import TopSection from './components/TopSection';
import FeedbackSection from './components/FeedbackSection';
import FeedbackModal from './components/FeedbackModal';
import { Container } from './styles/CommonStyles';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <Container>
      <TopSection />
      <FeedbackSection 
        onFeedbackClick={() => setIsModalOpen(true)}
        onPrintClick={handlePrint}
      />
      <FeedbackModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Container>
  );
}

export default App;