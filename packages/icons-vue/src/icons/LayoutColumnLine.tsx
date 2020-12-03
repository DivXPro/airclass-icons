// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutColumnLineSvg from '@airclass/icons-svg/lib/asn/LayoutColumnLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutColumnLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutColumnLineSvg}></AntdIcon>;
};

LayoutColumnLine.displayName = 'LayoutColumnLine';
LayoutColumnLine.inheritAttrs = false;
export default LayoutColumnLine;