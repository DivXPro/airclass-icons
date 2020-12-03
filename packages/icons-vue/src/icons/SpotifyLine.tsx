// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpotifyLineSvg from '@airclass/icons-svg/lib/asn/SpotifyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpotifyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpotifyLineSvg}></AntdIcon>;
};

SpotifyLine.displayName = 'SpotifyLine';
SpotifyLine.inheritAttrs = false;
export default SpotifyLine;