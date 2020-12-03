// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PhoneCameraFillSvg from '@airclass/icons-svg/lib/asn/PhoneCameraFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneCameraFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PhoneCameraFillSvg}></AntdIcon>;
};

PhoneCameraFill.displayName = 'PhoneCameraFill';
PhoneCameraFill.inheritAttrs = false;
export default PhoneCameraFill;