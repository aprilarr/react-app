import React, {Component} from "react";
import YoutubeComp from "../component/YoutubeComponent/YoutubeComp";
import Product from "./Product/Product";

class Home extends Component {
    render(){
        return (
            <div>
                {/* <YoutubeComp time="7.12" title="Belajar ReactJs"  desc="aaaaaa"/>
                <YoutubeComp time="8.42" title="Belajar ReactJs1" desc="bbbbbb"/>
                <YoutubeComp time="2.00" title="Belajar ReactJs2" desc="cccccc"/>
                <YoutubeComp />
                <hr />
                <br /> */}
                <Product />
            </div>
        );
    }
}

export default Home;