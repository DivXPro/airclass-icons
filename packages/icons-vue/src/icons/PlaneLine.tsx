// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlaneLineSvg from '@airclass/icons-svg/lib/asn/PlaneLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlaneLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlaneLineSvg}></AntdIcon>;
};

PlaneLine.displayName = 'PlaneLine';
PlaneLine.inheritAttrs = false;
export default PlaneLine;