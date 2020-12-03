// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TakeawayLineSvg from '@airclass/icons-svg/lib/asn/TakeawayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TakeawayLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TakeawayLineSvg}></AntdIcon>;
};

TakeawayLine.displayName = 'TakeawayLine';
TakeawayLine.inheritAttrs = false;
export default TakeawayLine;