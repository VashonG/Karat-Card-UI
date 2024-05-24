import React, { useState } from 'react';
import './CreditCard.css'; // assuming you have a CSS file for styles
import { Button } from '@cred/neopop-web/lib/components';

const CreditCard: React.FC = () => {
  const [isOpen, setOpen] = useState(false); // State to manage the visibility of BottomSheet

  const handleClose = () => {
    setOpen(false); // Function to close the BottomSheet
  };

  return (
    <div className="credit-card">
      <div className="credit-card-content">
        <header className="credit-card-header">
          <div className="credit-card-title">
            <h2 className="credit-card-name">Paygeon Flex</h2>
            <div className="credit-card-number">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/797c696809d4608d2d0c9a5cdc663923c2eaa6ce312e81e14511963c44492937?apiKey=aa19eef6d1f1473ba394866de3aadd86&"
                alt="Chip icon"
                className="credit-card-chip"
              />
              <span className="credit-card-number-text">1234 56XX XXXX 2022</span>
            </div>
          </div>
          <img
            src="https://images.ctfassets.net/h83dujey17us/4yaRlTL19o9VSqVeTa3mSV/215ef45913d5fa7b8f50269441cf10bd/corpay.svg"
            alt="Credit-card logo"
            className="credit-card-logo"
          />
        </header>
        <footer className="credit-card-footer">
          <div className="credit-card-strip">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/39b5825135b1f18b365eedc87bb0add772ce323768f9010c9608bc2741507e0e?apiKey=aa19eef6d1f1473ba394866de3aadd86&"
              alt=""
              className="credit-card-strip-start"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbb47e78e38719f1293a167612fbe1e61a76bdfdbdee4ca2ba33cf37d76ad9d7?apiKey=aa19eef6d1f1473ba394866de3aadd86&"
              alt=""
              className="credit-card-strip-end"
            />
          </div>
          <div className="credit-card-status-container">
            <Button
              className="credit-card-status"
              variant="primary"
              kind="elevated"
              size="big"
              colorMode="light"
              onClick={() => setOpen(true)} // Set isOpen to true when Button is clicked
            >
              <div className="credit-card-status-action">
                <span className="credit-card-status-text">Pay more</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecc0b05a8f663d59e79f625e990bef18268be3db9cf01bde057680b4fec7e0ee?apiKey=aa19eef6d1f1473ba394866de3aadd86&"
                  alt="Right arrow icon"
                  className="credit-card-status-icon"
                />
              </div>
            </Button>
            <div className="credit-card-status-label">FULLY PAID</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CreditCard;
