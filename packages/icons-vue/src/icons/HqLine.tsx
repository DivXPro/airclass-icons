// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HqLineSvg from '@airclass/icons-svg/lib/asn/HqLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HqLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HqLineSvg}></AntdIcon>;
};

HqLine.displayName = 'HqLine';
HqLine.inheritAttrs = false;
export default HqLine;