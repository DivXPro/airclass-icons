// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HotelLineSvg from '@airclass/icons-svg/lib/asn/HotelLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HotelLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HotelLineSvg}></AntdIcon>;
};

HotelLine.displayName = 'HotelLine';
HotelLine.inheritAttrs = false;
export default HotelLine;