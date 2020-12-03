// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TeamFillSvg from '@airclass/icons-svg/lib/asn/TeamFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TeamFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TeamFillSvg}></AntdIcon>;
};

TeamFill.displayName = 'TeamFill';
TeamFill.inheritAttrs = false;
export default TeamFill;