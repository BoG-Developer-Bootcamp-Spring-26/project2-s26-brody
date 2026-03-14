import './Train.css';

interface TrainProps {
    lineColor: string;
}

export default function Train({
    lineColor
    }: TrainProps) {

    return (
        <div id="nav-container">
            <h1>{lineColor}</h1>
        </div>
    );
}