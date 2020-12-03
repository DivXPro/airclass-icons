// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShieldLineSvg from '@airclass/icons-svg/lib/asn/ShieldLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShieldLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldLineSvg}></AntdIcon>;
};

ShieldLine.displayName = 'ShieldLine';
ShieldLine.inheritAttrs = false;
export default ShieldLine;