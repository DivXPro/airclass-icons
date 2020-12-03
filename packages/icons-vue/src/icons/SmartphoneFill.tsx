// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SmartphoneFillSvg from '@airclass/icons-svg/lib/asn/SmartphoneFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SmartphoneFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmartphoneFillSvg}></AntdIcon>;
};

SmartphoneFill.displayName = 'SmartphoneFill';
SmartphoneFill.inheritAttrs = false;
export default SmartphoneFill;