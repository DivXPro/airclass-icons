// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DragMoveLineSvg from '@airclass/icons-svg/lib/asn/DragMoveLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DragMoveLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DragMoveLineSvg}></AntdIcon>;
};

DragMoveLine.displayName = 'DragMoveLine';
DragMoveLine.inheritAttrs = false;
export default DragMoveLine;