// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VolumeDownLineSvg from '@airclass/icons-svg/lib/asn/VolumeDownLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VolumeDownLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeDownLineSvg}></AntdIcon>;
};

VolumeDownLine.displayName = 'VolumeDownLine';
VolumeDownLine.inheritAttrs = false;
export default VolumeDownLine;