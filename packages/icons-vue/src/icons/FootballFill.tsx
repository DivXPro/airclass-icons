// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FootballFillSvg from '@airclass/icons-svg/lib/asn/FootballFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FootballFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FootballFillSvg}></AntdIcon>;
};

FootballFill.displayName = 'FootballFill';
FootballFill.inheritAttrs = false;
export default FootballFill;