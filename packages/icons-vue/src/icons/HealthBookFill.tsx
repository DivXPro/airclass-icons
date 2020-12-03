// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HealthBookFillSvg from '@airclass/icons-svg/lib/asn/HealthBookFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HealthBookFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HealthBookFillSvg}></AntdIcon>;
};

HealthBookFill.displayName = 'HealthBookFill';
HealthBookFill.inheritAttrs = false;
export default HealthBookFill;