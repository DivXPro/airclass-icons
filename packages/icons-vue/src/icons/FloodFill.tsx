// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FloodFillSvg from '@airclass/icons-svg/lib/asn/FloodFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FloodFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FloodFillSvg}></AntdIcon>;
};

FloodFill.displayName = 'FloodFill';
FloodFill.inheritAttrs = false;
export default FloodFill;