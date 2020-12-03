// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VideoDownloadLineSvg from '@airclass/icons-svg/lib/asn/VideoDownloadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoDownloadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoDownloadLineSvg}></AntdIcon>;
};

VideoDownloadLine.displayName = 'VideoDownloadLine';
VideoDownloadLine.inheritAttrs = false;
export default VideoDownloadLine;