import React from 'react';
import { useState, useEffect } from 'react'
import { Button } from '../Button';
import './MainDisplay.css'
import './Ships.css'
import '../Map/Map.css'
import '../ConversationLog/ConversationLog.css'
import WhoTalking from './WhoTalking';
import Map from '../Map/Map';
import ConversationLog from '../ConversationLog/ConversationLog';

const Layout = () => {
    return (
        <div style={{ display: 'flex' }}>
            <MainContent />
            <Sidebar />
        </div>
    );
};


const Sidebar = () => {
    const [isMapExpanded, setIsMapExpanded] = useState(false);

    return (
        <div className='sidebar-wrapper'>
            <div className={`map-wrapper ${isMapExpanded ? 'expanded' : ''}`}>
                <Map isExpanded={isMapExpanded} />
            </div>
            <button onClick={() => setIsMapExpanded(!isMapExpanded)}>
                {isMapExpanded ? 'Show on map' : 'Close Map'}
            </button>
            <ConversationLog />
        </div>
    );
};



// The function to component for ships list and main display
const MainContent = () => (
    <div style={{ width: '80%', height: '100%', backgroundColor: '#000' }}>
        <Ships />
        <MainDisplay />
    </div>
);


const MainDisplay = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:8000/paragraph/1/');
            const result = await response.json();
            setData(result);
        };

        const intervalId = setInterval(() => {
            fetchData();
        }, 300); // fetch data every x miliseconds

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    // making a popup
    const [showWhoTalking, setShowWhoTalking] = useState(false)

    const openWhoTalking = ()=> {
        setShowWhoTalking(prev => !prev)
    }

    return (
        <div className="container">
            <div className="home_content">
                <h1>Speaking now</h1>
                <div className="signal">
                    <img src="../Assets/Property1=Variant2.png" alt="freq"></img>
                </div>
                <div className="transcript">{data ? data.paragraph : 'Loading...'}</div>
                {/* <button>Who's talking</button> */}
                <button onClick={openWhoTalking}>Who's talking</button>
                <WhoTalking showWhoTalking={showWhoTalking} setShowWhoTalking={setShowWhoTalking}/>
            </div>
            
        </div>
    );
};


// The list of ship item that are within the range
const ships = [
    { id: 1, name: 'Enterprise', captain: 'James T. Kirk' },
    { id: 2, name: 'Defiant', captain: 'Benjamin Sisko' },
    { id: 3, name: 'Voyager', captain: 'Kathryn Janeway' },
    { id: 4, name: 'Discovery', captain: 'Gabriel Lorca' },
    { id: 1, name: 'Enterprise', captain: 'James T. Kirk' },
    { id: 2, name: 'Defiant', captain: 'Benjamin Sisko' },
    { id: 3, name: 'Voyager', captain: 'Kathryn Janeway' },
    { id: 4, name: 'Discovery', captain: 'Gabriel Lorca' },
];
const Ships = () => (
    <div className="ships_content">
        {ships.map(ship => (
            <Ship key={ship.id} name={ship.name} captain={ship.captain} />
        ))}
    </div>
);

const Ship = ({ name, captain }) => (
    <div className='shipWrapper'>
        <div className="ship_img">
            <img src={`../Assets/ships/icon.png`} alt={name} />
            {/*<img src={`../Assets/ships/${name}.png`} alt={name} />
            <h2>{name}</h2>
            <p>Captain: {captain}</p> */}
        </div>
    </div>
);

export default Layout;