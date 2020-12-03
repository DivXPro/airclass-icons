// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HotelBedFillSvg from '@airclass/icons-svg/lib/asn/HotelBedFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HotelBedFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HotelBedFillSvg}></AntdIcon>;
};

HotelBedFill.displayName = 'HotelBedFill';
HotelBedFill.inheritAttrs = false;
export default HotelBedFill;