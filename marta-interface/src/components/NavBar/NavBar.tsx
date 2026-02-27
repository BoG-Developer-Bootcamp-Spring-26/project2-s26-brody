import './NavBar.css';

interface NavBarProps {
    changeColor: (line_color: string) => void;
}

export default function NavBar({
    changeColor
    }: NavBarProps) {
    const line_colors = ["Gold", "Red", "Green", "Blue"];

    const colorMap: Record<string, string> = {
        Gold: '#EBCB18',
        Red: '#C71C1C',
        Green: '#22B54C',
        Blue: '#1C6CA9'
    };

    return (
        <div id="nav-container">
            {
                line_colors.map((line_color) => {
                    return <button 
                        className='nav-color-button'
                        style={{backgroundColor: colorMap[line_color]}}
                        onClick={() => changeColor(line_color)}>
                            {line_color}
                        </button>
                })
            }
        </div>
    );
}