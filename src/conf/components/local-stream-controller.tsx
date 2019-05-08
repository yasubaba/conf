import * as React from "react";
import { FunctionComponent } from "react";
import { css } from "@emotion/core";
import { globalColors } from "../../shared/global-style";
import { IconButton } from "./icon";

interface Props {
  displayName: string;
  isVideoDisabled: boolean;
  isVideoMuted: boolean;
  isAudioMuted: boolean;
  onClickToggleMuted: (kind: MediaStreamTrack["kind"]) => void;
  onClickOpenSettings: () => void;
}
const LocalStreamController: FunctionComponent<Props> = ({
  displayName,
  isVideoDisabled,
  isVideoMuted,
  isAudioMuted,
  onClickToggleMuted,
  onClickOpenSettings
}: Props) => {
  const videoIcon = isVideoDisabled
    ? "videocam_off"
    : isVideoMuted
    ? "videocam_off"
    : "videocam";
  const audioIcon = isAudioMuted ? "mic_off" : "mic";

  return (
    <div css={wrapperStyle}>
      <div>{displayName}</div>
      <div css={buttonStyle}>
        {isVideoDisabled ? null : (
          <IconButton
            name={videoIcon}
            title={isVideoMuted ? "Unmute" : "Mute"}
            onClick={() => onClickToggleMuted("video")}
          />
        )}
        <IconButton
          name={audioIcon}
          title={isAudioMuted ? "Unmute" : "Mute"}
          onClick={() => onClickToggleMuted("audio")}
        />
        <IconButton name="settings" onClick={() => onClickOpenSettings()} />
        <IconButton name="info" onClick={() => alert("TODO")} />
      </div>
    </div>
  );
};

export default LocalStreamController;

const wrapperStyle = css({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  padding: 4,
  color: globalColors.white,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  fontSize: ".8rem"
});

const buttonStyle = css({
  display: "inline-flex",
  textAlign: "right"
});