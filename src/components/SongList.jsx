import React, { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import Song from "./Song";

const SongList = () => {
  const [data, setData, query, setQuery] = useContext(DataContext);
  return (
    <div className="results__container">
      {data &&
        data.map((item) => (
          <Song
            key={item.song_id}
            title={item.song_name}
            album={item.album_name}
            albumArt={item.song_image}
            artist={item.song_artist}
            year={item.year}
            link={item.download_links[0]}
          />
        ))}
    </div>
  );
};

export default SongList;
