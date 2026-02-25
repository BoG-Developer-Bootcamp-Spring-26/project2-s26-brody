import React, { useEffect } from "react"
import type { Color } from "./Color";

interface TrainListProps extends React.ComponentProps<"div"> {
    color: Color;
}

export default function NavBar({
    color,
    ...props
} : TrainListProps) {

    return (
        <div >

        </div>
    );
}