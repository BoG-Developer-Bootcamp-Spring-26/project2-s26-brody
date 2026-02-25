import React from "react"
import type { Color } from "./Color";

interface TrainListProps extends React.ComponentProps<"div"> {
    color: Color;
    station: string;
}

export default function TrainList({
    color,
    station,
    ...props
} : TrainListProps) {

    return (
        <div>
            <p>
                Looking at train line {color},
                for station {station}
            </p>
        </div>
    );
}