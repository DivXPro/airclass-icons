// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VideoLineSvg from '@airclass/icons-svg/lib/asn/VideoLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoLineSvg}></AntdIcon>;
};

VideoLine.displayName = 'VideoLine';
VideoLine.inheritAttrs = false;
export default VideoLine;