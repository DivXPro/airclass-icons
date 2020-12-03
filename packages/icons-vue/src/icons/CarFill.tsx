// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CarFillSvg from '@airclass/icons-svg/lib/asn/CarFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarFillSvg}></AntdIcon>;
};

CarFill.displayName = 'CarFill';
CarFill.inheritAttrs = false;
export default CarFill;