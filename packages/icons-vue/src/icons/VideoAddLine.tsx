// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VideoAddLineSvg from '@airclass/icons-svg/lib/asn/VideoAddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoAddLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoAddLineSvg}></AntdIcon>;
};

VideoAddLine.displayName = 'VideoAddLine';
VideoAddLine.inheritAttrs = false;
export default VideoAddLine;