import React, {Component} from 'react';
import './App.css';




class App extends Component{

    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            backgroundColor : 'black'
        }
    }

    changeColor =()=>{
        let newBackgroundColor = this.state.backgroundColor === 'black'? 'white': 'black';
          this.setState({backgroundColor: newBackgroundColor});
    }


    render() {
        return (
            <div className="App">
                <div className="header-top__details">
                    <div className="logo">
                        <h3>Social Media Dashboard</h3>
                        <p style={{fontSize: '10px', marginTop:'-10px'}}>Total Followers: 29,600</p>
                    </div>
                    <p style={{fontSize: '14px'}}> Dark Mode <button onClick={this.changeColor}>Toggle</button></p>
                </div>

                <div className="first__cards">
                    <div className="card__one">
                        <div className="top__color"></div>
                        <div className="card__details">
                            <div className="name">
                                <img alt="facebook" src={require('./images/icon-facebook.svg')}/>
                                <p style={{fontSize: '14px'}} className="my-name">@Nathan</p>
                            </div>
                            <div className="followers" style={{marginTop:'-40px'}}>
                                <h2 style={{fontSize: '50px'}}>9000</h2>
                                <p style={{fontSize: '10px', marginTop: '-40px', letterSpacing: '2px'}}>FOLLOWERS</p>
                            </div>
                            <p style={{marginTop: '20px', fontSize:'12px', color:'#317673'}}>12 Today</p>

                        </div>
                    </div>
                    <div className="card__two">
                        <div className="card__details">
                            <div className="name">
                                <img alt="facebook" src={require('./images/icon-twitter.svg')}/>
                                <p style={{fontSize: '14px'}} className="my-name">@Adeola2310</p>
                            </div>
                            <div className="followers" style={{marginTop:'-40px'}}>
                                <h2 style={{fontSize: '50px'}}>9000</h2>
                                <p style={{fontSize: '10px', marginTop: '-40px', letterSpacing: '2px'}}>FOLLOWERS</p>
                            </div>
                            <p style={{marginTop: '20px', fontSize:'12px', color:'#317673'}}>12 Today</p>

                        </div>
                    </div>
                    <div className="card__three">
                        <div className="card__details">
                            <div className="name">
                                <img alt="facebook" src={require('./images/icon-instagram.svg')}/>
                                <p style={{fontSize: '14px'}} className="my-name">@the_neemee</p>
                            </div>
                            <div className="followers" style={{marginTop:'-40px'}}>
                                <h2 style={{fontSize: '50px'}}>11K</h2>
                                <p style={{fontSize: '10px', marginTop: '-40px', letterSpacing: '2px'}}>FOLLOWERS</p>
                            </div>
                            <p style={{marginTop: '20px', fontSize:'12px', color:'#317673'}}>12 Today</p>

                        </div>
                    </div>
                    <div className="card__one">
                        <div className="card__details">
                            <div className="name">
                                <img alt="facebook" src={require('./images/icon-youtube.svg')}/>
                                <p style={{fontSize: '14px'}} className="my-name">@Nathan</p>
                            </div>
                            <div className="followers" style={{marginTop:'-40px'}}>
                                <h2 style={{fontSize: '50px'}}>9000</h2>
                                <p style={{fontSize: '10px', marginTop: '-40px', letterSpacing: '2px'}}>FOLLOWERS</p>
                            </div>
                            <p style={{marginTop: '20px', fontSize:'12px', color:'#317673'}}>12 Today</p>

                        </div>
                    </div>

                </div>

                <div className="overview">
                    <div className="overview__header">
                        <h6>Overview- Today</h6>
                    </div>
                    <div className="overview__cards">
                        <div className="ov__card">
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px'}}>Page Viewers</p>
                                    <img src={require('./images/icon-instagram.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px'}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-up.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#317673', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ov__card">
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px'}}>Page Viewers</p>
                                    <img src={require('./images/icon-facebook.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px'}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-up.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#317673', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ov__card">
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px'}}>Page Viewers</p>
                                    <img src={require('./images/icon-facebook.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px'}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-up.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#317673', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ov__card">
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px'}}>Page Viewers</p>
                                    <img src={require('./images/icon-facebook.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px'}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-up.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#317673', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ov__card">
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px'}}>Page Viewers</p>
                                    <img src={require('./images/icon-facebook.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px'}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-up.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#317673', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ov__card">
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px'}}>Page Viewers</p>
                                    <img src={require('./images/icon-facebook.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px'}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-up.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#317673', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ov__card">
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px'}}>Page Viewers</p>
                                    <img src={require('./images/icon-facebook.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px'}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-down.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#68394C', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ov__card">
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px'}}>Page Viewers</p>
                                    <img src={require('./images/icon-facebook.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px'}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-up.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#68394C', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }


}

export default App;
