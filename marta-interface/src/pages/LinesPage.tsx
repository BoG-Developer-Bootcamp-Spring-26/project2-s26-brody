import TrainList from "../components/TrainList";

interface LinesPageProps {
    line_color: string;
}

export default function LinesPage({
    line_color
}: LinesPageProps) {
  // initialize some currColor state
  return (
    <div>
      <TrainList color={line_color} />
    </div>
  );
}