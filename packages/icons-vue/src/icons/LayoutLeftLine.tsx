// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutLeftLineSvg from '@airclass/icons-svg/lib/asn/LayoutLeftLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutLeftLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutLeftLineSvg}></AntdIcon>;
};

LayoutLeftLine.displayName = 'LayoutLeftLine';
LayoutLeftLine.inheritAttrs = false;
export default LayoutLeftLine;