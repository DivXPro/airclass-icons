// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TerminalLineSvg from '@airclass/icons-svg/lib/asn/TerminalLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TerminalLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TerminalLineSvg}></AntdIcon>;
};

TerminalLine.displayName = 'TerminalLine';
TerminalLine.inheritAttrs = false;
export default TerminalLine;