import React, { Component } from "react";
import * as UI from "@material-ui/core";
import clientConfig from "../../client_config.js";

import { ResourceFeeder } from "../../resources_feeder";

import Window from "../../components/dialog";

class ProductManager extends Component {
    static appStaticProps = {
        appName: ["Product Manager", "产品管理"],
        icon: "/assets/apps/clothing_label.svg"
    };

    render() {
        return (
            <Window appProps={this.props.appProps} width={800} height={600}>
                <div className="window-content">
                    <div className="app-template-fill">
                        <img src={this.constructor.appStaticProps.icon} />
                        <h1>Product Manager</h1>
                        <h2>Management of items sold by the company.</h2>
                    </div>
                </div>
            </Window>
        );
    }
}

export default ProductManager;
