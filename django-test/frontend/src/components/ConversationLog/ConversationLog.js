import "./ConversationLog.css";
import audioImage from "./audio.png";


const ConversationLog = () => (
    <div className="message-wrapper">
        <h2 className="conversation-header">Conversation Log</h2>
        <ul className="message-list">
        <li className="message received">
            <div className="message-content">
            <div className="message-header">
                <div className="message-sender">John Doe</div>
                <div className="message-time">11:30am, Feb 23, 2023</div>
            </div>
            <div className="message-text">Message 1</div>
            <div className="aud_img">
                <img className="audio-icon" src={audioImage} alt="Audio Icon" />
            </div>
            </div>
        </li>
        <li className="message replied">
            <div className="message-content">
            <div className="message-header">
                <div className="message-sender">Jane Smith</div>
                <div className="message-time">11:35am, Feb 23, 2023</div>
            </div>
            <div className="message-text">Message 2</div>
            <div className="aud_img">
                <img className="audio-icon" src={audioImage} alt="Audio Icon" />
            </div>
            </div>
        </li>
        <li className="message received">
            <div className="message-content">
            <div className="message-header">
                <div className="message-sender">John Doe</div>
                <div className="message-time">11:40am, Feb 23, 2023</div>
            </div>
            <div className="message-text">Message 3</div>
            <div className="aud_img">
                <img className="audio-icon" src={audioImage} alt="Audio Icon" />
            </div>
            </div>
        </li>
        <li className="message replied">
            <div className="message-content">
            <div className="message-header">
                <div className="message-sender">Jane Smith</div>
                <div className="message-time">11:45am, Feb 23, 2023</div>
            </div>
            <div className="message-text">Message 4</div>
            <div className="aud_img">
                <img className="audio-icon" src={audioImage} alt="Audio Icon" />
            </div>
            </div>
        </li>
        <li className="message replied">
            <div className="message-content">
            <div className="message-header">
                <div className="message-sender">Jane Smith</div>
                <div className="message-time">11:50am, Feb 23, 2023</div>
            </div>
            <div className="message-text">Message 5</div>
            <div className="aud_img">
                <img className="audio-icon" src={audioImage} alt="Audio Icon" />
            </div>
            </div>
        </li>
        </ul>
    </div>
);



export default ConversationLog;
