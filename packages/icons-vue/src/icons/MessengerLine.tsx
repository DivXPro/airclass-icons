// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MessengerLineSvg from '@airclass/icons-svg/lib/asn/MessengerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessengerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessengerLineSvg}></AntdIcon>;
};

MessengerLine.displayName = 'MessengerLine';
MessengerLine.inheritAttrs = false;
export default MessengerLine;