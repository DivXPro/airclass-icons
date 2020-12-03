// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SendPlaneFillSvg from '@airclass/icons-svg/lib/asn/SendPlaneFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SendPlaneFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendPlaneFillSvg}></AntdIcon>;
};

SendPlaneFill.displayName = 'SendPlaneFill';
SendPlaneFill.inheritAttrs = false;
export default SendPlaneFill;