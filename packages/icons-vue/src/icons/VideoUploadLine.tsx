// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VideoUploadLineSvg from '@airclass/icons-svg/lib/asn/VideoUploadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoUploadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoUploadLineSvg}></AntdIcon>;
};

VideoUploadLine.displayName = 'VideoUploadLine';
VideoUploadLine.inheritAttrs = false;
export default VideoUploadLine;