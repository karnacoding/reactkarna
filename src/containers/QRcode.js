import React from 'react';
import QRCode from 'qrcode.react';
import logo from '../images/products/reactkarna-logo-small.png';

const QRCodeWithLogo = () => {
    const qrCodeValue = 'https://www.reactkarna.com';
    const logoUrl = logo;

    // const getQRCodeStyles = (data, cellSize, margin, rowIndex, colIndex) => {
    //     const isInLogoArea =
    //       rowIndex >= 4 && rowIndex <= 12 && colIndex >= 4 && colIndex <= 12;
    
    //     
    //     const styles = {
    //       backgroundColor: isInLogoArea ? '#ff0000' : '#000000',
    //       borderRadius: isInLogoArea ? '10%' : '0',
    //       margin: isInLogoArea ? '2px' : '0',
    //       filter: 'blur(3px)', 
    //     };
    
    //     return styles;
    //   };
  
    return (
      <div>
        <QRCode
          value={qrCodeValue}
          size={156}
          bgColor="#ffffff"
          fgColor="#000000"
          level="L"
          includeMargin={true}
          renderAs="svg"
          imageSettings={{
            src: logoUrl,
            height: 40,
            width: 40,
            excavate: true,
          }}
          style={{ width: '100%', filter:'blur(0.6px)'}}
        />
      </div>
    );
  };
  
  export default QRCodeWithLogo;