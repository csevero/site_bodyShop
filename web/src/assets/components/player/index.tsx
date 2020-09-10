import React from "react";

import ReactPlayer from "react-player";

interface PlayerProps {
  url: string;
}

const Player: React.FC<PlayerProps> = ({ url }) => {
  return <ReactPlayer url={url} width="180px" height="180px" />;
};

export default Player;
