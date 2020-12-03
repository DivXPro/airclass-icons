// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GhostSmileLineSvg from '@airclass/icons-svg/lib/asn/GhostSmileLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GhostSmileLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GhostSmileLineSvg}></AntdIcon>;
};

GhostSmileLine.displayName = 'GhostSmileLine';
GhostSmileLine.inheritAttrs = false;
export default GhostSmileLine;