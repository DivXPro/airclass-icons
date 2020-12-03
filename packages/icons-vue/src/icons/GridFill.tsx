// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GridFillSvg from '@airclass/icons-svg/lib/asn/GridFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GridFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridFillSvg}></AntdIcon>;
};

GridFill.displayName = 'GridFill';
GridFill.inheritAttrs = false;
export default GridFill;