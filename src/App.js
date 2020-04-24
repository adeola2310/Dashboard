import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="header-top__details">
            <div className="logo">
                <h3>Social Media Dashboard</h3>
                <p style={{fontSize: '10px', marginTop:'-5px'}}>Total Followers: 29,600</p>
            </div>
        <p style={{fontSize: '14px'}}>Dark Mode</p>
        </div>

        <div className="first__cards">
            <div className="card__one">
                <div className="card__details">
                    <p style={{fontSize: '14px'}}><img alt="facebook" src={require('./images/icon-facebook.svg')}/>  @Nathan</p>
                    <div className="followers" style={{marginTop:'-40px'}}>
                        <h2 style={{fontSize: '50px'}}>9000</h2>
                        <p style={{fontSize: '10px', marginTop: '-40px', letterSpacing: '2px'}}>FOLLOWERS</p>
                    </div>
                    <p style={{marginTop: '20px', fontSize:'12px'}}>12 Today</p>

                </div>
            </div>
            <div className="card__two">
                <div className="card__details">
                    <p style={{fontSize: '14px'}}> <img alt="facebook" src={require('./images/icon-twitter.svg')}/> Twitter</p>
                    <div className="followers" style={{marginTop:'-40px'}}>
                        <h2 style={{fontSize: '50px'}}>9000</h2>
                        <p style={{fontSize: '10px', marginTop: '-40px', letterSpacing: '2px'}}>FOLLOWERS</p>
                    </div>
                    <p style={{marginTop: '20px', fontSize:'12px'}}>12 Today</p>

                </div>
            </div>
            <div className="card__three">
                <div className="card__details">
                    <p style={{fontSize: '14px'}}> <img src={require('./images/icon-instagram.svg')} alt="instagram"/> Instagram</p>
                    <div className="followers" style={{marginTop:'-40px'}}>
                        <h2 style={{fontSize: '50px'}}>11K</h2>
                        <p style={{fontSize: '10px', marginTop: '-40px', letterSpacing: '2px'}}>FOLLOWERS</p>
                    </div>
                    <p style={{marginTop: '20px', fontSize:'12px'}}>12 Today</p>

                </div>
            </div>
            <div className="card__one">
                <div className="card__details">
                    <p style={{fontSize: '14px'}}> <img src={require('./images/icon-youtube.svg')}/> @nathan</p>
                    <div className="followers" style={{marginTop:'-40px'}}>
                        <h2 style={{fontSize: '50px'}}>9000</h2>
                        <p style={{fontSize: '10px', marginTop: '-40px', letterSpacing: '2px'}}>FOLLOWERS</p>
                    </div>
                    <p style={{marginTop: '20px', fontSize:'12px'}}>12 Today</p>

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
                       <p style={{fontSize: '15px'}}>-30</p>
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
                       <p style={{fontSize: '15px'}}>-30</p>
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
                       <p style={{fontSize: '15px'}}>-30</p>
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
                       <p style={{fontSize: '15px'}}>-30</p>
                   </div>
               </div>
             </div>
            </div>
        </div>

    </div>
  );
}

export default App;
