import React from "react";

function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }
  return (
    <div
      className="track-item d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img className="track-img"
        src={track.albumUrl}
        alt="track"
        style={{ height: "64px", width: "64px" }}
      />
      <div className="track-text ml-3">
        <div className="track-title">{track.title} </div>
        <div className="track-artist"> {track.artist} </div>
      </div>
    </div>
  );
}

export default TrackSearchResult;
