// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PhoneFillSvg from '@airclass/icons-svg/lib/asn/PhoneFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PhoneFillSvg}></AntdIcon>;
};

PhoneFill.displayName = 'PhoneFill';
PhoneFill.inheritAttrs = false;
export default PhoneFill;