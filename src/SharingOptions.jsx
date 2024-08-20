import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './SharingOptions.css';
import Navbar from './Navbar';
import Footer from './Footer'

const SharingOptions = () => {
    const [url, setUrl] = useState('');
    const [qrCode, setQrCode] = useState('');

    const generateUrl = () => {
        const generatedUrl = `https://your-ngrok-url.ngrok.io/user-card?id=12345`;
        setQrCode(generatedUrl); 
    };

    return (
        <>
        <Navbar/>
        
        <div className="sharing-options-container">
            
            <h2>Share Your Card</h2>
            
            <button className="share-btn" onClick={generateUrl}>
                Share via URL & QR Code
            </button>

            {url && (
                <div className="url-container">
                    <p>Your URL: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
                </div>
            )}

            {qrCode && (
                <div className="qr-code-container">
                    <QRCodeCanvas value={qrCode} size={128} />
                    <p>Scan this QR code to view the business card on any device.</p>
                </div>
            )}
        </div>
        <Footer/>
        </>
    );
};

export default SharingOptions;
