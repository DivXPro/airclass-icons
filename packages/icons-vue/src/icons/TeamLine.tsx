// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TeamLineSvg from '@airclass/icons-svg/lib/asn/TeamLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TeamLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TeamLineSvg}></AntdIcon>;
};

TeamLine.displayName = 'TeamLine';
TeamLine.inheritAttrs = false;
export default TeamLine;