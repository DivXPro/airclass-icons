// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatNewFillSvg from '@airclass/icons-svg/lib/asn/ChatNewFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatNewFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatNewFillSvg}></AntdIcon>;
};

ChatNewFill.displayName = 'ChatNewFill';
ChatNewFill.inheritAttrs = false;
export default ChatNewFill;