// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ThermometerFillSvg from '@airclass/icons-svg/lib/asn/ThermometerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThermometerFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ThermometerFillSvg}></AntdIcon>;
};

ThermometerFill.displayName = 'ThermometerFill';
ThermometerFill.inheritAttrs = false;
export default ThermometerFill;