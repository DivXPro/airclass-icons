// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TrophyLineSvg from '@airclass/icons-svg/lib/asn/TrophyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrophyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrophyLineSvg}></AntdIcon>;
};

TrophyLine.displayName = 'TrophyLine';
TrophyLine.inheritAttrs = false;
export default TrophyLine;