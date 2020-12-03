// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpeedMiniLineSvg from '@airclass/icons-svg/lib/asn/SpeedMiniLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpeedMiniLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeedMiniLineSvg}></AntdIcon>;
};

SpeedMiniLine.displayName = 'SpeedMiniLine';
SpeedMiniLine.inheritAttrs = false;
export default SpeedMiniLine;