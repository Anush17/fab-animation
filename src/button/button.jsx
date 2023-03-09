import {useState} from "react";
import "./button.css";

const items = [
    {
        text: 'Another one',
        icon: 'icon',
    },
    {
        text: 'Another',
        icon: 'icon',
    },
    {
        text: 'One',
        icon: 'icon',
    },
    {
        text: 'Another one',
        icon: 'icon',
    }
];
const Button = () => {
    const [isShow, setIsShow] = useState(false);
    const toggleMenu = () => setIsShow(!isShow);

    return (
        <>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`item item-${index + 1} ${isShow ? 'show' : 'hide'}`}
                >
                    <label>
                        {item.text}
                    </label>
                    <div className="icon">{item.icon}</div>
                </div>
            ))}
            <button className="menu" onClick={toggleMenu}/>
        </>
    );
}

export default Button;
