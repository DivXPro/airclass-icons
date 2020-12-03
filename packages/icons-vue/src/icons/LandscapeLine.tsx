// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LandscapeLineSvg from '@airclass/icons-svg/lib/asn/LandscapeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LandscapeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LandscapeLineSvg}></AntdIcon>;
};

LandscapeLine.displayName = 'LandscapeLine';
LandscapeLine.inheritAttrs = false;
export default LandscapeLine;