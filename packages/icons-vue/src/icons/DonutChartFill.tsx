// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DonutChartFillSvg from '@airclass/icons-svg/lib/asn/DonutChartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DonutChartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DonutChartFillSvg}></AntdIcon>;
};

DonutChartFill.displayName = 'DonutChartFill';
DonutChartFill.inheritAttrs = false;
export default DonutChartFill;