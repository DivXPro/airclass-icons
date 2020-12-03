// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckboxMultipleFillSvg from '@airclass/icons-svg/lib/asn/CheckboxMultipleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckboxMultipleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckboxMultipleFillSvg}></AntdIcon>;
};

CheckboxMultipleFill.displayName = 'CheckboxMultipleFill';
CheckboxMultipleFill.inheritAttrs = false;
export default CheckboxMultipleFill;