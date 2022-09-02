import React from "react";

function Item() {

  const handleAddressChange = (passData) => {
    console.log(passData)
  }

  return (
    <div className="main">
     <Box m={1} pt={1} align="left" sx={{ fontFamily: 'Arial', textTransform: 'uppercase', fontWeight: 'bold', fontOpticalSizing: 'auto'  }}>
      <ul>
        <li>
          <a href={`${null}`}>
            {/* {title} */}
          </a>
        </li>
      </ul>
    </Box>
    </div>
  );
}

export default Item;