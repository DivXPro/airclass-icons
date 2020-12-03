// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SteamFillSvg from '@airclass/icons-svg/lib/asn/SteamFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SteamFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SteamFillSvg}></AntdIcon>;
};

SteamFill.displayName = 'SteamFill';
SteamFill.inheritAttrs = false;
export default SteamFill;