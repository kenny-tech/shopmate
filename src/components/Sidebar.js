import React, { Component } from 'react';

import SearchBox from './SearchBox';
import Department from './Department';
import Category from './Category';

class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="sidebarPanel p-2">
                                <SearchBox />
                                <Department />
                                <Category />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Sidebar;