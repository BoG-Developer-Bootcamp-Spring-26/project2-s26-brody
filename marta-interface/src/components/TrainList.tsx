import React from "react"

interface TrainListProps extends React.ComponentProps<"div"> {
    color: string;
}

export default function TrainList({
    color,
    ...props
} : TrainListProps) {

    return (
        <div>
            <p>
                Looking at train line {color}
            </p>
        </div>
    );
}