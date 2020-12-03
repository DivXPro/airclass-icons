// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CpuFillSvg from '@airclass/icons-svg/lib/asn/CpuFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CpuFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuFillSvg}></AntdIcon>;
};

CpuFill.displayName = 'CpuFill';
CpuFill.inheritAttrs = false;
export default CpuFill;