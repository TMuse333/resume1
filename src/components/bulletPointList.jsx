import React, { useEffect, useState } from 'react';
import BulletPoint from './BulletPoint';

const BulletPointList = () => {
  const bulletPoints = [
    'Point 1',
    'Point 2',
    'Point 3',
    'Point 4',
    'Point 5',
    'Point 6',
  ];

  const [visibleBulletPoints, setVisibleBulletPoints] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the number of visible bullet points based on the scroll position
      setVisibleBulletPoints(Math.floor(scrollPosition / 400)); // Adjust this threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ul>
      {bulletPoints.slice(0, visibleBulletPoints).map((point, index) => (
        <BulletPoint key={index} text={point} />
      ))}
    </ul>
  );
};

export default BulletPointList;
