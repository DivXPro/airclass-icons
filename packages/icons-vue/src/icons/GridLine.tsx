// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GridLineSvg from '@airclass/icons-svg/lib/asn/GridLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GridLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridLineSvg}></AntdIcon>;
};

GridLine.displayName = 'GridLine';
GridLine.inheritAttrs = false;
export default GridLine;