// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VideoChatLineSvg from '@airclass/icons-svg/lib/asn/VideoChatLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoChatLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoChatLineSvg}></AntdIcon>;
};

VideoChatLine.displayName = 'VideoChatLine';
VideoChatLine.inheritAttrs = false;
export default VideoChatLine;