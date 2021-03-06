// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GhostLineSvg from '@airclass/icons-svg/lib/asn/GhostLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GhostLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GhostLineSvg}></AntdIcon>;
};

GhostLine.displayName = 'GhostLine';
GhostLine.inheritAttrs = false;
export default GhostLine;