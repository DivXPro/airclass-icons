// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TrophyFillSvg from '@airclass/icons-svg/lib/asn/TrophyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrophyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrophyFillSvg}></AntdIcon>;
};

TrophyFill.displayName = 'TrophyFill';
TrophyFill.inheritAttrs = false;
export default TrophyFill;