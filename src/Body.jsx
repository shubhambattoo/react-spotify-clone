import React from 'react';
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

const Body = ({ spotify }) => {
  const [{ current_playlist }] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          src={current_playlist?.images[0]?.url}
          alt={`${current_playlist?.name}`}
        />
        <div className="body__infoText">
          <strong>{current_playlist?.type}</strong>
          <h2>{current_playlist?.name}</h2>
          <p>{current_playlist?.description}</p>
          <div className="body__infoText__meta">
            <div>{current_playlist?.owner?.display_name} </div>
            {/* <div>{current_playlist?.followers?.total}</div> */}
          </div>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__songs__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        <div className="body__songs__list">
          {current_playlist?.tracks.items.map((item) => {
            return <SongRow track={item.track} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
