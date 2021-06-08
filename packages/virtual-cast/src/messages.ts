const senderId = "7f8b100d-a1fe-e60b-5a35-6feaa22976df.2:152792770056491611";
const launchingSenderId =
  "7f8b100d-a1fe-e60b-5a35-6feaa22976df.2:sender-l4koe754cbxf";
const sessionId = "46fd154e-f03d-4d58-986d-4998c43639a7";

const senderMeta = {
  namespace: "urn:x-cast:com.google.cast.media",
  senderId
};

const autoIncrement = (start = 0) => {
  let current = start;
  return () => current++;
};

const getRequestId = autoIncrement(889570261);

const parseMessage = message => {
  const { data, ...rest } = JSON.parse(message);
  return { ...rest, data: JSON.parse(data) };
};

const messageData = ({
  mediaSessionId = 1
}: { mediaSessionId?: number } = {}) => ({
  requestId: getRequestId(),
  ...(mediaSessionId && { mediaSessionId })
});

const readyMessages = [
  {
    data: {
      type: "ready",
      sessionId,
      launchingSenderId,
      applicationId: "",
      applicationName: "CAFV1",
      closedCaption: {},
      deviceCapabilities: {
        bluetooth_supported: true,
        display_supported: true,
        focus_state_supported: true,
        hi_res_audio_supported: false
      },
      messagesVersion: "1.0",
      version: "1.30.113131"
    }
  },
  {
    data: { type: "volumechanged", level: 1, muted: false }
  },
  {
    data: { type: "visibilitychanged" }
  },
  {
    data: { type: "standbychanged" }
  },
  {
    data: { type: "hdroutputtypechanged", hdrType: "sdr" }
  },
  {
    namespace: "urn:x-cast:com.google.cast.cac",
    data: { type: "FOCUS_STATE", state: "IN_FOCUS" }
  },
  {
    data: {
      type: "senderconnected",
      largeMessageSupported: false,
      senderId,
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36"
    }
  }
].map(message => ({
  namespace: "urn:x-cast:com.google.cast.system",
  senderId: "SystemSender",
  ...message
}));

const loadMessage = ({
  contentId,
  contentUrl,
  metadata,
  customData,
  autoplay = true
}) => ({
  ...senderMeta,
  data: {
    type: "LOAD",
    sessionId,
    ...messageData({ mediaSessionId: null }),
    media: { contentId, contentUrl, metadata, customData, autoplay }
  }
});

const playMessage = () => ({
  ...senderMeta,
  data: { type: "PLAY", ...messageData() }
});

const pauseMessage = () => ({
  ...senderMeta,
  data: { type: "PAUSE", ...messageData() }
});

const seekMessage = currentTime => ({
  ...senderMeta,
  data: { type: "SEEK", currentTime, ...messageData() }
});

export {
  parseMessage,
  loadMessage,
  playMessage,
  pauseMessage,
  seekMessage,
  readyMessages
};
