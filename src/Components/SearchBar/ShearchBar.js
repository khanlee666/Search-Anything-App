import React, { Component } from 'react'
import "./SearchBar.css"
class ShearchBar extends Component {
    state={
     value:""
    }
    onChange =(e)=>{
        this.setState({
            value: e.target.value
        })
    }
    searchClick =()=>{
        this.props.onSearchImage(this.state.value)
        }
    render() {
        return (
            <div>
                <div className="search-bar-container ui icon input">
                    <input type="text" onChange={this.onChange}  onKeyPress ={(e)=>{
                        if(e.key === 'Enter'){
                            this.searchClick();
                        }
                    }}placeholder="Search..." />
                    <i className="circular search link icon" onClick={this.searchClick}></i>
                </div>
            </div>
        )
    }
}

export default ShearchBar;