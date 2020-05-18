import React, {Component} from 'react';
import './App.css';




class App extends Component{

    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            backgroundColor : '#1D2029',
            cardColor: '#252B43',
            color: '#ffffff'

        }
    }

    changeColor =()=>{
        let newBackgroundColor = this.state.backgroundColor === '#1D2029'? '#FFFFFF': '#1D2029';
          this.setState({backgroundColor: newBackgroundColor});
          let  newColor = this.state.color === '#ffffff' ? '#000000' : '#ffffff';
        this.setState({color: newColor});
        let newcardColor = this.state.cardColor === '#252B43'? '#F0F3FA' : '#252B43';
        this.setState({cardColor: newcardColor});

    }


    render() {
        return (
            <div className="App" style={{backgroundColor: this.state.backgroundColor}}>
                <div className="header-top__details">
                    <div className="logo">
                        <h3 style={{color: this.state.color}}>Social Media Dashboard</h3>
                        <p style={{fontSize: '10px', marginTop:'-10px', color: this.state.color}}>Total Followers: 29,600</p>
                    </div>
                    <div className="underline"></div>
                    <div className="toggle">
                        <p style={{fontSize: '14px', marginRight:'9px', color: this.state.color}}> Dark Mode </p>
                        <label className="switch">
                            <input type="checkbox" onChange={this.changeColor}/>
                            <span className="slider round"></span>
                        </label>
                    </div>

                </div>

                <div className="first__cards">
                    <div className="card__one" style={{backgroundColor: this.state.cardColor}}>
                        <div className="top__color"></div>
                        <div className="card__details">
                            <div className="name">
                                <img alt="facebook" src={require('./images/icon-facebook.svg')}/>
                                <p style={{fontSize: '14px',color: this.state.color}} className="my-name">@Nathan</p>
                            </div>
                            <div className="followers" style={{marginTop:'-40px'}}>
                                <h2 style={{fontSize: '50px', color: this.state.color}}>9000</h2>
                                <p style={{fontSize: '10px', marginTop: '-40px', letterSpacing: '2px',color: this.state.color}}>FOLLOWERS</p>
                            </div>
                            <p style={{marginTop: '20px', fontSize:'12px', color:'#317673'}}>12 Today</p>

                        </div>
                    </div>
                    <div className="card__two" style={{backgroundColor: this.state.cardColor}}>
                        <div className="card__details">
                            <div className="name">
                                <img alt="facebook" src={require('./images/icon-twitter.svg')}/>
                                <p style={{fontSize: '14px',color: this.state.color}} className="my-name">@Adeola2310</p>
                            </div>
                            <div className="followers" style={{marginTop:'-40px'}}>
                                <h2 style={{fontSize: '50px',color: this.state.color}}>9000</h2>
                                <p style={{fontSize: '10px', marginTop: '-40px', letterSpacing: '2px', color: this.state.color}}>FOLLOWERS</p>
                            </div>
                            <p style={{marginTop: '20px', fontSize:'12px', color:'#317673'}}>12 Today</p>

                        </div>
                    </div>
                    <div className="card__three" style={{backgroundColor: this.state.cardColor}}>
                        <div className="card__details">
                            <div className="name">
                                <img alt="facebook" src={require('./images/icon-instagram.svg')}/>
                                <p style={{fontSize: '14px',color: this.state.color}} className="my-name">@the_neemee</p>
                            </div>
                            <div className="followers" style={{marginTop:'-40px'}}>
                                <h2 style={{fontSize: '50px',color: this.state.color}}>11K</h2>
                                <p style={{fontSize: '10px', marginTop: '-40px', letterSpacing: '2px',color: this.state.color}}>FOLLOWERS</p>
                            </div>
                            <p style={{marginTop: '20px', fontSize:'12px', color:'#317673'}}>12 Today</p>

                        </div>
                    </div>
                    <div className="card__one" style={{backgroundColor: this.state.cardColor}}>
                        <div className="card__details">
                            <div className="name">
                                <img alt="facebook" src={require('./images/icon-youtube.svg')}/>
                                <p style={{fontSize: '14px',color: this.state.color}} className="my-name">@Nathan</p>
                            </div>
                            <div className="followers" style={{marginTop:'-40px'}}>
                                <h2 style={{fontSize: '50px',color: this.state.color}}>9000</h2>
                                <p style={{fontSize: '10px',color: this.state.color, marginTop: '-40px', letterSpacing: '2px'}}>FOLLOWERS</p>
                            </div>
                            <p style={{marginTop: '20px', fontSize:'12px', color:'#317673'}}>12 Today</p>

                        </div>
                    </div>

                </div>

                <div className="overview">
                    <div className="overview__header">
                        <h6 style={{color: this.state.color}}>Overview- Today</h6>
                    </div>
                    <div className="overview__cards">
                        <div className="ov__card" style={{backgroundColor: this.state.cardColor}}>
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px',color: this.state.color}}>Page Viewers</p>
                                    <img src={require('./images/icon-instagram.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px',color: this.state.color}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-up.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#317673', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ov__card" style={{backgroundColor: this.state.cardColor}}>
                            <div className="ovcard__details" style={{backgroundColor: this.state.cardColor}}>
                                <div className="top">
                                    <p style={{fontSize: '12px',color: this.state.color}}>Page Viewers</p>
                                    <img src={require('./images/icon-facebook.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px',color: this.state.color}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-up.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#317673', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ov__card" style={{backgroundColor: this.state.cardColor}}>
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px',color: this.state.color}}>Page Viewers</p>
                                    <img src={require('./images/icon-facebook.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px',color: this.state.color}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-up.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#317673', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ov__card" style={{backgroundColor: this.state.cardColor}}>
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px',color: this.state.color}}>Page Viewers</p>
                                    <img src={require('./images/icon-facebook.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px',color: this.state.color}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-up.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#317673', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ov__card" style={{backgroundColor: this.state.cardColor}}>
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px',color: this.state.color}}>Page Viewers</p>
                                    <img src={require('./images/icon-facebook.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px',color: this.state.color}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-up.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#317673', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ov__card" style={{backgroundColor: this.state.cardColor}}>
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px',color: this.state.color}}>Page Viewers</p>
                                    <img src={require('./images/icon-facebook.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px',color: this.state.color}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-up.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#317673', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ov__card" style={{backgroundColor: this.state.cardColor}}>
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px',color: this.state.color}}>Page Viewers</p>
                                    <img src={require('./images/icon-facebook.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px',color: this.state.color}}>5000</h2>
                                    <div className="numb">
                                        <img src={require("./images/icon-down.svg")}/>
                                        <p style={{fontSize: '12px',  color:'#68394C', marginLeft:'4px'}}> 30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ov__card" style={{backgroundColor: this.state.cardColor}}>
                            <div className="ovcard__details">
                                <div className="top">
                                    <p style={{fontSize: '12px',color: this.state.color}}>Page Viewers</p>
                                    <img src={require('./images/icon-facebook.svg')} alt="page_viewer"/>
                                </div>
                                <div className="bottom">
                                    <h2 style={{fontSize:'30px',color: this.state.color}}>5000</h2>
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
