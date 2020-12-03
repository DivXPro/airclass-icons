// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DragDropFillSvg from '@airclass/icons-svg/lib/asn/DragDropFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DragDropFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DragDropFillSvg}></AntdIcon>;
};

DragDropFill.displayName = 'DragDropFill';
DragDropFill.inheritAttrs = false;
export default DragDropFill;