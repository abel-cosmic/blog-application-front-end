import { Waveform } from "@uiball/loaders";

const LoadingElement = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Waveform size={60} speed={4} color="#2e2e2e" />
    </div>
  );
};

export default LoadingElement;
