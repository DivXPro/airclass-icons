// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlaneFillSvg from '@airclass/icons-svg/lib/asn/PlaneFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlaneFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlaneFillSvg}></AntdIcon>;
};

PlaneFill.displayName = 'PlaneFill';
PlaneFill.inheritAttrs = false;
export default PlaneFill;