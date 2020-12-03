// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SimCardLineSvg from '@airclass/icons-svg/lib/asn/SimCardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SimCardLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SimCardLineSvg}></AntdIcon>;
};

SimCardLine.displayName = 'SimCardLine';
SimCardLine.inheritAttrs = false;
export default SimCardLine;