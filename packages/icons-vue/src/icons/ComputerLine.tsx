// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ComputerLineSvg from '@airclass/icons-svg/lib/asn/ComputerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ComputerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ComputerLineSvg}></AntdIcon>;
};

ComputerLine.displayName = 'ComputerLine';
ComputerLine.inheritAttrs = false;
export default ComputerLine;