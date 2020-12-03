// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SendPlaneLineSvg from '@airclass/icons-svg/lib/asn/SendPlaneLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SendPlaneLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendPlaneLineSvg}></AntdIcon>;
};

SendPlaneLine.displayName = 'SendPlaneLine';
SendPlaneLine.inheritAttrs = false;
export default SendPlaneLine;