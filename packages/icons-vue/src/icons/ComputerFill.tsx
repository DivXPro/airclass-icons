// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ComputerFillSvg from '@airclass/icons-svg/lib/asn/ComputerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ComputerFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ComputerFillSvg}></AntdIcon>;
};

ComputerFill.displayName = 'ComputerFill';
ComputerFill.inheritAttrs = false;
export default ComputerFill;