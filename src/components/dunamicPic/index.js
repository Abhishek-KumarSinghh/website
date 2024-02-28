// import React, { useState } from "react";
// import "./styles.css";

// const ImageClipPath = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleHover = () => {
//     setIsHovered(!isHovered);
//   };

//   return (
//     <div
//       className="image-container"
//       onMouseEnter={handleHover}
//       onMouseLeave={handleHover}
//     >
//       <img
//         src={
//           "https://html.themeholy.com/webteck/demo/assets/img/team/team_2_1.jpg"
//         }
//         alt="Image"
//         className={isHovered ? "clip-path-image hovered" : "clip-path-image"}
//       />
//     </div>
//   );
// };

// export default ImageClipPath;

import React, { useState } from "react";
import "./styles.css"; // Assuming you have a CSS file with the styles

const ImageClipPath = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      //   className={isHovered ? 'image-container hover' : 'image-container'}
      className="image-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {/* <div className="clip-path-transition"> */}
      <div className={isHovered ? 'clip-path-transition hover' : 'clip-path-transition'}>
        <img
          src={
            "https://html.themeholy.com/webteck/demo/assets/img/team/team_2_1.jpg"
          }
          alt="Your Image"
          className="clip-path-image"
        />
      </div>
    </div>
  );
};

export default ImageClipPath;
