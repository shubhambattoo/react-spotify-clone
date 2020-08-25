import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

const Sidebar = () => {
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        src={require('./images/full-white-logo.jpg')}
        alt="spotify black logo"
        className="sidebar__logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Playlist" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__title">Playlists</strong>
      <hr />

      {playlists?.items?.map((playlist) => {
        return <SidebarOption title={playlist.name} />;
      })}
    </div>
  );
};

export default Sidebar;
