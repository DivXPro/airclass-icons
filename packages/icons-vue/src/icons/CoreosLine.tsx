// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CoreosLineSvg from '@airclass/icons-svg/lib/asn/CoreosLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CoreosLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoreosLineSvg}></AntdIcon>;
};

CoreosLine.displayName = 'CoreosLine';
CoreosLine.inheritAttrs = false;
export default CoreosLine;