// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LandscapeFillSvg from '@airclass/icons-svg/lib/asn/LandscapeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LandscapeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LandscapeFillSvg}></AntdIcon>;
};

LandscapeFill.displayName = 'LandscapeFill';
LandscapeFill.inheritAttrs = false;
export default LandscapeFill;