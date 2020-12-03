// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SunLineSvg from '@airclass/icons-svg/lib/asn/SunLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SunLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunLineSvg}></AntdIcon>;
};

SunLine.displayName = 'SunLine';
SunLine.inheritAttrs = false;
export default SunLine;