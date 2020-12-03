// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PaintLineSvg from '@airclass/icons-svg/lib/asn/PaintLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PaintLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaintLineSvg}></AntdIcon>;
};

PaintLine.displayName = 'PaintLine';
PaintLine.inheritAttrs = false;
export default PaintLine;