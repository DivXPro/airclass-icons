// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Battery2ChargeLineSvg from '@airclass/icons-svg/lib/asn/Battery2ChargeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Battery2ChargeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Battery2ChargeLineSvg}></AntdIcon>;
};

Battery2ChargeLine.displayName = 'Battery2ChargeLine';
Battery2ChargeLine.inheritAttrs = false;
export default Battery2ChargeLine;