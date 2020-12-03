// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EmpathizeFillSvg from '@airclass/icons-svg/lib/asn/EmpathizeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EmpathizeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmpathizeFillSvg}></AntdIcon>;
};

EmpathizeFill.displayName = 'EmpathizeFill';
EmpathizeFill.inheritAttrs = false;
export default EmpathizeFill;