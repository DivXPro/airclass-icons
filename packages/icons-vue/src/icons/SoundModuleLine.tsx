// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SoundModuleLineSvg from '@airclass/icons-svg/lib/asn/SoundModuleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SoundModuleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundModuleLineSvg}></AntdIcon>;
};

SoundModuleLine.displayName = 'SoundModuleLine';
SoundModuleLine.inheritAttrs = false;
export default SoundModuleLine;