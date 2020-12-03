// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FlowChartSvg from '@airclass/icons-svg/lib/asn/FlowChart';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlowChart = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FlowChartSvg} />;

FlowChart.displayName = 'FlowChart';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FlowChart);