// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PhoneFindFillSvg from '@airclass/icons-svg/lib/asn/PhoneFindFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneFindFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PhoneFindFillSvg}></AntdIcon>;
};

PhoneFindFill.displayName = 'PhoneFindFill';
PhoneFindFill.inheritAttrs = false;
export default PhoneFindFill;