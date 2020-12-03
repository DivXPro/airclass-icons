// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutBottomLineSvg from '@airclass/icons-svg/lib/asn/LayoutBottomLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutBottomLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutBottomLineSvg}></AntdIcon>;
};

LayoutBottomLine.displayName = 'LayoutBottomLine';
LayoutBottomLine.inheritAttrs = false;
export default LayoutBottomLine;