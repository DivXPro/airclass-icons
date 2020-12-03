// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HotelFillSvg from '@airclass/icons-svg/lib/asn/HotelFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HotelFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HotelFillSvg}></AntdIcon>;
};

HotelFill.displayName = 'HotelFill';
HotelFill.inheritAttrs = false;
export default HotelFill;