import { useState } from 'react';
import TopSection from '../components/TopSection';
import FeedbackSection from '../components/FeedbackSection';
import FeedbackModal from '../components/FeedbackModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <TopSection />
      <FeedbackSection 
        onFeedbackClick={() => setIsModalOpen(true)}
        onPrintClick={() => window.print()}
      />
      <FeedbackModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={() => setIsModalOpen(false)}
      />
    </div>
  );
}
