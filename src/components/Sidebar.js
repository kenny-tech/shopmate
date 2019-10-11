import React, { Component } from 'react';

import SearchBox from './SearchBox';
import Department from './Department';
import Category from './Category';
import '../css/Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebarPanel p-3">
                <SearchBox />
                <Department />
                <Category />
            </div>
        )
    }
}

export default Sidebar;