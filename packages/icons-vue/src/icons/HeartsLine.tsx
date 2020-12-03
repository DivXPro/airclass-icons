// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeartsLineSvg from '@airclass/icons-svg/lib/asn/HeartsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartsLineSvg}></AntdIcon>;
};

HeartsLine.displayName = 'HeartsLine';
HeartsLine.inheritAttrs = false;
export default HeartsLine;