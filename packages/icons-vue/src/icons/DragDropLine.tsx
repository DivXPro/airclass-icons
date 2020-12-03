// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DragDropLineSvg from '@airclass/icons-svg/lib/asn/DragDropLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DragDropLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DragDropLineSvg}></AntdIcon>;
};

DragDropLine.displayName = 'DragDropLine';
DragDropLine.inheritAttrs = false;
export default DragDropLine;