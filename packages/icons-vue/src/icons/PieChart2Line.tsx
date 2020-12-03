// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PieChart2LineSvg from '@airclass/icons-svg/lib/asn/PieChart2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PieChart2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PieChart2LineSvg}></AntdIcon>;
};

PieChart2Line.displayName = 'PieChart2Line';
PieChart2Line.inheritAttrs = false;
export default PieChart2Line;