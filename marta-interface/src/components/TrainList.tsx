
interface TrainListProps {
    lineColor: string;
}

export default function TrainList({
    lineColor,
} : TrainListProps) {

    return (
        <div>
            <p>
                Looking at train line {lineColor}
            </p>
        </div>
    );
}