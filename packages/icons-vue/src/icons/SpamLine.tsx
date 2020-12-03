// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpamLineSvg from '@airclass/icons-svg/lib/asn/SpamLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpamLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpamLineSvg}></AntdIcon>;
};

SpamLine.displayName = 'SpamLine';
SpamLine.inheritAttrs = false;
export default SpamLine;