// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VolumeVibrateLineSvg from '@airclass/icons-svg/lib/asn/VolumeVibrateLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VolumeVibrateLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeVibrateLineSvg}></AntdIcon>;
};

VolumeVibrateLine.displayName = 'VolumeVibrateLine';
VolumeVibrateLine.inheritAttrs = false;
export default VolumeVibrateLine;