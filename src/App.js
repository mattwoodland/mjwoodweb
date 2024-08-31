import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [selectedSongIndex, setSelectedSongIndex] = useState(null);

  const songData = [
    { 
      number: 8, 
      name: "Kraken", 
      writtenBy: "Matt Woodland, Josh Woodland",
      producedBy: "Matt Woodland, Josh Woodland",
      engineeredBy: "Josh Woodland",
      releaseDate: "Oct 20 2023",
      spotifyLink: "https://open.spotify.com/track/5U6rOKGZMR8i7JF2GcmePv?si=0fed014279824ec9"
    },
    { 
      number: 7, 
      name: "Ballerina", 
      writtenBy: "Josh Woodland, Matt Woodland",
      producedBy: "Brenden Bytheway, Josh Woodland, Matt Woodland",
      engineeredBy: "Brenden Bytheway",
      releaseDate: "Apr 15 2022",
      spotifyLink: "https://open.spotify.com/track/3WXyMbvod3uJ3TFxXXMmgA?si=3e6283096b084ab4"
    },
    { 
      number: 6, 
      name: "Beat is Flame", 
      writtenBy: "Josh Woodland, Matt Woodland",
      producedBy: "Nate Pyfer, Josh Woodland, Matt Woodland",
      engineeredBy: "Nate Pyfer",
      releaseDate: "Feb 11 2022",
      spotifyLink: "https://open.spotify.com/track/0LPUnmlYWzPQYr16Iiy1JJ?si=6aca59d9f0064dc4"
    },
    { 
      number: 5, 
      name: "You Are", 
      writtenBy: "Josh Woodland, Matt Woodland",
      producedBy: "Josh Woodland, Matt Woodland",
      engineeredBy: "Brenden Bytheway",
      releaseDate: "Aug 6 2021",
      spotifyLink: "https://open.spotify.com/track/7npjXNaaCGHA2MsjZkE4sy?si=1de0b72bbac84c47"
    },
    { 
      number: 4, 
      name: "On the Rock", 
      writtenBy: "Josh Woodland, Matt Woodland",
      producedBy: "Brenden Bytheway, Josh Woodland, Matt Woodland",
      engineeredBy: "Brenden Bytheway",
      releaseDate: "Mar 19 2021",
      spotifyLink: "https://open.spotify.com/track/3KCLjmBSnmZ23QOJLupk7I?si=400f089f7ab14b62"
    },
    { 
      number: 3, 
      name: "Orange Juice", 
      writtenBy: "Josh Woodland, Matt Woodland",
      producedBy: "Josh Woodland, Matt Woodland",
      engineeredBy: "Scott Wiley",
      releaseDate: "Nov 6 2020",
      spotifyLink: "https://open.spotify.com/track/4v3iOD4lerYJg63ydgZA7v?si=b6abb7ed5ab544cc"
    },
    { 
      number: 2, 
      name: "Locked", 
      writtenBy: "Matt Woodland, Josh Woodland",
      producedBy: "Brenden Bytheway, Josh Woodland, Matt Woodland",
      engineeredBy: "Brenden Bytheway",
      releaseDate: "Oct 30 2020",
      spotifyLink: "https://open.spotify.com/track/5LMDlCZ27MXdaeg8R7ISLm?si=18deb071e8dd47ad"
    },
    { 
      number: 1, 
      name: "Metro", 
      writtenBy: "Josh Woodland, Matt Woodland",
      producedBy: "Josh Woodland, Matt Woodland",
      engineeredBy: "Scott Wiley",
      releaseDate: "Oct 23 2020",
      spotifyLink: "https://open.spotify.com/track/40JrzxbEq4eyxqB9ml0T6t?si=55f85fc4e0d544ba"
    },
  ];

  const socialLinks = [
    { icon: 'fab fa-spotify', url: 'https://open.spotify.com/artist/2mmRWJ8CNKojZBkT7bDd5Q' },
    { icon: 'fab fa-itunes-note', url: 'https://music.apple.com/us/artist/mj-wood/1535278961' },
    { icon: 'fab fa-amazon', url: 'https://www.amazon.com/music/player/artists/B01MUFEVT7/mj-wood' },
    { icon: 'fab fa-youtube', url: 'https://www.youtube.com/channel/UCI7PKRN98vLqH5HW2Lp2MxQ' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/mjwood_tunes/' },
    { icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@mjwood_tunes' },
    /*{ icon: 'fa-brands fa-x-twitter', url: 'https://twitter.com/your-twitter' },*/
  ];

  const openModal = (index) => {
    setSelectedSongIndex(index);
  };

  const closeModal = () => {
    setSelectedSongIndex(null);
  };

  const nextSong = () => {
    setSelectedSongIndex((prevIndex) => (prevIndex + 1) % songData.length);
  };

  const prevSong = () => {
    setSelectedSongIndex((prevIndex) => (prevIndex - 1 + songData.length) % songData.length);
  };

  // Add this useEffect hook
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    // Add event listener when the modal is open
    if (selectedSongIndex !== null) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedSongIndex]); // Re-run effect when selectedSongIndex changes

  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/mjwood-logo-300x60.png" alt="MJ Wood Logo" className="band-logo" />
      </header>
      <div className="song-grid-container">
        <main className="song-grid">
          {songData.map((song, index) => (
            <div key={song.number} className="song-item" onClick={() => openModal(index)}>
              <img src={`/images/image-${song.number}.jpg`} alt={`Image ${song.number}`} />
              <div className="song-info">
                <p className="song-name">{song.name}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
      {selectedSongIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-nav modal-prev" onClick={prevSong}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="modal-image">
              <img src={`/images/image-${songData[selectedSongIndex].number}.jpg`} alt={songData[selectedSongIndex].name} />
            </div>
            <div className="modal-info">
              <h2>{songData[selectedSongIndex].name}</h2>
              <p><strong>Written by:</strong> {songData[selectedSongIndex].writtenBy}</p>
              <p><strong>Produced by:</strong> {songData[selectedSongIndex].producedBy}</p>
              <p><strong>Engineered by:</strong> {songData[selectedSongIndex].engineeredBy}</p>
              <p><strong>Release date:</strong> {songData[selectedSongIndex].releaseDate}</p>
              <a href={songData[selectedSongIndex].spotifyLink} target="_blank" rel="noopener noreferrer" className="spotify-button">
                <i className="fab fa-spotify"></i>
                <span>Play on Spotify</span>
              </a>
            </div>
            <div className="modal-nav modal-next" onClick={nextSong}>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
