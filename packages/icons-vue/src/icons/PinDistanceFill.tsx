// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PinDistanceFillSvg from '@airclass/icons-svg/lib/asn/PinDistanceFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PinDistanceFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PinDistanceFillSvg}></AntdIcon>;
};

PinDistanceFill.displayName = 'PinDistanceFill';
PinDistanceFill.inheritAttrs = false;
export default PinDistanceFill;