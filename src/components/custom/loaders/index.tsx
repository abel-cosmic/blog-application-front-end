import { Waveform } from "@uiball/loaders";

const LoadingElement = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Waveform size={100} speed={2} color="#2e2e2e" />
    </div>
  );
};

export default LoadingElement;
