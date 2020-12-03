// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SteamLineSvg from '@airclass/icons-svg/lib/asn/SteamLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SteamLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SteamLineSvg}></AntdIcon>;
};

SteamLine.displayName = 'SteamLine';
SteamLine.inheritAttrs = false;
export default SteamLine;