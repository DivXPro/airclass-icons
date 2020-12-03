// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DiscordLineSvg from '@airclass/icons-svg/lib/asn/DiscordLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiscordLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscordLineSvg}></AntdIcon>;
};

DiscordLine.displayName = 'DiscordLine';
DiscordLine.inheritAttrs = false;
export default DiscordLine;