// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TerminalFillSvg from '@airclass/icons-svg/lib/asn/TerminalFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TerminalFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TerminalFillSvg}></AntdIcon>;
};

TerminalFill.displayName = 'TerminalFill';
TerminalFill.inheritAttrs = false;
export default TerminalFill;