// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VideoFillSvg from '@airclass/icons-svg/lib/asn/VideoFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoFillSvg}></AntdIcon>;
};

VideoFill.displayName = 'VideoFill';
VideoFill.inheritAttrs = false;
export default VideoFill;