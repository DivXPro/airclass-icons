// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VolumeVibrateFillSvg from '@airclass/icons-svg/lib/asn/VolumeVibrateFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VolumeVibrateFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeVibrateFillSvg}></AntdIcon>;
};

VolumeVibrateFill.displayName = 'VolumeVibrateFill';
VolumeVibrateFill.inheritAttrs = false;
export default VolumeVibrateFill;