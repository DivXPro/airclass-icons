// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VideoUploadFillSvg from '@airclass/icons-svg/lib/asn/VideoUploadFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoUploadFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoUploadFillSvg}></AntdIcon>;
};

VideoUploadFill.displayName = 'VideoUploadFill';
VideoUploadFill.inheritAttrs = false;
export default VideoUploadFill;