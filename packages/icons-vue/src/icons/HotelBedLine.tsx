// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HotelBedLineSvg from '@airclass/icons-svg/lib/asn/HotelBedLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HotelBedLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HotelBedLineSvg}></AntdIcon>;
};

HotelBedLine.displayName = 'HotelBedLine';
HotelBedLine.inheritAttrs = false;
export default HotelBedLine;