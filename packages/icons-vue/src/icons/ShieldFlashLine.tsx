// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShieldFlashLineSvg from '@airclass/icons-svg/lib/asn/ShieldFlashLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShieldFlashLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldFlashLineSvg}></AntdIcon>;
};

ShieldFlashLine.displayName = 'ShieldFlashLine';
ShieldFlashLine.inheritAttrs = false;
export default ShieldFlashLine;