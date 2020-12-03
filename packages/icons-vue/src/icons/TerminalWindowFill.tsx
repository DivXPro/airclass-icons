// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TerminalWindowFillSvg from '@airclass/icons-svg/lib/asn/TerminalWindowFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TerminalWindowFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TerminalWindowFillSvg}></AntdIcon>;
};

TerminalWindowFill.displayName = 'TerminalWindowFill';
TerminalWindowFill.inheritAttrs = false;
export default TerminalWindowFill;