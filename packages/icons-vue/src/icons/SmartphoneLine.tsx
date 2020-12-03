// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SmartphoneLineSvg from '@airclass/icons-svg/lib/asn/SmartphoneLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SmartphoneLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmartphoneLineSvg}></AntdIcon>;
};

SmartphoneLine.displayName = 'SmartphoneLine';
SmartphoneLine.inheritAttrs = false;
export default SmartphoneLine;