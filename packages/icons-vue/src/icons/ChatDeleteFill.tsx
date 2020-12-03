// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatDeleteFillSvg from '@airclass/icons-svg/lib/asn/ChatDeleteFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatDeleteFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatDeleteFillSvg}></AntdIcon>;
};

ChatDeleteFill.displayName = 'ChatDeleteFill';
ChatDeleteFill.inheritAttrs = false;
export default ChatDeleteFill;