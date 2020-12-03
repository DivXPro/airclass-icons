// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GobletFillSvg from '@airclass/icons-svg/lib/asn/GobletFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GobletFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GobletFillSvg}></AntdIcon>;
};

GobletFill.displayName = 'GobletFill';
GobletFill.inheritAttrs = false;
export default GobletFill;