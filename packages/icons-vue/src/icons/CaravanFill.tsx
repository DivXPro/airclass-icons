// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CaravanFillSvg from '@airclass/icons-svg/lib/asn/CaravanFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaravanFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaravanFillSvg}></AntdIcon>;
};

CaravanFill.displayName = 'CaravanFill';
CaravanFill.inheritAttrs = false;
export default CaravanFill;