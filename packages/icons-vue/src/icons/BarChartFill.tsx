// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BarChartFillSvg from '@airclass/icons-svg/lib/asn/BarChartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarChartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarChartFillSvg}></AntdIcon>;
};

BarChartFill.displayName = 'BarChartFill';
BarChartFill.inheritAttrs = false;
export default BarChartFill;