// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VideoChatFillSvg from '@airclass/icons-svg/lib/asn/VideoChatFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoChatFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoChatFillSvg}></AntdIcon>;
};

VideoChatFill.displayName = 'VideoChatFill';
VideoChatFill.inheritAttrs = false;
export default VideoChatFill;