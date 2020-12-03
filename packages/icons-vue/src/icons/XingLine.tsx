// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import XingLineSvg from '@airclass/icons-svg/lib/asn/XingLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const XingLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={XingLineSvg}></AntdIcon>;
};

XingLine.displayName = 'XingLine';
XingLine.inheritAttrs = false;
export default XingLine;