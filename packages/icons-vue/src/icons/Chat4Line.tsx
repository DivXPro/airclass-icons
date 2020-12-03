// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Chat4LineSvg from '@airclass/icons-svg/lib/asn/Chat4Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Chat4Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chat4LineSvg}></AntdIcon>;
};

Chat4Line.displayName = 'Chat4Line';
Chat4Line.inheritAttrs = false;
export default Chat4Line;