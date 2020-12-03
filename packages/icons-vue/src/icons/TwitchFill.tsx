// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TwitchFillSvg from '@airclass/icons-svg/lib/asn/TwitchFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TwitchFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TwitchFillSvg}></AntdIcon>;
};

TwitchFill.displayName = 'TwitchFill';
TwitchFill.inheritAttrs = false;
export default TwitchFill;