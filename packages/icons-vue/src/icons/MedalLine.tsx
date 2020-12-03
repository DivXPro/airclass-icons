// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MedalLineSvg from '@airclass/icons-svg/lib/asn/MedalLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MedalLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedalLineSvg}></AntdIcon>;
};

MedalLine.displayName = 'MedalLine';
MedalLine.inheritAttrs = false;
export default MedalLine;