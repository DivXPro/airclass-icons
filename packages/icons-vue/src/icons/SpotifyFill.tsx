// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpotifyFillSvg from '@airclass/icons-svg/lib/asn/SpotifyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpotifyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpotifyFillSvg}></AntdIcon>;
};

SpotifyFill.displayName = 'SpotifyFill';
SpotifyFill.inheritAttrs = false;
export default SpotifyFill;