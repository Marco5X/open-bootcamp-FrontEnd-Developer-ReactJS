import React, {useState} from "react";

export const Condicional = () => {
    
    const [color, setColor] = useState("#000000");    
    const [manageInterval, setManageInterval] = useState(0);
    
    let rgbRandom = () => Math.round(Math.random() * 256);
   
    const getHex = (red, green, blue) => {
        return (
          "#" + [red, green, blue].map((color) => {
              const hex = color.toString(16);
              return hex.lenght === 1 ? "0" + hex : hex;
            }).join("")
        );
      };
    
      const generateHex = () => {
        const rgb = {
          r: rgbRandom(),
          g: rgbRandom(),
          b: rgbRandom(),
        };
        return setColor(getHex(rgb.r, rgb.g, rgb.b));
      };
    
    const onChangeColor = () => {
        return setManageInterval(setInterval(generateHex, 1000));
      };
    
      const onStopChangeColor = () => {
        return clearInterval(manageInterval);
      };
    
      const onClickChangeColor = () => {
        return clearInterval(manageInterval);
      };

    return (
        <div>
            <div
                onMouseOver={onChangeColor}
                onMouseLeave={onStopChangeColor}
                onDoubleClick={onClickChangeColor}
                style={{ width: "255px", height: "255px", backgroundColor: color,}}>
            </div>
        </div>
    )
}