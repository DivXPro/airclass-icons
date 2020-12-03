// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PhoneLockFillSvg from '@airclass/icons-svg/lib/asn/PhoneLockFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneLockFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PhoneLockFillSvg}></AntdIcon>;
};

PhoneLockFill.displayName = 'PhoneLockFill';
PhoneLockFill.inheritAttrs = false;
export default PhoneLockFill;