// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GobletLineSvg from '@airclass/icons-svg/lib/asn/GobletLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GobletLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GobletLineSvg}></AntdIcon>;
};

GobletLine.displayName = 'GobletLine';
GobletLine.inheritAttrs = false;
export default GobletLine;