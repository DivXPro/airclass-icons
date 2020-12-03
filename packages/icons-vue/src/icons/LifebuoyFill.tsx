// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LifebuoyFillSvg from '@airclass/icons-svg/lib/asn/LifebuoyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LifebuoyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LifebuoyFillSvg}></AntdIcon>;
};

LifebuoyFill.displayName = 'LifebuoyFill';
LifebuoyFill.inheritAttrs = false;
export default LifebuoyFill;