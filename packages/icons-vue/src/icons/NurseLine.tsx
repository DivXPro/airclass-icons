// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NurseLineSvg from '@airclass/icons-svg/lib/asn/NurseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NurseLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NurseLineSvg}></AntdIcon>;
};

NurseLine.displayName = 'NurseLine';
NurseLine.inheritAttrs = false;
export default NurseLine;