// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HammerLineSvg from '@airclass/icons-svg/lib/asn/HammerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HammerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HammerLineSvg}></AntdIcon>;
};

HammerLine.displayName = 'HammerLine';
HammerLine.inheritAttrs = false;
export default HammerLine;