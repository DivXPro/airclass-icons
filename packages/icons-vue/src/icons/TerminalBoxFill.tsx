// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TerminalBoxFillSvg from '@airclass/icons-svg/lib/asn/TerminalBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TerminalBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TerminalBoxFillSvg}></AntdIcon>;
};

TerminalBoxFill.displayName = 'TerminalBoxFill';
TerminalBoxFill.inheritAttrs = false;
export default TerminalBoxFill;