// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatSettingsLineSvg from '@airclass/icons-svg/lib/asn/ChatSettingsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatSettingsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatSettingsLineSvg}></AntdIcon>;
};

ChatSettingsLine.displayName = 'ChatSettingsLine';
ChatSettingsLine.inheritAttrs = false;
export default ChatSettingsLine;