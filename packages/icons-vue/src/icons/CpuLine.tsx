// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CpuLineSvg from '@airclass/icons-svg/lib/asn/CpuLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CpuLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuLineSvg}></AntdIcon>;
};

CpuLine.displayName = 'CpuLine';
CpuLine.inheritAttrs = false;
export default CpuLine;