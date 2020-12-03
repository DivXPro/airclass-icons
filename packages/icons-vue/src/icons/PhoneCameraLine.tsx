// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PhoneCameraLineSvg from '@airclass/icons-svg/lib/asn/PhoneCameraLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneCameraLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PhoneCameraLineSvg}></AntdIcon>;
};

PhoneCameraLine.displayName = 'PhoneCameraLine';
PhoneCameraLine.inheritAttrs = false;
export default PhoneCameraLine;