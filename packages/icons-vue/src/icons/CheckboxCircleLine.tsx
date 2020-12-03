// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckboxCircleLineSvg from '@airclass/icons-svg/lib/asn/CheckboxCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckboxCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckboxCircleLineSvg}></AntdIcon>;
};

CheckboxCircleLine.displayName = 'CheckboxCircleLine';
CheckboxCircleLine.inheritAttrs = false;
export default CheckboxCircleLine;