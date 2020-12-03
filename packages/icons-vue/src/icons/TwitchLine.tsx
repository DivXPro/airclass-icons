// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TwitchLineSvg from '@airclass/icons-svg/lib/asn/TwitchLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TwitchLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TwitchLineSvg}></AntdIcon>;
};

TwitchLine.displayName = 'TwitchLine';
TwitchLine.inheritAttrs = false;
export default TwitchLine;