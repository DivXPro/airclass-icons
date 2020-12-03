// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Chat3LineSvg from '@airclass/icons-svg/lib/asn/Chat3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Chat3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chat3LineSvg}></AntdIcon>;
};

Chat3Line.displayName = 'Chat3Line';
Chat3Line.inheritAttrs = false;
export default Chat3Line;