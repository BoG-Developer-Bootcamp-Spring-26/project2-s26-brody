import './NavBar.css';
import { colorMap } from '../../colorMap';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const line_colors = ["Gold", "Red", "Green", "Blue"];
    const navigate = useNavigate();

    return (
        <div id="nav-container">
            {
                line_colors.map((line_color) => {
                    return (
                        <button 
                            key={line_color} // React needs this for lists!
                            className='nav-color-button'
                            style={{
                                backgroundColor: colorMap[line_color],
                                fontFamily: 'ui-sans-serif',
                            }}
                            onClick={() => navigate(`/lines/${line_color}`)}>
                                {line_color}
                        </button>
                    )
                })
            }
        </div>
    );
}