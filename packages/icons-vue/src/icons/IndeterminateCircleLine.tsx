// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import IndeterminateCircleLineSvg from '@airclass/icons-svg/lib/asn/IndeterminateCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IndeterminateCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IndeterminateCircleLineSvg}></AntdIcon>;
};

IndeterminateCircleLine.displayName = 'IndeterminateCircleLine';
IndeterminateCircleLine.inheritAttrs = false;
export default IndeterminateCircleLine;