// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DiscordFillSvg from '@airclass/icons-svg/lib/asn/DiscordFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiscordFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscordFillSvg}></AntdIcon>;
};

DiscordFill.displayName = 'DiscordFill';
DiscordFill.inheritAttrs = false;
export default DiscordFill;