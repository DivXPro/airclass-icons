// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import XboxLineSvg from '@airclass/icons-svg/lib/asn/XboxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const XboxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={XboxLineSvg}></AntdIcon>;
};

XboxLine.displayName = 'XboxLine';
XboxLine.inheritAttrs = false;
export default XboxLine;