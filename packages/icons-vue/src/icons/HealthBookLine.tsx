// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HealthBookLineSvg from '@airclass/icons-svg/lib/asn/HealthBookLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HealthBookLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HealthBookLineSvg}></AntdIcon>;
};

HealthBookLine.displayName = 'HealthBookLine';
HealthBookLine.inheritAttrs = false;
export default HealthBookLine;