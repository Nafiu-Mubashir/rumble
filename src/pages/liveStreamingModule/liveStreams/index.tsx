
const LiveStreams = () => {
  const list = [
    'Go to titan.com/live or click the "Setup New Livestream" button above.',
    "Upload a placeholder video up to 120 seconds long, which will be looped before the stream starts.",
    "Once the placeholder is uploaded, we will provide you with a streamer  configuration that consists of a   Stream URL (RTMP) and a Stream Key.",
    "Enter the configuration in your streaming software.",
  ];
  return (
    <div className="space-y-4 p-3">
      <p>Steps to set up a Live Stream:</p>

      <ol className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
        {list.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ol>

      <p>
        <span className="font-bold">Note:</span> To stream with Rumble, you will
        require streaming software. Titan is compatible with all providers that
        use RTMP, including OBS, StreamYard, Restream, and many others.
      </p>

      <p>
        Please visit our help center for more information on setting up your
        streaming software to provide the best possible experience for your
        viewers.
      </p>
    </div>
  );
}

export default LiveStreams