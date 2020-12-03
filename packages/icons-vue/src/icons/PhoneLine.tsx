// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PhoneLineSvg from '@airclass/icons-svg/lib/asn/PhoneLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PhoneLineSvg}></AntdIcon>;
};

PhoneLine.displayName = 'PhoneLine';
PhoneLine.inheritAttrs = false;
export default PhoneLine;