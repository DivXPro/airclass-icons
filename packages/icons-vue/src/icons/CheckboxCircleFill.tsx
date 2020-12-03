// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckboxCircleFillSvg from '@airclass/icons-svg/lib/asn/CheckboxCircleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckboxCircleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckboxCircleFillSvg}></AntdIcon>;
};

CheckboxCircleFill.displayName = 'CheckboxCircleFill';
CheckboxCircleFill.inheritAttrs = false;
export default CheckboxCircleFill;