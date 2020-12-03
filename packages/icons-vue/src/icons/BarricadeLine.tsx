// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BarricadeLineSvg from '@airclass/icons-svg/lib/asn/BarricadeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarricadeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarricadeLineSvg}></AntdIcon>;
};

BarricadeLine.displayName = 'BarricadeLine';
BarricadeLine.inheritAttrs = false;
export default BarricadeLine;