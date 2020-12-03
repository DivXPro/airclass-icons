// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NavigationFillSvg from '@airclass/icons-svg/lib/asn/NavigationFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NavigationFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NavigationFillSvg}></AntdIcon>;
};

NavigationFill.displayName = 'NavigationFill';
NavigationFill.inheritAttrs = false;
export default NavigationFill;