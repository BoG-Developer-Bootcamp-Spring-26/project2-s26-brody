import './NavBar.css';
import { colorMap } from '../../colorMap';

interface NavBarProps {
    changeColor: (line_color: string) => void;
}

export default function NavBar({
    changeColor
    }: NavBarProps) {
    const line_colors = ["Gold", "Red", "Green", "Blue"];

    return (
        <div id="nav-container">
            {
                line_colors.map((line_color) => {
                    return <button 
                        className='nav-color-button'
                        style={{
                            backgroundColor: colorMap[line_color],
                            fontFamily: 'ui-sans-serif',
                        }}
                        onClick={() => changeColor(line_color)}>
                            {line_color}
                        </button>
                })
            }
        </div>
    );
}