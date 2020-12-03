// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutRightLineSvg from '@airclass/icons-svg/lib/asn/LayoutRightLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutRightLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutRightLineSvg}></AntdIcon>;
};

LayoutRightLine.displayName = 'LayoutRightLine';
LayoutRightLine.inheritAttrs = false;
export default LayoutRightLine;