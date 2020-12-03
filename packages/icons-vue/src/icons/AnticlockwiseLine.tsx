// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AnticlockwiseLineSvg from '@airclass/icons-svg/lib/asn/AnticlockwiseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AnticlockwiseLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AnticlockwiseLineSvg}></AntdIcon>;
};

AnticlockwiseLine.displayName = 'AnticlockwiseLine';
AnticlockwiseLine.inheritAttrs = false;
export default AnticlockwiseLine;