// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatPrivateFillSvg from '@airclass/icons-svg/lib/asn/ChatPrivateFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatPrivateFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatPrivateFillSvg}></AntdIcon>;
};

ChatPrivateFill.displayName = 'ChatPrivateFill';
ChatPrivateFill.inheritAttrs = false;
export default ChatPrivateFill;