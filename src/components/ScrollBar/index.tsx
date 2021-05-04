import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

export default class Scrollbar extends Component {
    constructor(props: Component, ...rest: any) {
        super({ props, ...rest });
        this.renderView = this.renderView.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
    }

    renderView({ style, ...props }) {
        return <div className="box" style={{ ...style }} {...props} />;
    }

    renderThumb({ style, ...props }) {
        const thumbStyle = {
            backgroundColor: "#fff",
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
    }

    render() {
        return (
            <Scrollbars
                renderView={this.renderView}
                renderThumbHorizontal={this.renderThumb}
                renderThumbVertical={this.renderThumb}
                universal={true}
                {...this.props}
            />
        );
    }
}
