
interface TrainListProps {
    color: string;
}

export default function TrainList({
    color,
} : TrainListProps) {

    return (
        <div>
            <p>
                Looking at train line {color}
            </p>
        </div>
    );
}