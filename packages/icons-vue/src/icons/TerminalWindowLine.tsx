// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TerminalWindowLineSvg from '@airclass/icons-svg/lib/asn/TerminalWindowLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TerminalWindowLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TerminalWindowLineSvg}></AntdIcon>;
};

TerminalWindowLine.displayName = 'TerminalWindowLine';
TerminalWindowLine.inheritAttrs = false;
export default TerminalWindowLine;