// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SoundModuleFillSvg from '@airclass/icons-svg/lib/asn/SoundModuleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SoundModuleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundModuleFillSvg}></AntdIcon>;
};

SoundModuleFill.displayName = 'SoundModuleFill';
SoundModuleFill.inheritAttrs = false;
export default SoundModuleFill;