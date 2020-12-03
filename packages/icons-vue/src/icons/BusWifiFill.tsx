// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BusWifiFillSvg from '@airclass/icons-svg/lib/asn/BusWifiFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BusWifiFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BusWifiFillSvg}></AntdIcon>;
};

BusWifiFill.displayName = 'BusWifiFill';
BusWifiFill.inheritAttrs = false;
export default BusWifiFill;