// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShirtLineSvg from '@airclass/icons-svg/lib/asn/ShirtLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShirtLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShirtLineSvg}></AntdIcon>;
};

ShirtLine.displayName = 'ShirtLine';
ShirtLine.inheritAttrs = false;
export default ShirtLine;