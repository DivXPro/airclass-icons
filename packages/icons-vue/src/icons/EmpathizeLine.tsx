// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EmpathizeLineSvg from '@airclass/icons-svg/lib/asn/EmpathizeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EmpathizeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmpathizeLineSvg}></AntdIcon>;
};

EmpathizeLine.displayName = 'EmpathizeLine';
EmpathizeLine.inheritAttrs = false;
export default EmpathizeLine;