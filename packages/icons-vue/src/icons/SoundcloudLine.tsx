// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SoundcloudLineSvg from '@airclass/icons-svg/lib/asn/SoundcloudLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SoundcloudLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundcloudLineSvg}></AntdIcon>;
};

SoundcloudLine.displayName = 'SoundcloudLine';
SoundcloudLine.inheritAttrs = false;
export default SoundcloudLine;