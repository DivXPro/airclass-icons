// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PatreonLineSvg from '@airclass/icons-svg/lib/asn/PatreonLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PatreonLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PatreonLineSvg}></AntdIcon>;
};

PatreonLine.displayName = 'PatreonLine';
PatreonLine.inheritAttrs = false;
export default PatreonLine;