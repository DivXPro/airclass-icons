// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BubbleChartFillSvg from '@airclass/icons-svg/lib/asn/BubbleChartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BubbleChartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BubbleChartFillSvg}></AntdIcon>;
};

BubbleChartFill.displayName = 'BubbleChartFill';
BubbleChartFill.inheritAttrs = false;
export default BubbleChartFill;