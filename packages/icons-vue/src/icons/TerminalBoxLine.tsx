// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TerminalBoxLineSvg from '@airclass/icons-svg/lib/asn/TerminalBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TerminalBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TerminalBoxLineSvg}></AntdIcon>;
};

TerminalBoxLine.displayName = 'TerminalBoxLine';
TerminalBoxLine.inheritAttrs = false;
export default TerminalBoxLine;