import React from 'react';
import { TopSectionContainer, WelcomeText } from '../styles/TopSectionStyles';

export default function TopSection() {
  return (
    <TopSectionContainer>
      <WelcomeText>
        <h1>Hi <span>KRupasri</span>, we are here to help you.</h1>
        <p>Our experts will help you in your entire admission journey.</p>
      </WelcomeText>
      <div className="illustration">
        <img
          src="/placeholder.svg"
          alt="Support illustration"
          style={{ width: '200px', height: '150px', objectFit: 'contain' }}
        />
      </div>
    </TopSectionContainer>
  );
}