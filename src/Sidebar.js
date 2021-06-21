import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";
import { getTokenFromResponse } from "./spotify";

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log(playlists);

    return (
        <div className="sidebar">
            <img className="sidebar__logo"
            src="https://www.noisyghost.co/wp-content/uploads/2017/09/noisyghost_brand_design_header_lightness_03.jpg" alt="" />
        
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        
        <br />
        <strong className="sidebar__title">PLAYLISTS</strong>
        
        <hr />

        {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name} />
        ))}
        
        </div>
    );
}

export default Sidebar;
