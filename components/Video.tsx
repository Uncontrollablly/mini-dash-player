const Video = () => {
  return (
    <video
      className="w-full max-w-[800px] rounded-lg shadow-lg mb-8"
      controls
      autoPlay
      muted
      loop
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
