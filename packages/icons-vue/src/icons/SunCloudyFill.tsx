// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SunCloudyFillSvg from '@airclass/icons-svg/lib/asn/SunCloudyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SunCloudyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunCloudyFillSvg}></AntdIcon>;
};

SunCloudyFill.displayName = 'SunCloudyFill';
SunCloudyFill.inheritAttrs = false;
export default SunCloudyFill;