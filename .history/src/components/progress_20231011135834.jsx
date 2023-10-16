import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


const ArtGallery = () => {
  const initialArtwork = []; // Replace with your array of image sources
  const [artwork, setArtwork] = useState(initialArtwork);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  // Simulated data loading
  const fetchMoreArtwork = () => {
    // In this example, let's simulate loading more images from your predefined array
    const itemsPerPage = 10; // Adjust as needed
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    
    if (endIndex >= initialArtwork.length) {
      setHasMore(false); // No more items to load
    }

    const newArtwork = initialArtwork.slice(startIndex, endIndex);

    setArtwork([...artwork, ...newArtwork]);
    setPage(page + 1);
  };

  useEffect(() => {
    // Initial load of artwork
    fetchMoreArtwork();
  }, []);

  return (
    <div>
      <InfiniteScroll
        dataLength={artwork.length}
        next={fetchMoreArtwork}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {artwork.map((src, index) => (
          <div key={index} className="artwork-card">
            <img src={src} alt={`Artwork ${index}`} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default ArtGallery;
