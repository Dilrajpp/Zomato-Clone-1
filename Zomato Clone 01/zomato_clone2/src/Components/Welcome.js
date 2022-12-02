import React from "react";
import '../Styles/Home.css';

class Welcome extends React.Component{

    handleLocationChange = (event) => {
        const locationId = event.target.value;
        sessionStorage.setItem('locationId', locationId);
    }

    render(){
        const { locationData } = this.props
        return(
            <div>
                <div className="">
                    <img className="headerImg" src="./Img/Background.png" alt="backgroundImage" />
                    <h1 className="logo">e!</h1>
                </div>
                <div className="search-area">

                    <select className="" id="search" onChange={this.handleLocationChange}>
                        <option value="0">Select</option>
                            { locationData.map((item) => {
                                return(
                                    <option value={item.locationId}>
                                        {`${item.location}`}
                                    </option>
                                )
                            })}
                    </select>
                    <div className="input-field">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder=" Search for restaurant, foods here" />

                    </div>
                </div>
            </div>
        )
    }
}
export default Welcome;