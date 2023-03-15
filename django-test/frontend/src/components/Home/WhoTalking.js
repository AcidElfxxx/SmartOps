import React from 'react'
import {MdClose} from 'react-icons/md'
import styled from 'styled-components'
import './MainDisplay.css'


//closing the pop up
const ClosePopUp = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

// The display for the information
const items = [
    { id: 1, title: 'Name', name: 'BOB THE BOAT' },
    { id: 2, title: 'IMO', name: '2718281' },
    { id: 3, title: 'MMSI', name: '314159265' },
    { id: 4, title: 'Call sign', name: 'ABCD' },
];

const Item = ({ title, name }) => (
    <li className="item">
        <h2>{title}</h2>
        <p>{name}</p>
    </li>
);

const WhoTalking = ({showWhoTalking, setShowWhoTalking}) => {
    return (
    <>
        {showWhoTalking ?
            <div className="feature fea-text" >
                <ul className="items-list">
                    {items.map(item => (
                        <Item key={item.id} title={item.title} name={item.name} />
                    ))}
                </ul>
                <button onClick={()=> setShowWhoTalking(prev => !prev)}>Who's Speaking</button>
                {/*<ClosePopUp aria-label='Close popup' onClick={()=> setShowWhoTalking(prev => !prev)}></ClosePopUp>*/}
            </div>
        : null}
    </>    
    )
}

export default WhoTalking