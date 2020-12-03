// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MeteorLineSvg from '@airclass/icons-svg/lib/asn/MeteorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MeteorLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MeteorLineSvg}></AntdIcon>;
};

MeteorLine.displayName = 'MeteorLine';
MeteorLine.inheritAttrs = false;
export default MeteorLine;