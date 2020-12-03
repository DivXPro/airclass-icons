// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PieChartFillSvg from '@airclass/icons-svg/lib/asn/PieChartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PieChartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PieChartFillSvg}></AntdIcon>;
};

PieChartFill.displayName = 'PieChartFill';
PieChartFill.inheritAttrs = false;
export default PieChartFill;