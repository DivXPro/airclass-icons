// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutLineSvg from '@airclass/icons-svg/lib/asn/LayoutLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutLineSvg}></AntdIcon>;
};

LayoutLine.displayName = 'LayoutLine';
LayoutLine.inheritAttrs = false;
export default LayoutLine;