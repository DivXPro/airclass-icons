// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PinDistanceLineSvg from '@airclass/icons-svg/lib/asn/PinDistanceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PinDistanceLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PinDistanceLineSvg}></AntdIcon>;
};

PinDistanceLine.displayName = 'PinDistanceLine';
PinDistanceLine.inheritAttrs = false;
export default PinDistanceLine;