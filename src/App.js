import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [selectedSongIndex, setSelectedSongIndex] = useState(null);
  const [isPlayExpanded, setIsPlayExpanded] = useState(false);

  const songData = [
    {
      number: 8,
      name: "Kraken",
      writtenBy: "Matt Woodland, Josh Woodland",
      producedBy: "Matt Woodland, Josh Woodland",
      engineeredBy: "Josh Woodland",
      releaseDate: "Oct 20 2023",
      spotifyLink: "https://open.spotify.com/track/5U6rOKGZMR8i7JF2GcmePv?si=3fbe08c5f6034cf1",
      appleMusicLink: "https://music.apple.com/us/album/kraken/1712616743?i=1712616744",
      youtubeLink: "https://youtu.be/Jq8mB8irp2k?si=yulByGYvDfsN-tiR",
      amazonMusicLink: "https://amazon.com/music/player/albums/B0CLC2FNLW?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_NMNdaE1bgeWMp4cJPKWyHn7CW&trackAsin=B0CLCHTG5R"
    },
    {
      number: 7,
      name: "Ballerina",
      writtenBy: "Josh Woodland, Matt Woodland",
      producedBy: "Brenden Bytheway, Josh Woodland, Matt Woodland",
      engineeredBy: "Brenden Bytheway",
      releaseDate: "Apr 15 2022",
      spotifyLink: "https://open.spotify.com/track/3WXyMbvod3uJ3TFxXXMmgA?si=558188fde60340bb",
      appleMusicLink: "https://music.apple.com/us/album/ballerina/1619634176?i=1619634177",
      youtubeLink: "https://youtu.be/OXtGmyT3SjM?si=ctf2aPYF3MGXwlTK",
      amazonMusicLink: "https://amazon.com/music/player/albums/B09Y3QLR7B?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_Hm6IYA98xbWCbFAB84RY8lDcd&trackAsin=B09Y3RRWCY"
    },
    {
      number: 6,
      name: "Beat is Flame",
      writtenBy: "Josh Woodland, Matt Woodland",
      producedBy: "Nate Pyfer, Josh Woodland, Matt Woodland",
      engineeredBy: "Nate Pyfer",
      releaseDate: "Feb 11 2022",
      spotifyLink: "https://open.spotify.com/track/0LPUnmlYWzPQYr16Iiy1JJ?si=a0b059735f8a47b2",
      appleMusicLink: "https://music.apple.com/us/album/beat-is-flame/1608052663?i=1608052664",
      youtubeLink: "https://youtu.be/8liacde5ASE?si=ZHfCJtBl4DBi8ODb",
      amazonMusicLink: "https://amazon.com/music/player/albums/B09RNC57LZ?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_tDFm4PLQZvxXmhQX8N5ljpp4B&trackAsin=B09RN9V7NN"
    },
    {
      number: 5,
      name: "You Are",
      writtenBy: "Josh Woodland, Matt Woodland",
      producedBy: "Josh Woodland, Matt Woodland",
      engineeredBy: "Brenden Bytheway",
      releaseDate: "Aug 6 2021",
      spotifyLink: "https://open.spotify.com/track/7npjXNaaCGHA2MsjZkE4sy?si=c3f5df4a7a0c4746",
      appleMusicLink: "https://music.apple.com/us/album/you-are/1579173321?i=1579173322",
      youtubeLink: "https://youtu.be/IbKsUsjNc1w?si=PRvXCgcOerXUoeVI",
      amazonMusicLink: "https://amazon.com/music/player/albums/B09BLF9G49?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_msgswTKOvxxrhMpQxtsBpxe71&trackAsin=B09BLFRVDS"
    },
    {
      number: 4,
      name: "On the Rock",
      writtenBy: "Josh Woodland, Matt Woodland",
      producedBy: "Brenden Bytheway, Josh Woodland, Matt Woodland",
      engineeredBy: "Brenden Bytheway",
      releaseDate: "Mar 19 2021",
      spotifyLink: "https://open.spotify.com/track/3KCLjmBSnmZ23QOJLupk7I?si=96cbd0213e66418d",
      appleMusicLink: "https://music.apple.com/us/album/on-the-rock/1559074665?i=1559074666",
      youtubeLink: "https://youtu.be/K7eTc7vBK-U?si=MUz7AAPNIbyRdJ4B",
      amazonMusicLink: "https://amazon.com/music/player/albums/B08ZCLXYVL?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_f1AJ7SDLnupbpRr2baTVvBS7v&trackAsin=B08ZCJBKDB"
    },
    {
      number: 3,
      name: "Orange Juice",
      writtenBy: "Josh Woodland, Matt Woodland",
      producedBy: "Josh Woodland, Matt Woodland",
      engineeredBy: "Scott Wiley",
      releaseDate: "Nov 6 2020",
      spotifyLink: "https://open.spotify.com/track/4v3iOD4lerYJg63ydgZA7v?si=dfb7466020144e9a",
      appleMusicLink: "https://music.apple.com/us/album/orange-juice/1535294664?i=1535294665",
      youtubeLink: "https://youtu.be/AtxB6dK2REo?si=g3ou4V0kguaU83uI",
      amazonMusicLink: "https://amazon.com/music/player/albums/B08L8ZFPJT?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_t8ymXn2wKH4EQIo8Wh2E6HR7j&trackAsin=B08L8XLV78"
    },
    {
      number: 2,
      name: "Locked",
      writtenBy: "Matt Woodland, Josh Woodland",
      producedBy: "Brenden Bytheway, Josh Woodland, Matt Woodland",
      engineeredBy: "Brenden Bytheway",
      releaseDate: "Oct 30 2020",
      spotifyLink: "https://open.spotify.com/track/5LMDlCZ27MXdaeg8R7ISLm?si=260ae55b6b6d4d72",
      appleMusicLink: "https://music.apple.com/us/album/locked/1535287539?i=1535287542",
      youtubeLink: "https://youtu.be/6ZwnsQT7SsM?si=NmBiNrABUGpQviHI",
      amazonMusicLink: "https://amazon.com/music/player/albums/B08L88R56N?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_wq6CCviH99uqJsdQ38bI7wzr2&trackAsin=B08L89FGVV"
    },
    {
      number: 1,
      name: "Metro",
      writtenBy: "Josh Woodland, Matt Woodland",
      producedBy: "Josh Woodland, Matt Woodland",
      engineeredBy: "Scott Wiley",
      releaseDate: "Oct 23 2020",
      spotifyLink: "https://open.spotify.com/track/40JrzxbEq4eyxqB9ml0T6t?si=a7e982331b584785",
      appleMusicLink: "https://music.apple.com/us/album/metro/1535411090?i=1535411091",
      youtubeLink: "https://youtu.be/4JNs0pZnr8g?si=b1bTmI9DSSQqxM4L",
      amazonMusicLink: "https://amazon.com/music/player/albums/B08LT9N794?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_pZfvrPFUWETRHbakBjOmFTSnr&trackAsin=B08LTHB6C9"
    }
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

  const togglePlayExpansion = () => {
    console.log('Toggle play expansion');
    setIsPlayExpanded(prevState => !prevState);
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
            <div 
              key={song.number} 
              className="song-item" 
              onClick={() => openModal(index)}
            >
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
              <div className={`play-container ${isPlayExpanded ? 'expanded' : ''}`}>
                <button 
                  className="play-button"
                  onClick={togglePlayExpansion}
                >
                  {!isPlayExpanded && <i className="fas fa-play"></i>}
                  {isPlayExpanded && (
                    <div className="platform-icons">
                      <a href={songData[selectedSongIndex].spotifyLink} target="_blank" rel="noopener noreferrer" className="platform-icon spotify">
                        <i className="fab fa-spotify"></i>
                      </a>
                      <a href={songData[selectedSongIndex].appleMusicLink} target="_blank" rel="noopener noreferrer" className="platform-icon apple-music">
                        <i className="fab fa-apple"></i>
                      </a>
                      <a href={songData[selectedSongIndex].youtubeLink} target="_blank" rel="noopener noreferrer" className="platform-icon youtube-music">
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a href={songData[selectedSongIndex].amazonMusicLink} target="_blank" rel="noopener noreferrer" className="platform-icon amazon-music">
                        <i className="fab fa-amazon"></i>
                      </a>
                    </div>
                  )}
                </button>
              </div>
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
