// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BrushLineSvg from '@airclass/icons-svg/lib/asn/BrushLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BrushLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrushLineSvg}></AntdIcon>;
};

BrushLine.displayName = 'BrushLine';
BrushLine.inheritAttrs = false;
export default BrushLine;