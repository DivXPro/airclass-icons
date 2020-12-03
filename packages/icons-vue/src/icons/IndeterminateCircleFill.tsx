// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import IndeterminateCircleFillSvg from '@airclass/icons-svg/lib/asn/IndeterminateCircleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IndeterminateCircleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IndeterminateCircleFillSvg}></AntdIcon>;
};

IndeterminateCircleFill.displayName = 'IndeterminateCircleFill';
IndeterminateCircleFill.inheritAttrs = false;
export default IndeterminateCircleFill;