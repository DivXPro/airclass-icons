// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SurroundSoundLineSvg from '@airclass/icons-svg/lib/asn/SurroundSoundLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SurroundSoundLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SurroundSoundLineSvg}></AntdIcon>;
};

SurroundSoundLine.displayName = 'SurroundSoundLine';
SurroundSoundLine.inheritAttrs = false;
export default SurroundSoundLine;