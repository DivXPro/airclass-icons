// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BikeFillSvg from '@airclass/icons-svg/lib/asn/BikeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BikeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BikeFillSvg}></AntdIcon>;
};

BikeFill.displayName = 'BikeFill';
BikeFill.inheritAttrs = false;
export default BikeFill;