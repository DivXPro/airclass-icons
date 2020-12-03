// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TapeLineSvg from '@airclass/icons-svg/lib/asn/TapeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TapeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TapeLineSvg}></AntdIcon>;
};

TapeLine.displayName = 'TapeLine';
TapeLine.inheritAttrs = false;
export default TapeLine;