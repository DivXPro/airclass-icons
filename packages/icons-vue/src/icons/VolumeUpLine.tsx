// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VolumeUpLineSvg from '@airclass/icons-svg/lib/asn/VolumeUpLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VolumeUpLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeUpLineSvg}></AntdIcon>;
};

VolumeUpLine.displayName = 'VolumeUpLine';
VolumeUpLine.inheritAttrs = false;
export default VolumeUpLine;