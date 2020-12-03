// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FootballLineSvg from '@airclass/icons-svg/lib/asn/FootballLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FootballLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FootballLineSvg}></AntdIcon>;
};

FootballLine.displayName = 'FootballLine';
FootballLine.inheritAttrs = false;
export default FootballLine;