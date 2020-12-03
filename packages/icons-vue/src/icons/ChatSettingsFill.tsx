// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatSettingsFillSvg from '@airclass/icons-svg/lib/asn/ChatSettingsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatSettingsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatSettingsFillSvg}></AntdIcon>;
};

ChatSettingsFill.displayName = 'ChatSettingsFill';
ChatSettingsFill.inheritAttrs = false;
export default ChatSettingsFill;