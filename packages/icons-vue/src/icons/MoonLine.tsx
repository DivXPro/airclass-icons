// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoonLineSvg from '@airclass/icons-svg/lib/asn/MoonLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoonLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonLineSvg}></AntdIcon>;
};

MoonLine.displayName = 'MoonLine';
MoonLine.inheritAttrs = false;
export default MoonLine;