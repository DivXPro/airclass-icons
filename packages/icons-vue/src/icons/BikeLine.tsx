// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BikeLineSvg from '@airclass/icons-svg/lib/asn/BikeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BikeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BikeLineSvg}></AntdIcon>;
};

BikeLine.displayName = 'BikeLine';
BikeLine.inheritAttrs = false;
export default BikeLine;