// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GhostSmileFillSvg from '@airclass/icons-svg/lib/asn/GhostSmileFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GhostSmileFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GhostSmileFillSvg}></AntdIcon>;
};

GhostSmileFill.displayName = 'GhostSmileFill';
GhostSmileFill.inheritAttrs = false;
export default GhostSmileFill;